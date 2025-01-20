import { Button } from "@/components/ui/button";
import { SidebarHeader } from "@/components/ui/sidebar";
import Link from "next/link";
import { getAllUsersAction } from "../actions";

export default async function UsersPage() {
  const connectedUsers = await getAllUsersAction();

  return (
    <div className="pt-40 pl-10">
      <SidebarHeader className="text-3xl">
        Users you have connected with
      </SidebarHeader>

      <ul className="mt-4">
        {connectedUsers.map((user) => (
          <li
            key={user.userId}
            className="group flex flex-row justify-between pt-10 pb-16 w-11/12 border-b h-16 text-l"
          >
            {user.userName}
            <Button
              variant={"ghost"}
              size={"sm"}
              className="hidden group-hover:flex"
            >
              <Link href="/products" className="text-lg">
                →
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
