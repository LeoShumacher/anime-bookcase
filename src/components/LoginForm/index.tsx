"use client";

import loginAction from "@/src/app/(auth)/login/loginAction";
import Form from "next/form";
import { useActionState } from "react";

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null);
  return (
    <>
      <Form action={loginAction}>
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
      </Form>
    </>
  );
}
