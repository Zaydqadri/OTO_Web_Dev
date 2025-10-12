export default function ContactPage() {
  const email = "ontariotaraweehoutreach@gmail.com";

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-[var(--brand)]">Contact Us</h1>

      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.15)] bg-white p-5 mb-6">
        <p className="mb-4 text-[var(--brand)]/90">
          We are always looking to grow and connect with more communities across Ontario and beyond.
          If you would like to get in touch, please contact us with the details listed below.
        </p>
          <p className="mt-5 text-[var(--ink)]/90">
          Please also feel free to reach out to suggest any changes or improvements.
        </p>

        {/* <a
          href={`mailto:${email}`}
          className="inline-block mb-3 mt-3 px-6 py-4 rounded-xl bg-[var(--brand)] text-white text-md font-sm hover:bg-[var(--brand-700)] transition-colors font-semibold"
        >
          Email Us
        </a> */}

        {/* <p className="mt-4 mb-5 text-[var(--ink)]/90">
          Reach us by email here:{" "}
          <a href={`mailto:${email}`} className="underline text-[var(--brand)]">
            {email}
          </a>
        </p> */}

        {/* <p className="text-[var(--ink)]/90">
          Reach us through a WhatsApp message or phone call here:{" "}
          <a href="tel:16475816081" className="underline text-[var(--brand)]">
            647&nbsp;581&nbsp;6081
          </a>{" "}
          or{" "}
          <a href="tel:16474107176" className="underline text-[var(--brand)]">
            647&nbsp;410&nbsp;7176
          </a>.
        </p> */}


        {/* ✅ Added missing closing div here */}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          ["Email", "ontariotaraweehoutreach@gmail.com"],
          ["Phone/WhatsApp", "(647) 581-6081 or (647) 410-7176"],
        ].map(([t, d]) => {
          const isEmail = t === "Email";
          return (
            <div key={t} className="rounded-xl border border-[color:rgb(0_0_0_/_0.15)] bg-white p-5">
              <div className="text-sm font-semibold text-[var(--brand)]">{t}</div>
              <div className="text-[var(--muted)]">
                {isEmail ? (
                  <a href={`mailto:${d}`} className="hover:underline">{d}</a>
                ) : (
                  <>
                    <a href="tel:6475816081" className="hover:underline">647-581-6081</a>
                    {" or "}
                    <a href="tel:6474107176" className="hover:underline">647-410-7176</a>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}