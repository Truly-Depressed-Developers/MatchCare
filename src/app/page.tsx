import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-around">
      <Link href="/company">Company</Link>
      <Link href="/ngo">NGO</Link>
    </div>
  );
}
