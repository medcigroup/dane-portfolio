import type { Metadata } from "next";
import { ProjectPage, findProject } from "@/components/pages/ProjectPage";
import { alternatesFor, getProjects } from "@/i18n";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getProjects("en").map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject("en", slug);
  if (!project) return {};
  return { title: project.title, description: project.summary, alternates: alternatesFor("en", `/projects/${slug}/`, `/en/projects/${slug}/`), openGraph: { images: [project.image] } };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return <ProjectPage locale="en" slug={slug} />;
}
