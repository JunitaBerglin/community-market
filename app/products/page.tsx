import { ProductCard } from "@/components/ui/product-card";
import { getAllProducts } from "@/repository";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="container ml-5 px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20">
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
    </div>
  );
}
