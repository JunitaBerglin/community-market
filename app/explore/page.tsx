import { SidebarHeader } from "@/components/ui/sidebar";
import { Product, User } from "@/types/types";
import { getAllProductsAction } from "../actions";
import { ProductCard } from "@/components/ui/product-card";

export default async function ExplorePage() {
  const products = await getAllProductsAction();

  return (
    <div className="pt-40">
      <SidebarHeader className="text-3xl">
        Products awailable in your community
      </SidebarHeader>
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
