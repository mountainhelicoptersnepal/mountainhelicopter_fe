import { notFound } from "next/navigation";

import EverestBaseCampPage from "@/components/mountainhelicopter/tours/everest-base-camp/page";

type DetailPageProps = {
  params: Promise<{
    slug: string;
    detailSlug: string;
  }>;
};

const tourPages = {
  "everest-base-camp": EverestBaseCampPage,
} as const;

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug, detailSlug } = await params;

  if (slug !== "tours" || !(detailSlug in tourPages)) {
    notFound();
  }

  const TourPage = tourPages[detailSlug as keyof typeof tourPages];

  return <TourPage />;
}
