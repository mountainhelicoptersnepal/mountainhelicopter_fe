import Footer from "./Footer";
import Navbar from "./Navbar";
import OpeningSplash from "@/components/mountainhelicopter/home/OpeningSplash";

export default function PublicShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-clip bg-white">
      <OpeningSplash />
      <Navbar />
      <main className="w-full max-w-full flex-1 overflow-x-clip">
        {children}
      </main>
      <Footer />
    </div>
  );
}
