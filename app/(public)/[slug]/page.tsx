import { notFound } from "next/navigation";

import BlogPage from "@/components/mountainhelicopter/blogs/page";
import ExperiencesPage from "@/components/mountainhelicopter/experiences/page";
import RescuePage from "@/components/mountainhelicopter/rescue/page";

type SlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const pages = {
  blogs: BlogPage,
  experiences: ExperiencesPage,
  rescue: RescuePage,
} as const;

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;

  if (!(slug in pages)) {
    notFound();
  }

  const Page = pages[slug as keyof typeof pages];

  return <Page />;
}
