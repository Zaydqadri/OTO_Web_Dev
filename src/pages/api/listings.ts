import type { NextApiRequest, NextApiResponse } from "next";
import type { Listing } from "@/lib/types";

let cache: Listing[] | null = null;
let cachedAt = 0;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = Date.now();
  if (cache && now - cachedAt < 5 * 60_000) return res.status(200).json(cache);

  // TODO: replace with Google Sheet/Airtable/Supabase
  const data: Listing[] = [
    { type: "Masjid", category: "Taraweeh", city: "Toronto", area: "Scarborough",
      accommodations: "Housing, Meals", startDate: "2025-03-01",
      contactName: "Admin", contactEmail: "admin@example.com", approved: true },
    { type: "Hafiz", category: "Taraweeh", city: "Mississauga", area: "Erin Mills",
      accommodations: "Stipend", startDate: "2025-03-10",
      contactName: "Coordinator", contactEmail: "c@example.com", approved: true },
  ];

  cache = data.filter(r => r.approved ?? true);
  cachedAt = now;
  res.status(200).json(cache);
}
