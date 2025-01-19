import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";
import { eq } from "drizzle-orm";
import { usersTable } from "./db/schema";

export const db = drizzle(process.env.DATABASE_URL!);

// async function main() {
//   const user: typeof usersTable.$inferInsert = {
//     name: "John",
//     email: "john@example.com",
//   };

//   await db.insert(usersTable).values(user);
//   console.log("New user created!");

//   const users = await db.select().from(usersTable);
//   console.log("Getting all users from the database: ", users);

//   await db.delete(usersTable).where(eq(usersTable.email, user.email));
//   console.log("User deleted!");
// }

// main();