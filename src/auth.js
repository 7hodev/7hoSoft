import NextAuth from "next-auth"
import authConfig from "./auth.config"
import { db } from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  callbacks: {
    // jwt() se ejecuta cada vez que se crea o actualiza un token JWT
    // Aquí es donde puedes agregar información adicional al token 
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.role = user.role;
      }
      return token;
    },
    // session() se utiliza para agregar la información del toen a la sesión del usuario, lo que hace que este disponible en el cliente
    session({ session, token }) {
      if (session.user) {
        session.user.role = token.role;
      }
      return session;
    },
  },
})