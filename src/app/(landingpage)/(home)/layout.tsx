import "../../globals.css";
import Navbar from "@/components/elements/navbar";
import Footer from "../../../components/elements/footer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="min-h-[calc(100vh-4rem)] w-full dark:bg-black bg-white dark:bg-grid-white/[0.15] bg-grid-black/[0.08] relative flex items-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <BackgroundBeamsWithCollision className="relative flex flex-col z-20">
          {children}
        </BackgroundBeamsWithCollision>
      </div>
      <Footer />
    </div>
  );
}
