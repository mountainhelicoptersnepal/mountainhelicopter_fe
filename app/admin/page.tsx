import type { Metadata } from "next";
import AdminInquiries from "@/components/mountainhelicopter/admin/AdminInquiries";

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

export default function AdminPage() {
  return <AdminInquiries />;
}
