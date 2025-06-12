import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8ma6db8c",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});