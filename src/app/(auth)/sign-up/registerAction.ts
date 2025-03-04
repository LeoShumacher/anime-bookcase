"use server";

export default async function registerAction(FormData: FormData) {
  const entries = Array.from(FormData.entries());
  const data = Object.fromEntries(entries);

  console.log(data);

  if (!data.name || !data.email || !data.password) {
    throw new Error("Você precisa preencher todos os campos");
  }
}
