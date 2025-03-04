"use client";

import loginAction from "@/src/app/(auth)/login/loginAction";

import Form from "next/form";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import Button from "../Button";
import Input from "../Input";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  if (state?.success === true) {
    redirect("/");
  }
  return (
    <>
      <Form
        action={formAction}
        className="w-80 h-80 border p-3 rounded-xl flex flex-col gap-2 justify-center"
      >
        {state?.success === false && (
          <div className="border-2 border-red-800 p-2 text-red-800 font-semibold text-sm bg-red-200 rounded-md">
            <p>Usuário ou senha incorretos.</p>
          </div>
        )}
        <div className="flex flex-col">
          <label htmlFor="">Email:</label>
          <Input
            type="email"
            name="email"
            placeholder="joao.silva@example.com"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Senha:</label>
          <Input type="password" name="password" placeholder="********" />
        </div>
        <Button
          className="bg-zinc-800 hover:bg-zinc-800/90 disabled:bg-blue-800/60"
          disabled={isPending}
          type="submit"
        >
          Entrar
        </Button>

        <span className="flex gap-1">
          <p>Não possui uma conta?</p>
          <Link className="text-gray-500 hover:underline" href={"/register"}>
            clique aqui
          </Link>
        </span>
      </Form>
    </>
  );
}
