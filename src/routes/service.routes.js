import express from "express";
import { authAdmin } from "../middlewares/authAdmin.js";
import { prisma } from "../prisma.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.json(services);
  } catch (error) {
    console.error("Erro ao buscar serviços:", error);

    return res.status(500).json({
      error: "Erro ao buscar serviços.",
      details: error.message,
    });
  }
});

router.post("/", authAdmin, async (req, res) => {
  try {
    console.log("CONTENT-TYPE:", req.headers["content-type"]);
    console.log("BODY RECEBIDO:", req.body);

    const body = req.body ?? {};

    const title = body.title?.trim();
    const description = body.description?.trim();
    const price = body.price ? String(body.price).trim() : "";
    const duration = body.duration?.trim();

    if (!title || !description || !price) {
      return res.status(400).json({
        error: "Título, descrição e preço são obrigatórios.",
        receivedBody: body,
        receivedContentType: req.headers["content-type"] ?? null,
      });
    }

    const service = await prisma.service.create({
      data: {
        title,
        description,
        price,
        duration,
      },
    });

    return res.status(201).json(service);
  } catch (error) {
    console.error("Erro ao criar serviço:", error);

    return res.status(500).json({
      error: "Erro ao criar serviço.",
      details: error.message,
    });
  }
});

router.put("/:id", authAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, duration, active } = req.body ?? {};

    const service = await prisma.service.update({
      where: { id },
      data: {
        title,
        description,
        price: String(price),
        duration,
        active,
      },
    });

    return res.json(service);
  } catch (error) {
    console.error("Erro ao atualizar serviço:", error);

    return res.status(500).json({
      error: "Erro ao atualizar serviço.",
      details: error.message,
    });
  }
});

router.delete("/:id", authAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.service.delete({
      where: { id },
    });

    return res.json({
      message: "Serviço deletado com sucesso.",
    });
  } catch (error) {
    console.error("Erro ao deletar serviço:", error);

    return res.status(500).json({
      error: "Erro ao deletar serviço.",
      details: error.message,
    });
  }
});

export default router;
