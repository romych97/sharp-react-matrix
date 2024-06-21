import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Matrix and Vector Operations</h1>
      <nav>
        <ul>
          <li>
            <Link href="/matrices">Matrix Multiplication</Link>
          </li>
          <li>
            <Link href="/vectors">Vector Multiplication</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
