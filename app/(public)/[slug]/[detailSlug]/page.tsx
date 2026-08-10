import { notFound } from "next/navigation";

import BlogDetailPage from "@/components/mountainhelicopter/blogs/BlogDetailPage";
// import CelebrationsPage from "@/components/mountainhelicopter/experiences/celebrations/page";
// import EverestBreakfastExperiencePage from "@/components/mountainhelicopter/experiences/everest-breakfast/page";
// import HeliPicnicPage from "@/components/mountainhelicopter/experiences/heli-picnic/page";
// import KalaPattharPage from "@/components/mountainhelicopter/experiences/kala-patthar/page";
// import PhotoFlightPage from "@/components/mountainhelicopter/experiences/photo-flight/page";
// import PilgrimagePage from "@/components/mountainhelicopter/experiences/pilgrimage/page";
// import PrivateCharterPage from "@/components/mountainhelicopter/experiences/private-charter/page";
import EverestGokyoKathmanduPage from "@/components/mountainhelicopter/tours/everest-gokyo-kathmandu/page";
import EverestKalapattharKathmanduPage from "@/components/mountainhelicopter/tours/everest-kalapatthar-kathmandu/page";
import GorakshepKathmanduHelicopterPage from "@/components/mountainhelicopter/tours/gorakshep-kathmandu-helicopter/page";
import KathmanduLuklaHelicopterPage from "@/components/mountainhelicopter/tours/kathmandu-lukla-helicopter/page";
import RamechhapLuklaHelicopterPage from "@/components/mountainhelicopter/tours/ramechhap-lukla-helicopter/page";
import { blogPosts, getBlogPost } from "@/lib/blogs";

type DetailPageProps = {
  params: Promise<{
    slug: string;
    detailSlug: string;
  }>;
};

const tourPages = {
  "everest-kalapatthar-kathmandu": EverestKalapattharKathmanduPage,
  "everest-gokyo-kathmandu": EverestGokyoKathmanduPage,
  "gorakshep-kathmandu-helicopter": GorakshepKathmanduHelicopterPage,
  "kathmandu-lukla-helicopter": KathmanduLuklaHelicopterPage,
  "ramechhap-lukla-helicopter": RamechhapLuklaHelicopterPage,
} as const;

// const experiencePages = {
//   celebrations: CelebrationsPage,
//   "everest-breakfast": EverestBreakfastExperiencePage,
//   "heli-picnic": HeliPicnicPage,
//   "kala-patthar": KalaPattharPage,
//   "photo-flight": PhotoFlightPage,
//   pilgrimage: PilgrimagePage,
//   "private-charter": PrivateCharterPage,
// } as const;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: "blog",
    detailSlug: post.slug,
  }));
}

export async function generateMetadata({ params }: DetailPageProps) {
  const { slug, detailSlug } = await params;

  if (slug !== "blog") {
    return {};
  }

  const post = getBlogPost(detailSlug);

  if (!post) {
    return {};
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.image],
      type: "article",
    },
  };
}

export default async function DetailPage({ params }: DetailPageProps) {
  const { slug, detailSlug } = await params;

  if (slug === "blog") {
    const post = getBlogPost(detailSlug);

    if (!post) {
      notFound();
    }

    return <BlogDetailPage post={post} />;
  }

  if (slug === "tours" && detailSlug in tourPages) {
    const TourPage = tourPages[detailSlug as keyof typeof tourPages];

    return <TourPage />;
  }

  // if (slug === "experiences" && detailSlug in experiencePages) {
  //   const ExperiencePage =
  //     experiencePages[detailSlug as keyof typeof experiencePages];

  //   return <ExperiencePage />;
  // }

  notFound();
}
