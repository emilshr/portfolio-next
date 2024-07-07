import { validateRequest } from "@/auth/validate-request";
import Image from "next/image";

export default async function Home() {
  const { user } = await validateRequest();

  console.log({ user });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Hello</p>
    </main>
  );
}
