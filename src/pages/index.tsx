import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-2 pb-12">
      <div className="flex justify-center my-8">
     <Image
          src="/Bismillah.png"
          alt="Bismillah calligraphy"
          className="w-60 sm:w40 md:w-[20rem] lg:w-[20rem] xl:w-[20rem] h-auto drop-shadow-md"
        />
      </div>

      <h1 className="text-3xl font-bold text-[var(--brand)] py-4">
        Our Mission
      </h1>

      <div className="rounded-2xl border border-[color:rgb(0_0_0_/_0.15)] bg-white p-5 mb-6">
        <p className="text-[var(--brand)]/90">
          Welcome to Ontario Taraweeh Outreach, a dedicated platform designed to connect Huffaz and Ulamaa with Masajid, Musallahs, and Madaris across Ontario and North America.<br /><br />
          Every year, as Ramadan approaches, hundreds of Huffaz look for opportunities to lead Salatut Taraweeh, while many Masajid and Islamic centers scramble to find reliable, qualified individuals to fill this vital role.<br /><br />
          
          But the need does not stop at Ramadan.<br/><br/>

          Across the region, there is a constant demand for Ulamaa, Imams, and Quraan teachers to serve our communities year-round, whether it be teaching in Madaris, delivering khutbahs, or offering spiritual guidance.
          Ontario Taraweeh Outreach was created to bridge this gap to make it easier, faster, and more transparent for qualified individuals and institutions to find each other.
        </p>


        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/apply"
             className="inline-flex items-center rounded-xl border border-[color:rgb(0_0_0_/_0.10)] bg-[var(--brand)] px-4 py-2 text-white hover:bg-[var(--brand-700)] font-semibold">
            Submit a listing
          </Link>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ["Taraweeh Listings", "Learn More", "/listings/taraweeh"],
          ["Imam Positions", "Part-time & Full-time", "/listings/jummah"],
          ["Teaching Listings", "Learn More", "/listings/teaching"],
        ].map(([title, desc, link]) => (
          <a
            key={title}
            href={link}
            className="inline-flex flex-col justify-between rounded-xl border border-[color:rgb(0_0_0_/_0.15)] bg-white px-4 py-3 text-[var(--ink)] hover:bg-[var(--brand-50)] font-semibold text-center transition"
          >
            <span className="text-[var(--brand)] text-lg">{title}</span>
            <span className="text-sm text-[var(--muted)] font-normal">
              {desc}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

