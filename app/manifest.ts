import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "KAMENAN Dane — Portfolio", short_name: "KAMENAN", description: "Portfolio scientifique et géospatial", start_url: "/", display: "standalone", background_color: "#fbfaf6", theme_color: "#0b2d5b", lang: "fr" };
}
