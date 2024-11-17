import { Router } from "express";
import resend from "server/lib/resend";

const contactRouter = Router();

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
}

contactRouter.post<{}, ApiResponse, ContactRequestBody>(
  "/",
  async (req, res): Promise<void> => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      res
        .status(400)
        .json({ success: false, message: "Todos los campos son requeridos" });
      return;
    }

    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    if (!fromEmail || !toEmail) {
      console.error("Faltan variables de entorno necesarias");
      res.status(500).json({
        success: false,
        message: "Error en la configuración del servidor",
      });
      return;
    }

    try {
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: "Nuevo mensaje de contacto",
        html: `
          <h1>Nuevo mensaje de contacto</h1>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong> ${message}</p>
      `,
      });

      if (error) {
        console.error("Error al enviar el email:", error);
        res.status(500).json({
          success: false,
          message:
            "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
        });
        return;
      }

      res
        .status(200)
        .json({ success: true, message: "Mensaje enviado con éxito" });
    } catch (error) {
      console.error("Error inesperado al enviar el email:", error);
      res.status(500).json({
        success: false,
        message:
          "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.",
      });
    }
  }
);

export default contactRouter;
