import projects from "@/data/projects";
import { site } from "@/lib/site";

export default function sitemap() {
  const pages = ["", "/projects", "/about", "/contact", ...projects.map((p) => `/projects/${p.slug}`)];
  return pages.map((path) => ({ url: `${site.url}${path}`, lastModified: new Date() }));
}
