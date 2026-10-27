import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { ProfessionalProjectDetail } from "@/components/ProfessionalProjectDetail";
import { SiteHeader } from "@/components/SiteHeader";
import { alternatesFor, getProfessionalProjects } from "@/i18n";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProfessionalProjects("en").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProfessionalProjects("en").find((item) => item.slug === slug);
  if (!project) return {};
  return { title: project.shortTitle, description: project.summary, alternates: alternatesFor("en", `/projets-professionnels/${slug}/`, `/en/professional-projects/${slug}/`), openGraph: { images: [{ url: project.image, alt: project.imageAlt }] } };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const project = getProfessionalProjects("en").find((item) => item.slug === slug);
  if (!project) notFound();
  return <><SiteHeader locale="en" /><ProfessionalProjectDetail project={project} locale="en" /><Footer locale="en" /></>;
}
