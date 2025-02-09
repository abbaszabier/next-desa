import "../../globals.css";
import Navbar from "@/components/elements/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
    </div>
  );
}
