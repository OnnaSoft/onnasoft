import { createRequestHandler } from "@remix-run/express";
import express from "express";
import authRouter from "routes/auth";
import contactRouter from "routes/contact";
import dotenv from "dotenv";

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
api.use("/contact", contactRouter);

api.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use("/api", api);

// @ts-ignore
app.all("*", createRequestHandler({ build }));

app.listen(3000, () => {
  console.log("App listening on http://localhost:3000");
});
