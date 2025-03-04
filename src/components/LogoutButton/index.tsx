"use client";
import { signOut } from "next-auth/react";
import Button from "../Button";

export default function LogoutButton() {
  return (
    <Button
      className="w-20 bg-zinc-800 hover:bg-zinc-800/90 disabled:bg-zinc-800/60"
      onClick={() => signOut()}
    >
      Sair
    </Button>
  );
}
