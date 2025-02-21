import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis; // Elimina 'as unknown as { prisma: PrismaClient }'

globalForPrisma.prisma = globalForPrisma.prisma || new PrismaClient();

export const prisma = globalForPrisma.prisma;

 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma