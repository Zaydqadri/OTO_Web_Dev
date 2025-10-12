import type { NextApiRequest, NextApiResponse } from "next";
import type { Listing } from "@/lib/types";

let cache: Listing[] | null = null;
let cachedAt = 0;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = Date.now();
  if (cache && now - cachedAt < 5 * 60_000) return res.status(200).json(cache);

  const data: Listing[] = [
    {
      title: "Test", //required
      description: "Test", //required
      address: "Test", //required
      category: "Test", // Taraweeh, Jummah, Teaching
      city: "Test", //required
      notes: "Test",
      attendance: "Test",
      accommodations: "Test", //Lodging, Meals, Travel
      startDate: "Test",
      endDate:"Test",
      contactNumber: "Test",
      contactEmail: "Test", 
      available: "Filled", // Open, Filled required by admin
      approved: false // required by admin, if false, it will hide it on website
    },
    {
      title: "Hafidh Needed",
      description: "Looking for a reliable ḥāfiẓ to lead Tarāwīḥ for Ramadan. Accommodation and meals provided.",
      address: "Masjid",
      category: "Taraweeh",
      city: "Toronto",
      notes: "",
      accommodations: "Housing, Meals",
      startDate: "2025-03-01",
      contactNumber: "Admin",
      contactEmail: "admin@example.com",
      available: "Filled",
      approved: true
    },
  ];

  cache = data.filter(r => r.approved ?? true);
  cachedAt = now;
  res.status(200).json(cache);
}
