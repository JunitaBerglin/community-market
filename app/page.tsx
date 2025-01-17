import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>Hello world</main>
      <Link href="/users">Users</Link>
    </div>
  );
}
