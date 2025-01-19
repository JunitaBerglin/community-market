import { Button } from "@/components/ui/button";
import { SidebarHeader } from "@/components/ui/sidebar";
import { getAllUsers } from "@/repository";
import Link from "next/link";

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
            <Button>
              <Link href="/products"> See users marketplace</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
