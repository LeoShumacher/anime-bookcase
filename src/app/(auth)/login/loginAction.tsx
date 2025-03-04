import { signIn } from "next-auth/react";

function formDataToObject(formData: FormData): Record<string, string> {
  const obj: Record<string, string> = {};
  formData.forEach((value, key) => {
    obj[key] = value.toString();
  });
  return obj;
}

export default async function loginAction(formData: FormData) {
  const data = formDataToObject(formData);
  await signIn("credentials", data);
}
