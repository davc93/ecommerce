"use client";
import { useEffect } from "react";
import { useGetProducts } from "../hooks";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProductDetail } from "./product-detail";
type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const { products, filterBySlug } = useGetProducts();
  useEffect(() => {
    filterBySlug(params.slug);
  }, [products]);
  const product = products[0];
  if (product) {
    return (
      <ProductDetail product={product} />
    );
  } else {
    return <></>;
  }
}
