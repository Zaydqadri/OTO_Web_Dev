export default function Home() {
  return (
    <section className="mx-auto max-w-6xl py-16 px-4">
      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.06)] bg-white p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--brand)]">
          Connecting Masājid & Ḥuffāẓ
        </h1>
        <p className="mt-3 text-[var(--muted)] max-w-2xl">
          Post opportunities and find qualified ḥuffāẓ for Tarāwīḥ, Jumu‘ah, teaching, and more.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/listings"
             className="inline-flex items-center rounded-xl border border-[var(--brand)] bg-[var(--brand)] px-4 py-2 text-white">
            Browse listings for Everything
          </a>
          <a href="/apply"
             className="inline-flex items-center rounded-xl border border-[color:rgb(0_0_0_/_0.10)] bg-white px-4 py-2 text-[var(--ink)] hover:bg-[var(--brand-50)]">
            Submit a lot of things
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ["Simple", "Clean, distraction-free pages."],
          ["Fast", "Static pages with a tiny API for data."],
          ["Accessible", "Good contrast, keyboard-friendly."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-xl border border-[color:rgb(0_0_0_/_0.06)] bg-white p-5">
            <div className="text-sm font-semibold text-[var(--brand)]">{t}</div>
            <div className="text-[var(--muted)]">{d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

