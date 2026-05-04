import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import adminRoutes from "./routes/admin.routes.js";
import serviceRoutes from "./routes/service.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://barbeiro-front-end.vercel.app",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origem não permitida pelo CORS"));
    },
    credentials: true,
  })
);


app.use(express.json({ type: "*/*" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", adminRoutes);
app.use("/api/services", serviceRoutes);

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "API da barbearia rodando com sucesso.",
    docs: {
      health: "/api/health",
      services: "/api/services",
    },
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "API rodando com sucesso.",
  });
});

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

server.on("error", (error) => {
  console.error("Erro ao iniciar servidor:", error);
});
