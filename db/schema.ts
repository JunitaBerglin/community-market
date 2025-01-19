import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  userId: int().primaryKey({ autoIncrement: true }),
  userName: text().notNull(),
  email: text().notNull().unique(),
  password: text().notNull().unique(),
});

export const productsTable = sqliteTable("products_table", {
  id: int().primaryKey({ autoIncrement: true }),
  productname: text().notNull(),
  description: text().notNull(),
  price: text().notNull(),
  imageUrl: text(),
  userId: text(),
});
