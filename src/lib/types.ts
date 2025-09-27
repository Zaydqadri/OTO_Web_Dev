export type Listing = {
  title: string;
  description?: string;            
  address: string;
  category?: "Taraweeh" | "Jummah" | "Teaching" | string;
  city?: string;
  notes?: string;
  attendance?: string;
  accommodations?: string; // "housing, meals"
  startDate?: string;
  endDate?: string;
  contactName?: string;
  contactEmail?: string;
  approved?: boolean;
};
