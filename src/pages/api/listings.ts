import type { NextApiRequest, NextApiResponse } from "next";
import type { Listing } from "@/lib/types";

let cache: Listing[] | null = null;
let cachedAt = 0;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const now = Date.now();
  if (cache && now - cachedAt < 5 * 60_000) return res.status(200).json(cache);

  const data: Listing[] = [
    {
      title: "", //required
      description: "", //required
      address: "", //required
      category: "", // Taraweeh, Jummah, Teaching
      city: "", //required
      notes: "",
      attendance: "",
      accommodations: "", //Lodging, Meals, Travel
      startDate: "",
      endDate:"",
      contactNumber: "",
      contactEmail: "", 
      available: "Filled", // required by admin
      approved: false // required by admin, if false, it will hide it on website
    },
    {
      title: "Hafiz Needed",
      description: "Looking for a reliable ḥāfiẓ to lead Tarāwīḥ for Ramadan. Accommodation and meals provided.",
      address: "Masjid",
      category: "Taraweeh",
      city: "Toronto",
      notes: "",
      accommodations: "Housing, Meals,",
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
