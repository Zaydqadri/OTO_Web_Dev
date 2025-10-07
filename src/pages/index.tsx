export default function Home() {
  return (
    <section className="mx-auto max-w-6xl py-16 px-4">
      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.06)] bg-white p-10 text-center">
        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[color:rgb(0_0_0_/_0.08)]">
          {/* simple construction icon */}
          <svg viewBox="0 0 24 24" className="h-7 w-7 text-[var(--brand)]" fill="none" stroke="currentColor" strokeWidth={1.6}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M7 21v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6M9 7l.867-1.803A2 2 0 0 1 11.694 4h.612a2 2 0 0 1 1.827 1.197L15 7M9 7h6M9 7v3m6-3v3" />
          </svg>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[var(--brand)]">
          We’re Under Construction
        </h1>
        <p className="mt-3 text-[var(--muted)] max-w-2xl mx-auto">
          We’re working on something meaningful for our community. Please check back soon.
        </p>
      </div>
    </section>
  );
}
