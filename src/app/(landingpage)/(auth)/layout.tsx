import "../../globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section id="Signup" className="min-h-screen">
      <div className="flex flex-col justify-between min-h-[calc(100vh-78px)]">
        {children}
      </div>
    </section>
  );
}
