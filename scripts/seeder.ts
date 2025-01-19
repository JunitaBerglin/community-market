import { db } from "@/src";
import { usersTable, productsTable } from "@/src/db/schema";
import { Product, User } from "@/types/types";

const mockUsers = [
  {
    userId: 1,
    userName: "Junita",
    email: "junita@example.com",
    password: "password123",
  },
  {
    userId: 2,
    userName: "Alex",
    email: "alex@example.com",
    password: "password123",
  },
  {
    userId: 3,
    userName: "Konrad",
    email: "konrad@example.com",
    password: "password123",
  },
  {
    userId: 4,
    userName: "Julia",
    email: "julia@example.com",
    password: "password123",
  },
];

const mockItems: Product[] = [
  {
    id: 1,
    productname: "New York Streak",
    description: "Beige brown, 42 size",
    price: "1000",
    imageUrl: "https://i.ibb.co/SsmkhPq/Rectangle-23.png",
    userId: 1,
  },
  {
    id: 2,
    productname: "Luxe 3 series",
    description: "Modern watch with sleek design",
    price: "500",
    imageUrl: "https://i.ibb.co/WVySXBL/Rectangle-24.png",
    userId: 2,
  },
  {
    id: 3,
    productname: "EZ sneakers",
    description: "Comfortable sneakers, 42 size",
    price: "150",
    imageUrl: "https://i.ibb.co/JqD4MwR/Rectangle-5.png",
    userId: 3,
  },
];

export async function seedDatabase() {
  try {
    for (const user of mockUsers) {
      await db.insert(usersTable).values(user);
    }
    console.log("Users seeded!");

    for (const product of mockItems) {
      await db.insert(productsTable).values(product);
    }
    console.log("Products seeded!");
  } catch (error) {
    console.error("Error seeding the database:", error);
  }
}

seedDatabase();
