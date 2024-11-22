import { createRequestHandler } from "@remix-run/express";
import express, { Request, Response } from "express";
import dotenv from "dotenv";
import authRouter from "&/routes/auth";
import contactRouter from "&/routes/contact";
import chatRouter from "&/routes/chat";
import { HttpError } from "http-errors-enhanced";
import logger from "&/lib/logger";
import documentRouter from "&/routes/documents";
import "&/db";

dotenv.config();

const app = express();
const api = express.Router();

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : // @ts-ignore
      await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

app.use(
  viteDevServer ? viteDevServer.middlewares : express.static("build/client")
);

const build = viteDevServer
  ? async () => await viteDevServer.ssrLoadModule("virtual:remix/server-build")
  : await import("build/server/index.js");

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use("/auth", authRouter);
api.use("/chat", chatRouter);
api.use("/contact", contactRouter);
api.use("/documents", documentRouter);
api.use(
  (err: Error, req: Request, res: Response, next: express.NextFunction) => {
    if (err instanceof HttpError) {
      res.status(err.statusCode).json({ message: err.message });
    } else {
      next(err);
    }
  }
);

api.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use("/api", api);

// @ts-ignore
app.all("*", createRequestHandler({ build }));

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  logger.info("App listening on http://localhost:" + port);
});
