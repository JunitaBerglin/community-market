export type User = {
  id: number;
  name: string;
  products: Product[];
};

export type Product = {
  id: number;
  title: string;
  content: string;
};

export const mockUsers: User[] = [
  { id: 1, name: "Junita", products: [] },
  { id: 2, name: "Alex", products: [] },
  { id: 3, name: "Konrad", products: [] },
  { id: 4, name: "Julia", products: [] },
];

export async function getAllUsers() {
  return mockUsers;
}
