"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const router = useRouter();

  return (
    <div>
      <header>
        <Link href="/">
          <h1>Task App</h1>
        </Link>
        <div>
          <button onClick={() => router.push("/new")}>Add Task</button>
        </div>
      </header>
    </div>
  );
}
