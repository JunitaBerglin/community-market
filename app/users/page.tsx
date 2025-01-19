import { Button } from "@/components/ui/button";
import { SidebarHeader } from "@/components/ui/sidebar";
import Link from "next/link";
import { getAllUsersAction } from "../actionservice";

export default async function UsersPage() {
  const connectedUsers = await getAllUsersAction();

  return (
    <div className="pt-40">
      <SidebarHeader className="text-3xl">
        Users you have connected with
      </SidebarHeader>
      <ul className="mt-4">
        {connectedUsers.map((user) => (
          <li key={user.userId} className="py-2 border-b">
            {user.userName}
            <Button>
              <Link href="/products"> See users marketplace</Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
