"use server";

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

export async function signUpAction(
  error: string,
  previousState: SignUpFormValues,
  formData: SignUpFormValues
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("User signed up ==>>>", formData);
  console.log("Error ===>>>", error);
  console.log("Previous state ===>>>", previousState);
  try {
    console.log("inside my try, inside my signUpAction!! ==>>>", formData);
    // const content = formData.get("content") as string;
    // await prisma.task.create({ data: { content } });
  } catch (e) {
    console.error("Sign-up failed:", e);
    return "An error occurred while signing up.";
  }
  revalidatePath("/");
}

export async function signInAction(
  error: string,
  previousState: SignInFormValues,
  formData: SignInFormValues
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  console.log("User signed in ==>>>", formData);
  console.log("Error ===>>>", error);

  console.log("Previous state ===>>>", previousState);
  try {
    console.log("inside my try, inside my signInAction!! ==>>>", formData);
    // const content = formData.get("content") as string;
    // await prisma.task.create({ data: { content } });
  } catch (e) {
    console.error("Sign-in failed:", e);
    return "An error occurred while signing in.";
  }
  revalidatePath("/");
}
