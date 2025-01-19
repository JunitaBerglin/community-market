"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { addProductAction } from "@/app/actions";

const formSchema = z.object({
  productname: z.string().min(2, {
    message: "productname must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  price: z.string().min(2, {
    message: "Price must be at least 1 character.",
  }),
  imageUrl: z.string().url({
    message: "Please enter a valid image URL.",
  }),
});

export function AddProductForm() {
  const [error, action, isPending] = useActionState(addProductAction, null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productname: "",
      description: "",
      price: "",
      imageUrl: "",
    },
  });

  return (
    <Form {...form}>
      <form action={action} className="space-y-8">
        <FormField
          control={form.control}
          name="productname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>productname</FormLabel>
              <FormControl>
                <Input placeholder="Product productname" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Product description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Product price" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="imageUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Product image URL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button disabled={isPending}>Add Product</Button>
        {isPending && <FormMessage typeof="info">Loading...</FormMessage>}
      </form>
    </Form>
  );
}
