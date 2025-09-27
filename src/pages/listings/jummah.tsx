import ListingsTable from "@/components/ListingsTable";

export default function TeachingListingsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">Jummah Listings</h1>
      <ListingsTable category="Jummah" />
    </section>
  );
}
