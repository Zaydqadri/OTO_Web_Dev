export default function Footer() {
  return (
    <footer className="border-t border-[color:rgb(0_0_0_/_0.06)] bg-white">
      <div className="mx-auto max-w-6xl p-4 flex flex-col sm:flex-row items-center justify-between text-sm text-[var(--muted)] gap-3">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--brand)]">Ontario Taraweeh Outreach</span>
        </div>

        {/* Instagram link */}
        <a
          href="https://instagram.com/ontariotaraweehoutreach"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1 text-[var(--brand)] hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-4 h-4"
          >
            <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 
                     0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2c1.654 0 3 
                     1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 
                     1.346-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 
                     3 0 110 6 3 3 0 010-6zm4.5-.5a1.5 1.5 0 11-3 0 
                     1.5 1.5 0 013 0z" />
          </svg>
          @ontariotaraweehoutreach
        </a>
      </div>
    </footer>
  );
}
