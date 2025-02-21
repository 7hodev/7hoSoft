"use server";

import { signIn } from "@/auth";
import { loginSchema } from "@/lib/zod";
import { z } from "zod";
import { AuthError } from "@auth/core/errors";

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
