import type { Metadata } from "next";
import NotFoundPage from "@/components/mountainhelicopter/not-found/NotFoundPage";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function NotFoundRoutePage() {
  return <NotFoundPage />;
}
