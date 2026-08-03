import { notFound } from "next/navigation";

import AnnapurnaBaseCampPage from "@/components/mountainhelicopter/tours/annapurna-base-camp/page";
import EverestBaseCampPage from "@/components/mountainhelicopter/tours/everest-base-camp/page";
import GosaikundaLakePage from "@/components/mountainhelicopter/tours/gosaikunda-lake/page";
import LangtangValleyPage from "@/components/mountainhelicopter/tours/langtang-valley/page";
import MuktinathPilgrimagePage from "@/components/mountainhelicopter/tours/muktinath-pilgrimage/page";

type DetailPageProps = {
  params: Promise<{
    slug: string;
    detailSlug: string;
  }>;
};

const tourPages = {
  "annapurna-base-camp": AnnapurnaBaseCampPage,
  "everest-base-camp": EverestBaseCampPage,
  "gosaikunda-lake": GosaikundaLakePage,
  "langtang-valley": LangtangValleyPage,
  "muktinath-pilgrimage": MuktinathPilgrimagePage,
} as const;

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug, detailSlug } = await params;

  if (slug !== "tours" || !(detailSlug in tourPages)) {
    notFound();
  }

  const TourPage = tourPages[detailSlug as keyof typeof tourPages];

  return <TourPage />;
}
