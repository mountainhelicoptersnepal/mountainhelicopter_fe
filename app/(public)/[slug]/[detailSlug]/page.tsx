import { notFound } from "next/navigation";

import CelebrationsPage from "@/components/mountainhelicopter/experiences/celebrations/page";
import EverestBreakfastExperiencePage from "@/components/mountainhelicopter/experiences/everest-breakfast/page";
import HeliPicnicPage from "@/components/mountainhelicopter/experiences/heli-picnic/page";
import KalaPattharPage from "@/components/mountainhelicopter/experiences/kala-patthar/page";
import PhotoFlightPage from "@/components/mountainhelicopter/experiences/photo-flight/page";
import PilgrimagePage from "@/components/mountainhelicopter/experiences/pilgrimage/page";
import PrivateCharterPage from "@/components/mountainhelicopter/experiences/private-charter/page";
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

const experiencePages = {
  celebrations: CelebrationsPage,
  "everest-breakfast": EverestBreakfastExperiencePage,
  "heli-picnic": HeliPicnicPage,
  "kala-patthar": KalaPattharPage,
  "photo-flight": PhotoFlightPage,
  pilgrimage: PilgrimagePage,
  "private-charter": PrivateCharterPage,
} as const;

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug, detailSlug } = await params;

  if (slug === "tours" && detailSlug in tourPages) {
    const TourPage = tourPages[detailSlug as keyof typeof tourPages];

    return <TourPage />;
  }

  if (slug === "experiences" && detailSlug in experiencePages) {
    const ExperiencePage =
      experiencePages[detailSlug as keyof typeof experiencePages];

    return <ExperiencePage />;
  }

  notFound();
}
