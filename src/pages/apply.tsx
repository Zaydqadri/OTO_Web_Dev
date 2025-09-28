export default function ApplyPage() {
  const link = "https://forms.gle/zZeWXFbnyBoPL35d7";

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--brand)] mb-4">Apply</h1>

      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.06)] bg-white p-5 mb-6">
        <p className="text-[var(--ink)]/90">
          If you are interested and have not filled in our form for this year, please do so below to receive further details.
        </p>
        <p className="mt-3 text-[var(--ink)]/90">
          Please continue to spread the word. If you know of any Huffaz or Masajid who would benefit from this initiative,
          please let them know to fill in the form. Jazakallah.
        </p>

        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-4 py-2 text-white font-semibold hover:bg-[var(--brand-700)] transition-colors"
        >
          Open Application Form
        </a>
      </div>

      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.06)] bg-white p-3">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-xl ring-1 ring-[var(--ring)]/40">
          <iframe
            title="Application Form"
            src={link}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-[var(--muted)] mt-3">
          Trouble loading?{" "}
          <a className="underline text-[var(--brand)]" href={link} target="_blank" rel="noreferrer">
            Open the form in a new tab
          </a>.
        </p>
      </div>
    </section>
  );
}
