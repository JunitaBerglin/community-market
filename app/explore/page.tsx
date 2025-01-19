import { SidebarHeader } from "@/components/ui/sidebar";
import { mockUsers } from "../layout";

const fetchConnectedUsers = () => {
  return mockUsers;
};

export default async function ExplorePage() {
  const connectedUsers = await fetchConnectedUsers();

  return (
    <div className="pt-40">
      <SidebarHeader className="text-3xl">
        Products awailable in your community
      </SidebarHeader>
      <ul className="mt-4">
        {connectedUsers.map((user) => (
          <li key={user.id} className="py-2 border-b">
            {user.products.map((product) => product.title).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
