import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ContentSidebar } from "@/components/content-sidebar";

export default function Layout({
  children,
  //   params,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <ContentSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
