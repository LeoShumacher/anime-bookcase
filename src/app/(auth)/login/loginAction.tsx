import { signIn } from "next-auth/react";

export default async function loginAction(
  _prevState: unknown,
  formData: FormData
) {
  try {
    const result = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, message: "Dados de login incorretos" };
    }

    return { success: true };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return { success: false, message: "Erro inesperado durante o login" };
  }
}
