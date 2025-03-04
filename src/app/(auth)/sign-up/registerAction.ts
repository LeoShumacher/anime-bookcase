"use server";

import db from "@/src/lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(
  _prevState: any,
  FormData: FormData
) {
  const entries = Array.from(FormData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
  };

  if (!data.name || !data.email || !data.password) {
    return {
      message: "Preencha todos os campos",
      sucess: false,
    };
  }

  const user = await db.user.findUnique({
    where: { email: data.email },
  });

  if (user) {
    return {
      message: "Usuário já registrado",
      sucess: false,
    };
  }

  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password),
    },
  });

  return {
    message: "Usuário criado com sucesso",
    sucess: true,
  };
}
