export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  artist: string;
  description: string;
  genre: string;
  year: number;
  services: string[];
  imageUrl: string;
  audioUrl: string;
  duration?: string;
  spotifyUrl?: string;
}

export type ContactFormData = {
  name?: string;
  email: string;
  project_type?: "mixing" | "mastering" | "both" | "consultation";
  subject?: string;
  message?: string;
}; 