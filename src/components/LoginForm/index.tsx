"use client";

import loginAction from "@/src/app/(auth)/login/loginAction";

import Form from "next/form";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  if (state?.success === true) {
    redirect("/");
  }
  return (
    <>
      {state?.success === false && <p>dados de login incorretos</p>}
      <Form action={formAction}>
        <div>
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="joao.silva@example.com"
          />
        </div>
        <div>
          <label htmlFor="">Senha</label>
          <input type="password" name="password" placeholder="********" />
        </div>
        <button disabled={isPending} type="submit">
          enviar
        </button>

        <Link href={"/register"}> Não tem uma conta? </Link>
      </Form>
    </>
  );
}
