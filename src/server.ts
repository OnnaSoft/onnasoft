import { createRequestHandler } from "@remix-run/express";
import express from "express";
import dotenv from "dotenv";
import authRouter from "src/routes/auth";
import contactRouter from "src/routes/contact";
import chatRouter from "src/routes/chat.js";

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
  : // @ts-ignore
    await import("./build/server/index.js");

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.use("/auth", authRouter);
api.use("/chat", chatRouter);
api.use("/contact", contactRouter);

api.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use("/api", api);

// @ts-ignore
app.all("*", createRequestHandler({ build }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("App listening on http://localhost:" + port);
});
