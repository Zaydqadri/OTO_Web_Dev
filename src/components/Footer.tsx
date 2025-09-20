export default function Footer() {
  return (
    <footer className="border-t border-[color:rgb(0_0_0_/_0.06)] bg-white">
      <div className="mx-auto max-w-6xl p-4 text-sm text-[var(--muted)]">
        © {new Date().getFullYear()} <span className="text-[var(--brand)]">Masjid Network</span>
      </div>
    </footer>
  );
}
