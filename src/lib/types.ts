export type Listing = {
  title: string;
  type: "Masjid" | "Hafiz" | string;
  category?: "Taraweeh" | "Jummah" | "Teaching" | string;
  city?: string;
  area?: string;
  accommodations?: string; // "housing, meals, stipend"
  startDate?: string;
  endDate?: string;
  contactName?: string;
  contactEmail?: string;
  approved?: boolean;
  lat?: number;
  lng?: number;
};
