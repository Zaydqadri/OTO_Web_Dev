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
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {[
          ["Email", "ontariotaraweehoutreach@gmail.com", "/email.svg"],
          ["Phone/WhatsApp", "(647) 581-6081 or (647) 410-7176", "/phone.svg"],
        ].map(([t, d, icon]) => {
          const isEmail = t === "Email";
          return (
            <div
              key={t}
              className="rounded-xl border border-[color:rgb(0_0_0_/_0.15)] bg-white p-5 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-[var(--brand)]">
                <img src={icon} alt={`${t} icon`} className="w-5 h-5" />
                {t}
              </div>

              <div className="text-[var(--muted)]">
                {isEmail ? (
                  <a href={`mailto:${d}`} className="hover:underline">
                    {d}
                  </a>
                ) : (
                  <>
                    <a href="tel:6475816081" className="hover:underline">
                      647-581-6081
                    </a>
                    {" or "}
                    <a href="tel:6474107176" className="hover:underline">
                      647-410-7176
                    </a>
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
