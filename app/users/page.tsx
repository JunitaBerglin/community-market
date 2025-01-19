import { SidebarHeader } from "@/components/ui/sidebar";
import { getAllUsers } from "@/repository";

export default async function UsersPage() {
  const connectedUsers = await getAllUsers();

  return (
    <div className="pt-40">
      <SidebarHeader className="text-3xl">
        Users you have connected with
      </SidebarHeader>
      <ul className="mt-4">
        {connectedUsers.map((user) => (
          <li key={user.id} className="py-2 border-b">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
