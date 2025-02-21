import { PrismaClient } from "@prisma/client"

const prismaClientSingleton = () => {
    return new PrismaClient();
};

globalThis.prismaGlobal = prismaClientSingleton();

export const db = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = db;