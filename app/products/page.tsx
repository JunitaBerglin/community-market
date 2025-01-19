import { ProductCard } from "@/components/ui/product-card";
import { getAllProducts } from "@/repository";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          description={product.description}
          price={product.price}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
}
