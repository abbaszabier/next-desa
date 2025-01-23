import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Desa",
  description: "Desa lorem ipsum",
  manifest: "/manifest.json",
  applicationName: "Desa App",
  appleWebApp: {
    statusBarStyle: "default",
    capable: true,
    title: "Desa App",
  },
  formatDetection: {
    telephone: false,
  },
  icons: "/images/icons/icon-192x192.png",
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
