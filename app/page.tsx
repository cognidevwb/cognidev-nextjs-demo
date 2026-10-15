import { Button, Badge } from "cognidev-ui-kit";
import { createClient } from "cognidev-api-client";

const api = createClient(process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001");

export default async function Home() {
  const todos = await api.listTodos().catch(() => []);
  return (
    <main>
      <h1>CogniDev Demo <Badge label="live" tone="success" /></h1>
      <ul>{todos.map((t) => <li key={t.id}>{t.title}</li>)}</ul>
      <Button>Refresh</Button>
    </main>
  );
}
// suppressHydrationWarning candidate
