import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usersTable } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import { db } from "@/src";

// async function main() {
//   const user: typeof usersTable.$inferInsert = {
//     name: "John",
//     email: "john@example.com",
//   };

//   await db.insert(usersTable).values(user);
//   console.log("New user created!");

//   const users = await db.select().from(usersTable);
//   console.log("Getting all users from the database: ", users);

//   await db
//     .update(usersTable)
//     .set({
//       name: "Mr. Meeseeks",
//       email: `meeseeks.${Math.random()}@example.com`,
//     })
//     .where(eq(usersTable.email, user.email));
//   console.log("User info updated!");
// }

// main();

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Community Market",
  description: "A marketplace for sustainable connections",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>
          <AppSidebar />
          <main className="ml-2">{children}</main>
        </SidebarProvider>
      </body>
    </html>
  );
}
