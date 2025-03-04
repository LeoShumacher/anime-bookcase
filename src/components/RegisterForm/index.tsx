"use client";
import registerAction from "@/src/app/(auth)/register/registerAction";
import Form from "next/form";
import { useActionState } from "react";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);
  console.log(formAction);
  console.log(state);
  return (
    <>
      {state?.sucess === true && <div>{state?.message}</div>}
      {state?.sucess === false && <div>{state?.message}</div>}
      <Form action={formAction}>
        <div>
          <label htmlFor="">Nome</label>
          <input type="text" name="name" placeholder="João Silva" />
        </div>
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
