import { createRequestHandler } from "@remix-run/express";
import express, {
  json,
  Request,
  Response,
  Router,
  static as static_,
  urlencoded,
} from "express";
import { config } from "dotenv";
import authRouter from "&/routes/auth";
import contactRouter from "&/routes/contact";
import chatRouter from "&/routes/chat";
import { HttpError } from "http-errors-enhanced";
import logger from "&/lib/logger";
import documentRouter from "&/routes/documents";
import "&/db";

config();

const app = express();
const api = Router();

const viteDevServer =
  process.env.NODE_ENV === "production"
    ? null
    : await import("vite").then((vite) =>
        vite.createServer({
          server: { middlewareMode: true },
        })
      );

app.use(viteDevServer ? viteDevServer.middlewares : static_("build/client"));

const build = viteDevServer
  ? async () => await viteDevServer.ssrLoadModule("virtual:remix/server-build")
  : await import("build/server/index.js");

api.use(json());
api.use(urlencoded({ extended: true }));

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

// @ts-expect-error - Remix types are not available
app.all("*", createRequestHandler({ build }));

const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  logger.info("App listening on http://localhost:" + port);
});
