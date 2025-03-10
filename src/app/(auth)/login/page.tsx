import LoginForm from "@/src/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="w-full h-full flex  items-center justify-center">
      <LoginForm />
    </div>
  );
}
