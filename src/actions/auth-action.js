"use server";

import { signIn } from "@/auth";
import { loginSchema, registerSchema } from "@/lib/zod";
import { db } from "@/lib/db";
import { AuthError } from "@auth/core/errors";
import bcrypt from "bcryptjs";

export const loginAction = async (values) => {
  try {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    return { success: true };

  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "Error 500: Error interno del servidor" };
  }
};

export const registerAction = async ( values ) => { 
  try {
    const { data, success } = registerSchema.safeParse(values);
    if (!success) {
      return { error: "Invalid data" };
    }

    // Verificar si el usuario existe en la base de datos
    const user = await db.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (user) {
      return { error: "User already exists" };
    }

    // hash de la contraseña
    const passwordHash = await bcrypt.hash(data.password, 10);

    // Crear el usuario en la base de datos
    await db.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: passwordHash,
      },
    });

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    
    return { success: true };

  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    return { error: "Error 500: Error interno del servidor" };
  }
};
