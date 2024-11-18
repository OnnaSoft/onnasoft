import { Router } from "express";
import { HttpError } from "http-errors-enhanced";
import resend from "&/lib/resend";
import { HTTPResponse } from "&/types/http";
import logger from "&/lib/logger";

const contactRouter = Router();

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

type ApiResponse = HTTPResponse<{
  message: string;
}>;

contactRouter.post<{}, ApiResponse, ContactRequestBody>(
  "/",
  async (req, res, next): Promise<void> => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      throw new HttpError(400, "Todos los campos son requeridos");
    }

    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    if (!fromEmail || !toEmail) {
      logger.error("Faltan variables de entorno necesarias");
      throw new HttpError(500, "Error en la configuración del servidor");
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
        logger.error("Error al enviar el email:", error);
        throw new HttpError(
          500,
          "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde."
        );
      }

      res.status(200).json({
        success: true,
        data: { message: "Mensaje enviado correctamente" },
      });
    } catch (error) {
      logger.error("Error inesperado al enviar el email:", error);
      next(error);
    }
  }
);

export default contactRouter;
