export default function Home() {
  return (
    <section className="mx-auto max-w-6xl py-16 px-4">
      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.06)] bg-white p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--brand)]">
          Our Mission
        </h1>
        <p className="mt-3 text-[var(--muted)] max-w-2xl">
          With the growing number of Huffaz in North America and beyond, many face challenges in finding a place to lead Salatut Taraweeh. 
          Similarly, many Masajid and Musallahs often struggle to find Huffaz, especially as Ramadan approaches.<br /><br />
          The goal of Ontario Taraweeh Outreach is to create a comprehensive database that connects Huffaz with Islamic organizations, facilitating these connections in a timely manner. 
          Our broader mission is not only to establish this resource, but to also foster a community where we can share knowledge, support one another, and strengthen our relationship with the Quraan.
        </p>


        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/listings"
             className="inline-flex items-center rounded-xl border border-[var(--brand)] bg-[var(--brand)] hover:bg-[var(--brand-700)] px-4 py-2 text-white font-semibold">

            Browse listings
          </a>
          <a href="/apply"
             className="inline-flex items-center rounded-xl border border-[color:rgb(0_0_0_/_0.10)] bg-white px-4 py-2 text-[var(--ink)] hover:bg-[var(--brand-50)] font-semibold">
            Submit a listing
          </a>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ["Taraweeh Listings", "Should we put these here?"],
          ["Jummah Listings", "Should we put these here?"],
          ["Teaching Listings", "Should we put these here?"],
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

