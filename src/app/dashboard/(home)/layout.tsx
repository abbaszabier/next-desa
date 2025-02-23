import "../../globals.css";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/elements/app-sidebar";
import HeaderDashboard from "@/components/elements/header-dashboard";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <HeaderDashboard />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </section>
  );
}
