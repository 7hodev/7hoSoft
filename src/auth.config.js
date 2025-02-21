import NextAuth, { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { loginSchema } from "./lib/zod"
import { db } from "@/lib/db"
import bcrypt from "bcryptjs";
 
export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        const {data, success} = loginSchema.safeParse(credentials);

        if (!success) {
          throw new Error("Invalid credentials");
        }

        // Verificar si el usuario existe en la base de datos
        const user = await db.user.findUnique({
          where: {
            email: data.email,
          },
        });
        if (!user || !user.password) {
          throw new Error("No user found");
        }

        // Verificar si la contraseña es correcta
        const isValid = await bcrypt.compare(data.password, user.password);

        if (!isValid) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
}