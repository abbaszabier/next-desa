import "./globals.css";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { geistSans } from "@/app/styles/font";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Desa Tapos I",
  description: "Desa Tapos I, Kecamatan Tenjolaya",
  manifest: "/manifest.json",
  applicationName: "Tapos I",
  appleWebApp: {
    statusBarStyle: "default",
    capable: true,
    title: "Desa Tapos I",
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
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preload" href="/_next/static/css/globals.css" as="style" />
      </Head>
      <body className={`${geistSans.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
