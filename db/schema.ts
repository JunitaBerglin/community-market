import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  userId: text().primaryKey(),
  userName: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull(),
});

export const productsTable = sqliteTable("products_table", {
  id: text().primaryKey(),
  productname: text().notNull(),
  description: text().notNull(),
  price: text().notNull(),
  imageUrl: text(),
  userId: text(),
});
