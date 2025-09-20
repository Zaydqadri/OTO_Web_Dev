export default function ApplyPage() {
  const src = "https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true";
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--brand)] mb-4">Apply</h1>

      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.06)] bg-white p-3">
        <div className="aspect-[3/4] w-full overflow-hidden rounded-xl ring-1 ring-[var(--ring)]/40">
          <iframe
            title="Application Form"
            src={src}
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-[var(--muted)] mt-3">
          Trouble loading?{" "}
          <a className="underline text-[var(--brand)]" href={src.replace("?embedded=true", "")}>
            Open the form in a new tab
          </a>.
        </p>
      </div>
    </section>
  );
}
