"use client";
import registerAction from "@/src/app/(auth)/register/registerAction";
import Form from "next/form";
import { useActionState } from "react";
import Input from "../Input";
import Button from "../Button";

export default function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null);
  console.log(formAction);
  console.log(state);
  return (
    <>
      <Form
        action={formAction}
        className="w-80 h-content border p-3 rounded-xl flex flex-col gap-2 justify-center"
      >
        {state?.sucess === false && (
          <div>
            <div className="border-2 border-red-800 p-2 text-red-800 font-semibold text-sm bg-red-200 rounded-md">
              <p>{state?.message}</p>
            </div>
          </div>
        )}
        <div>
          <label htmlFor="">Nome:</label>
          <Input type="text" name="name" placeholder="João Silva" />
        </div>
        <div>
          <label htmlFor="">Email:</label>
          <Input
            type="email"
            name="email"
            placeholder="joao.silva@example.com"
          />
        </div>
        <div>
          <label htmlFor="">Senha:</label>
          <Input type="password" name="password" placeholder="********" />
        </div>
        <Button
          className="bg-zinc-800 hover:bg-zinc-800/90 disabled:bg-zinc-800/60"
          disabled={isPending}
          type="submit"
        >
          Registrar
        </Button>
      </Form>
    </>
  );
}
