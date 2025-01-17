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

export type User = {
  id: number;
  name: string;
};

export const mockUsers: User[] = [
  { id: 1, name: "Junita" },
  { id: 2, name: "Alex" },
  { id: 3, name: "Konrad" },
  { id: 4, name: "Julia" },
];

export const AppSidebar = ({ mockUsers }: { mockUsers: User[] }) => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader>Community</SidebarHeader>
        <SidebarMenu>
          {mockUsers.map((user) => (
            <SidebarMenuItem key={user.id}>
              <Link href={`/users/${user.id}`} className="text-sm">
                {user.name}
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};
