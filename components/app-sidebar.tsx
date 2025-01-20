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
          <SidebarHeader className="text-3xl pt-8">
            <Link href="/">Community</Link>
          </SidebarHeader>
          <SidebarMenu className="gap-4">
            <SidebarMenuItem>
              <Link href="/users">Users</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/login">Login</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/signup">Sign up</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/addproduct">Add product</Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link href="/explore" className="text-lg">
                Explore
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </>
  );
};
