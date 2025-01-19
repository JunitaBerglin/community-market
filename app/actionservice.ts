"use server";
import { db } from "@/src";
import { usersTable } from "@/src/db/schema";
import { revalidatePath } from "next/cache";

export type SignUpFormValues = {
  username: string;
  email: string;
  password: string;
};

export type SignInFormValues = {
  username: string;
  password: string;
};

export async function signUpAction(previousState: unknown, formData: FormData) {
  console.log("User signed up ==>>>", formData);
  const username = formData.get("username") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  try {
    await db.insert(usersTable).values({ username, email, password });
  } catch (e) {
    console.error("Sign up failed:", e);
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
    await db.insert(usersTable).values({ username, email, password });
  } catch (e) {
    console.error("Sign in failed:", e);
    return "An error occurred while signing in.";
  }
  revalidatePath("/");
}
