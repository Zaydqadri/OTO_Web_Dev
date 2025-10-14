import dynamic from "next/dynamic";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function MapPage() {
    return (
        <section className="mx-auto max-w-6xl px-4 py-8 text-center md:text-left">
            <h1 className="text-3xl font-bold text-[var(--brand)] mb-3">
                Masjid & Musallah Map
            </h1>
            <p className="text-[var(--muted)] mb-6 max-w-2xl">
                Find nearby masājid, musallās, and madāris across Ontario. You can open
                directions in Google Maps to see those closest to you.
            </p>
            <MapView />
        </section>

    );
}
