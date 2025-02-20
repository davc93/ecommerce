"use client";
import React, { useEffect } from "react";
import { ProductCard } from "./components";
import { useGetProducts } from "./hooks";

const lorem =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab dolore ipsam modi sed optio laboriosam cum a soluta cumque similique amet accusantium.";
export default function Page() {
  const { products } = useGetProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <ProductCard
          image={product.attributes.image.data.attributes.url}
          name={product.attributes.name}
          slug={product.attributes.slug}
          description={lorem}
          key={index}
          price={product.attributes.price}
        />
      ))}
    </div>
  );
}
