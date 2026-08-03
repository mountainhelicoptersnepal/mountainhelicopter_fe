import Footer from "./Footer";
import Navbar from "./Navbar";

export default function PublicShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full max-w-full flex-col overflow-x-clip bg-white">
      <Navbar />
      <main className="w-full max-w-full flex-1 overflow-x-clip">
        {children}
      </main>
      <Footer />
    </div>
  );
}
