import ListingsTable from "@/components/ListingsTable";

export default function TeachingListingsPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-3">Taraweeh Listings</h1>
      <ListingsTable category="Taraweeh" />
    </section>
  );
}
