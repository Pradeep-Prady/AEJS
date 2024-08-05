import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";
import career from "./src/route/career.js";
import contact from "./src/route/contact.js";
import admin from "./src/route/admin.js";
import globalResponseController from "./src/utils/response-handlers/global-response-controller.js";
import next from "next";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:8000",
  "https://aejs.vercel.app/",
  "http://127.0.0.1:3000",
  "https://www.aejsinfo.com",
];
app.use(cookieParser());

const corsOptions = {
  // origin: "https://aejs.vercel.app",
  origin: allowedOrigins,
  credentials: true, // Enable CORS with credentials
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/src/uploads", express.static(path.join(__dirname, "src/uploads")));
app.use("/public", express.static(path.join(__dirname, "public")));

app.use("/api/career", career);
app.use("/api/contact", contact);
app.use("/api/admin", admin);

// const dev = process.env.NODE_ENV !== "production";
// const nextApp = next({ dev, dir: path.join(__dirname, "../frontend") }); // Ensure Next.js uses the correct directory
// const handle = nextApp.getRequestHandler();

// nextApp.prepare().then(() => {
//   app.use("/.next", express.static(path.join(__dirname, "../frontend/.next")));
//   app.use(
//     "/static",
//     express.static(path.join(__dirname, "../frontend/.next/static"))
//   );

//   app.get("*", (req, res) => handle(req, res));

//   const port = process.env.PORT || 3000;
//   app.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`Ready on http://localhost:${port}`);
//   });
// });

app.use(globalResponseController);

export default app;
