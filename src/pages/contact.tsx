export default function ContactPage() {
  const email = "ontariotaraweehoutreach@gmail.com";

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-[var(--brand)]">Contact Us</h1>

      <p className="mb-6 text-[var(--ink)]/90">
        If you would like to get in touch, please email us or send a WhatsApp message to the numbers below.
      </p>

     <a
        href={`mailto:${email}`}
        className="inline-block mb-4 px-6 py-4 rounded-xl bg-[var(--brand)] text-white text-md font-sm hover:bg-[var(--brand-700)] transition-colors font-semibold"
      >
       Email Us
      </a>

        
      <p className="mt-4 mb-8 text-[var(--ink)]/90">
        Or email us directly at{" "}
        <a
          href={`mailto:${email}`}
          className="underline text-[var(--brand)]"
        >
          {email}
        </a>
      </p>

      <p className="text-[var(--ink)]/90">
        Or call us at{" "}
        <a href="tel:16475816081" className="underline text-[var(--brand)]">
          647&nbsp;581&nbsp;6081
        </a>{" "}
        or{" "}
        <a href="tel:16474107176" className="underline text-[var(--brand)]">
          647&nbsp;410&nbsp;7176
        </a>.
      </p>
    </section>
  );
}
