import { validateRequest } from "@/auth/validate-request";

export default async function Home() {
  const { user } = await validateRequest();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Hello</p>
    </main>
  );
}
