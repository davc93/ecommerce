import { useEffect, useState } from "react";
import type { ProductsResponse } from "../models";
type Filter = { field: string; value: string };
const getProducts = async (
  filter?: Filter
): Promise<ProductsResponse["data"]> => {
  const params = new URLSearchParams();
  if (filter) {
    params.append(filter.field, filter.value);
  }
  try {
    const response = await fetch(`/api/products?${params.toString()}`);
    const jsonResponse: ProductsResponse = await response.json();
    return jsonResponse.data;
  } catch (error) {
    throw new Error(error as string);
  }
};

export const useGetProducts = () => {
  const [products, setProducts] = useState<ProductsResponse["data"]>([]);
  const [filter, setFilter] = useState<Filter>({ field: "", value: "" });

  useEffect(() => {
    if (products.length !== 1) {
      getProducts(filter).then((products) => {
        setProducts(products);
      });
    }
  }, [filter]);
  const filterBySlug = (slug: string) => {
    setFilter({
      field: "slug",
      value: slug,
    });
  };
  return {
    products,
    filterBySlug,
  };
};
