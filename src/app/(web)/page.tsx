import LogoutButton from "@/src/components/LogoutButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <div>
      <span className="text-3xl flex gap-2">
        Bem vindo <p className="font-semibold">{session.user?.name}</p>
      </span>
      <LogoutButton />
    </div>
  );
}
