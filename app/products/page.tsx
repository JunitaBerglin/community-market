import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import Link from "next/link";
import { User } from "@/types/types";
import { getAllProductsAction, getUserByIdAction } from "../actions";

export default async function ProductsPage() {
  // export default async function ProductsPage({
  //   searchParams,
  // }: {
  //   searchParams: { userId?: string };
  // }) {
  // const userId = searchParams?.userId || "1";
  const products = await getAllProductsAction();
  // const user: User | null = await getUserByIdAction(parseInt(userId));

  // const userProducts = products.filter(
  //   (product) => product.userId === parseInt(userId)
  // );

  return (
    <div className="container ml-5 px-4 py-8">
      <div className="flex justify-end items-center">
        {/* <Button>
          <Link href={`/products?userId=${userId}`}>My Products</Link>
        </Button> */}
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
        {/* {user?.userName || "User"}'s products */}Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            productname={product.productname}
            description={product.description}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
