import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTrigger,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Link from "next/link";

export const AppSidebar = () => {
  return (
    <>
      <SidebarTrigger defaultChecked />
      <Sidebar>
        <SidebarTrigger className="p-7" />
        <SidebarContent>
          <SidebarHeader className="text-3xl">Community</SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link href="/users">Users</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/login">Login</Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
