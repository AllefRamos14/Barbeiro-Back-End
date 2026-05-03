import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const adminEmail = "admin@email.com";
    const adminPassword = "admin123";

    const adminExists = await prisma.admin.findUnique({
        where: {
            email: adminEmail,
        },
    });

    if (adminExists) {
        console.log("Admin já existe.");
        return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    await prisma.admin.create({
        data: {
            name: "Administrador",
            email: adminEmail,
            password: hashedPassword,
        },
    });

    console.log("Admin criado com sucesso.");
}

main()
    .catch((error) => {
        console.error("Erro ao criar admin:", error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });