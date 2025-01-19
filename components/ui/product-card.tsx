import React from "react";
import { Button } from "./button";

interface CardProps {
  productname: string;
  description: string;
  price: string;
  imageUrl: string;
}

const ProductCard: React.FC<CardProps> = ({
  productname,
  description,
  price,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col border rounded-lg shadow-md overflow-hidden">
      <div className="relative w-full h-48 sm:h-64 md:h-72 lg:h-80">
        <img
          className="object-cover w-full h-full"
          src={imageUrl}
          alt={productname}
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-white">
            {productname}
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>

        <div className="mt-4">
          <p className="text-lg font-bold text-gray-800 dark:text-white">
            ${price}
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <Button className="w-full sm:w-auto text-sm py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-800">
              Read More
            </Button>
            <Button className="w-full sm:w-auto text-sm py-2 px-4 bg-gray-800 hover:bg-black text-white">
              Purchase
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
