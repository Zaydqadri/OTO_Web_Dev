﻿export type Listing = {
  title: string;
  description: string;            
  address: string;
  category: "Taraweeh" | "Jummah" | "Teaching" | string;
  city: string;
  notes?: string;
  attendance?: string;
  accommodations?: "Lodging" | "Meals" | "Travel" | string;
  startDate?: string;
  endDate?: string;
  contactNumber?: string;
  contactEmail?: string;
  available: "Open" | "Filled";
  approved?: boolean;
};
