import { mockUsers } from "@/components/app-sidebar";

const fetchConnectedUsers = () => {
  return mockUsers;
};

export default async function UsersPage() {
  const connectedUsers = await fetchConnectedUsers();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Connected Users</h1>
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
