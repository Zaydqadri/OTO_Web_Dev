import type { NextApiRequest, NextApiResponse } from "next";
import type { Listing } from "@/lib/types";

let cache: Listing[] | null = null;
let cachedAt = 0;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = Date.now();
  if (cache && now - cachedAt < 5 * 60_000) return res.status(200).json(cache);

  const data: Listing[] = [
    {
      title: "Hafiz Needed",
      description: "Looking for a reliable ḥāfiẓ to lead Tarāwīḥ for Ramadan. Accommodation and meals provided.",
      address: "Masjid",
      category: "Taraweeh",
      city: "Toronto",
      notes: "",
      accommodations: "Housing, Meals",
      startDate: "2025-03-01",
      contactName: "Admin",
      contactEmail: "admin@example.com",
      approved: true
    },
    {
      title: "Teaching in Mississauga",
      description: "Part-time Qur’an teaching position for youth. Stipend available.",
      address: "Hafiz",
      category: "Teaching",
      city: "Mississauga",
      notes: "Erin Mills",
      accommodations: "Stipend",
      startDate: "2025-03-10",
      contactName: "Coordinator",
      contactEmail: "c@example.com",
      approved: true
    },
      {
      title: "Islamic Centre of Cambridge",
      description: "Huffaz needed for General Taraweeh",
      address: "1550 Dunbar Rd, Cambridge, ON N1R 8J5",
      category: "Taraweeh",
      city: "Cambridge",
      notes: "Looking for a Hafiz to lead 4-8 rakaat with strong memorization and tajweed.",
      attendance: "500",
      accommodations: "N/A",
      startDate: "",
      contactName: "",
      contactEmail: "",
      approved: true
    },
  ];

  cache = data.filter(r => r.approved ?? true);
  cachedAt = now;
  res.status(200).json(cache);
}
