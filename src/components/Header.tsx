import Link from "next/link";

export default function Header() {
  const link =
    "px-3 py-2 rounded-lg hover:bg-[var(--brand-50)] transition-colors text-[var(--ink)]";
  return (
    <header className="border-b border-[color:rgb(0_0_0_/_0.06)] bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl p-4 flex items-center justify-between">
        <Link href="/" className="font-semibold text-xl text-[var(--brand)]">
          Masjid Network
        </Link>
        <nav className="flex gap-1">
          <Link className={link} href="/about">About</Link>
          <Link className={link} href="/apply">Apply</Link>
          <Link className={link} href="/listings">Listings</Link>
        </nav>
      </div>
    </header>
  );
}
