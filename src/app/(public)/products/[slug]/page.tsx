"use client";
import { useEffect } from "react";
import { useGetProducts } from "../hooks";
import Image from "next/image";
import { Button } from "@/components/ui/button";
type Props = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: Props) {
  const { products, filterBySlug } = useGetProducts();
  useEffect(() => {
    filterBySlug(params.slug);
  }, [params]);
  const product = products[0];
  if (product) {
    return (
      <>
        <div className="flex w-full gap-3 flex-wrap md:flex-nowrap ">
          <div className="max-w-lg">
            <img
              className=""
              src={product.attributes.image.data.attributes.url}
              alt={product.attributes.name}
            />
          </div>

          <div className="flex  flex-col gap-2 w-full">
            <h1 className="text-xl font-bold">{product.attributes.name}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              beatae porro officia fugit! Labore sunt fugit voluptas eligendi
              qui tempore consequatur, corrupti nisi blanditiis error
              perferendis molestias numquam, repellendus placeat.
            </p>

          <Button className="w-fit mt-1">
            Add to cart
          </Button>
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
