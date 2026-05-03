import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";
import { authAdmin } from "../../middlewares/authAdmin.js";
import { prisma } from "../../prisma.js";

const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: "E-mail e senha são obrigatórios.",
            });
        }

        const admin = await prisma.admin.findUnique({
            where: { email },
        });

        if (!admin) {
            return res.status(401).json({
                error: "Credenciais inválidas.",
            });
        }

        const passwordIsValid = await bcrypt.compare(password, admin.password);

        if (!passwordIsValid) {
            return res.status(401).json({
                error: "Credenciais inválidas.",
            });
        }

        const token = jwt.sign(
            {
                id: admin.id,
                email: admin.email,
                role: "admin",
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        return res.json({
            message: "Login realizado com sucesso.",
            token,
            admin: {
                id: admin.id,
                name: admin.name,
                email: admin.email,
            },
        });
    } catch (error) {
        return res.status(500).json({
            error: "Erro interno ao fazer login.",
        });
    }
});

router.get("/me", authAdmin, async (req, res) => {
    return res.json({
        admin: req.admin,
    });
});

export default router;
