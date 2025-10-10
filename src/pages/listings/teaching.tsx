import ListingsTable from "@/components/ListingsTable";

export default function TeachingListingsPage() {
  return (
    <section>
      <h1 className="text-2xl font-bold text-[var(--brand)] mb-4">Teaching Listings</h1>
      <ListingsTable category="Teaching" />
    </section>
  );
}
