import type { Metadata } from "next";
import AdsAdminBookings from "@/components/mountainhelicopter/ads/admin/AdsAdminBookings";

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

export default function AdsAdminPage() {
  return <AdsAdminBookings />;
}
