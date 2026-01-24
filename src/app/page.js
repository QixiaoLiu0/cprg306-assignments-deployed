import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <nav>
        <ul>
          <li>
            <Link href="/week-2">Week_2</Link>
          </li>
          <li>
            <Link href="/week-3">Week_3</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
