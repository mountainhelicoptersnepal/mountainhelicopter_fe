import { notFound } from "next/navigation";

import ExperiencesPage from "@/components/mountainhelicopter/experiences/page";

type SlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const pages = {
  experiences: ExperiencesPage,
} as const;

export default async function SlugPage({ params }: SlugPageProps) {
  const { slug } = await params;

  if (!(slug in pages)) {
    notFound();
  }

  const Page = pages[slug as keyof typeof pages];

  return <Page />;
}
