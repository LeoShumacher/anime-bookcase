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
      {" "}
      Bem vindo {session.user?.name} <LogoutButton />
    </div>
  );
}
