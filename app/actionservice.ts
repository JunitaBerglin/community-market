"use server";
import { cookies } from "next/headers";
import { db } from "@/src";
import { productsTable, usersTable } from "@/src/db/schema";
import { revalidatePath } from "next/cache";
import { Product, User } from "@/types/types";

export type SignUpFormValues = {
  userName: string;
  email: string;
  password: string;
};

export type SignInFormValues = {
  userName: string;
  password: string;
};

export async function getAllProductsAction(): Promise<Product[]> {
  return await db.select().from(productsTable);
}

export async function getAllUsersAction(): Promise<User[]> {
  return await db.select().from(usersTable);
}

export async function getUserByIdAction(userId: number): Promise<User | null> {
  const user = await db
    .select()
    .from(usersTable)
    .where(usersTable.userId.eq(userId))
    .first();
  return user || null;
}

export async function signUpAction(previousState: unknown, formData: FormData) {
  const userName = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const result = await db
      .insert(usersTable)
      .values({ userName, email, password })
      .returning({ id: usersTable.userId });

    const userId = result[0]?.id;
    if (!userId) throw new Error("Failed to retrieve user ID.");

    cookies().set("userId", String(userId));
    console.log("User signed up successfully!");
  } catch (error) {
    console.error("Sign up failed:", error);
    return "An error occurred while signing up.";
  }

  revalidatePath("/");
}

export async function signInAction(previousState: unknown, formData: FormData) {
  console.log("User signed in ==>>>", formData);

  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const result = await db
      .insert(usersTable)
      .values({ username, email, password })
      .returning({ userId: usersTable.userId });

    const userId = result[0]?.userId;

    if (!userId) {
      throw new Error("Failed to retrieve user ID.");
    }

    (await cookies()).set("userId", String(userId));

    console.log("User logged in, userId set in cookies.");
  } catch (e) {
    console.error("Sign in failed:", e);
    return "An error occurred while signing in.";
  }

  revalidatePath("/");
}

export async function addProductAction(
  previousState: unknown,
  formData: FormData
) {
  console.log("Product added ==>>>", formData);

  const productname = formData.get("productname") as string;
  const description = formData.get("description") as string;
  const price = formData.get("price") as string;
  const imageUrl = formData.get("imageUrl") as string;
  const userId = 1;

  try {
    const result = await db
      .insert(usersTable)
      .values({ productname, description, price, imageUrl, userId });

    console.log("Product added successfully!");
  } catch (e) {
    console.error("Product add failed:", e);
    return "An error occurred while adding product.";
  }

  revalidatePath("/");
}
