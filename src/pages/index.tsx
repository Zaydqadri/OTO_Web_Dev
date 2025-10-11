export default function Home() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold text-[var(--brand)] mb-4">
        Our Mission
      </h1>
      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.15)] bg-white p-5 mb-6">
        <p className="text-[var(--brand)]/90">
          Welcome to Ontario Taraweeh Outreach — a dedicated platform designed to connect Huffaz and Islamic scholars with Masajid, Musallahs, and Madaris across Ontario and North America.<br /><br />
          Every year, as Ramadan approaches, hundreds of Huffaz look for opportunities to lead Salatut Taraweeh — while many Masajid and Islamic centers scramble to find reliable, qualified individuals to fill this vital role.<br /><br />
          
          But the need doesn not stop at Ramadan.<br /><br />

          Across the region, there is a constant demand for knowledgeable Ulama, Imams, and Quraan teachers to serve our communities year-round — teaching in madaaris, delivering khutbahs, and offering spiritual guidance.
          Ontario Taraweeh Outreach was created to bridge this gap to make it easier, faster, and more transparent for qualified individuals and institutions to find each other.
        </p>


        <div className="mt-6 flex flex-wrap gap-3">
          <a href="/listings/all"
             className="inline-flex items-center rounded-xl border border-[var(--brand)] bg-[var(--brand)] hover:bg-[var(--brand-700)] px-4 py-2 text-white font-semibold">

            Browse listings
          </a>
          <a href="/apply"
             className="inline-flex items-center rounded-xl border border-[color:rgb(0_0_0_/_0.10)] bg-white px-4 py-2 text-[var(--ink)] hover:bg-[var(--brand-50)] font-semibold">
            Submit a listing
          </a>
        </div>
      </div>

      {/* <div className="mt-8 grid gap-4 md:grid-cols-3">
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
      </div> */}
    </section>
  );
}

