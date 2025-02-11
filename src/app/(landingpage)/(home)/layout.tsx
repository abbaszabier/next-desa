import "../../globals.css";
import Navbar from "@/components/elements/navbar";
import Footer from "../../../components/elements/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
