"use client";
import { useEffect, useMemo, useState } from "react";
import type { Listing } from "@/lib/types";

type Sort = { key: keyof Listing; dir: "asc" | "desc" };

const chip = "inline-flex items-center rounded-full border px-2 py-0.5 text-xs";

export default function ListingsTable() {
  const [rows, setRows] = useState<Listing[]>([]);
  const [q, setQ] = useState("");
  const [area, setArea] = useState("All");
  const [acc, setAcc] = useState("All");
  const [sort, setSort] = useState<Sort>({ key: "city", dir: "asc" });

  useEffect(() => { fetch("/api/listings").then(r => r.json()).then(setRows); }, []);

  const areas = useMemo(
    () => ["All", ...new Set(rows.map(r => r.area).filter(Boolean) as string[])],
    [rows]
  );
  const accs = useMemo(
    () => ["All", ...new Set(rows.flatMap(r => (r.accommodations ?? "")
      .split(",").map(s => s.trim()).filter(Boolean)))],
    [rows]
  );

  const filtered = useMemo(() => {
    const t = q.toLowerCase();
    return rows
      .filter(r => {
        const matchesText = !t || Object.values(r).join(" ").toLowerCase().includes(t);
        const matchesArea = area === "All" || r.area === area;
        const matchesAcc  = acc === "All" || (r.accommodations ?? "").toLowerCase().includes(acc.toLowerCase());
        return matchesText && matchesArea && matchesAcc;
      })
      .sort((a, b) => {
        const A = (a[sort.key] ?? "").toString().toLowerCase();
        const B = (b[sort.key] ?? "").toString().toLowerCase();
        return sort.dir === "asc" ? A.localeCompare(B) : B.localeCompare(A);
      });
  }, [rows, q, area, acc, sort]);

  const toggleSort = (key: keyof Listing) =>
    setSort(s => (s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" }));

  return (
    <section className="mx-auto max-w-6xl">
      {/* Controls */}
      <div className="mb-4 flex flex-wrap gap-3">
        <input
          className="border border-[color:rgb(0_0_0_/_0.12)] rounded-xl px-3 py-2 min-w-56 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          placeholder="Search…"
          value={q}
          onChange={(e)=>setQ(e.target.value)}
        />
        <select
          className="border border-[color:rgb(0_0_0_/_0.12)] rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          value={area} onChange={(e)=>setArea(e.target.value)}>
          {areas.map(a => <option key={a}>{a}</option>)}
        </select>
        <select
          className="border border-[color:rgb(0_0_0_/_0.12)] rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--ring)]"
          value={acc} onChange={(e)=>setAcc(e.target.value)}>
          {accs.map(a => <option key={a}>{a}</option>)}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-[color:rgb(0_0_0_/_0.06)] bg-white">
        <table className="w-full text-left">
          <thead className="border-b bg-[var(--brand-50)]/60 text-[var(--brand)]">
            {(["type","category","city","area","accommodations","startDate"] as (keyof Listing)[])
              .map(col => (
              <th
                key={col as string}
                className="px-3 py-3 cursor-pointer select-none text-sm font-semibold"
                onClick={()=>toggleSort(col)}
                title="Click to sort"
              >
                {col} {sort.key===col ? (sort.dir==="asc"?"▲":"▼") : ""}
              </th>
            ))}
            <th className="px-3 py-3 text-sm font-semibold">Contact</th>
          </thead>
          <tbody>
            {filtered.map((r, i) => (
              <tr key={i} className="border-b">
                <td className="px-3 py-3">{r.type}</td>
                <td className="px-3 py-3">
                  {r.category ? (
                    <span className={`${chip} border-[var(--brand)]/30 text-[var(--brand)] bg-[var(--brand-50)]/60`}>
                      {r.category}
                    </span>
                  ) : "-"}
                </td>
                <td className="px-3 py-3">{r.city ?? "-"}</td>
                <td className="px-3 py-3">{r.area ?? "-"}</td>
                <td className="px-3 py-3">
                  {r.accommodations
                    ? r.accommodations.split(",").map(s => s.trim()).filter(Boolean).map((s, j) => (
                        <span key={j} className={`${chip} mr-1 mb-1 border-[color:rgb(0_0_0_/_0.10)] text-[var(--ink)]/80`}>
                          {s}
                        </span>
                      ))
                    : "-"}
                </td>
                <td className="px-3 py-3">{r.startDate ?? "-"}</td>
                <td className="px-3 py-3">
                  <div className="font-medium">{r.contactName ?? "-"}</div>
                  {r.contactEmail && (
                    <a className="text-[var(--brand)] underline" href={`mailto:${r.contactEmail}`}>
                      {r.contactEmail}
                    </a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="p-6 text-[var(--muted)]">No listings found.</div>
        )}
      </div>
    </section>
  );
}
