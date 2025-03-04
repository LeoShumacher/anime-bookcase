"use server";

export default async function registerAction(FormData: FormData) {
  const entries = Array.from(FormData.entries());
  const data = Object.fromEntries(entries);

  console.log(data);
}
