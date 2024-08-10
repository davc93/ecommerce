"use client";
import { IconStar } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useToast } from "@/hooks";
import { formatPrice } from "@/lib";
import { useCartStore } from "@/stores";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  description: string;
  slug: string;
  image: string;
  price: number;
};

export const ProductCard = ({
  name,
  description,
  slug = "#",
  image,
  price,
}: Props) => {
  const toast = useToast();
  const rating = 4;
  const path = usePathname();
  const addItem = useCartStore((state) => state.addItem);
  const handleAddClick = () => {
    try {
      addItem({
        id: name,
        quantity: 1,
        name,
        price,
      });
      toast.toast({
        description: "Producto agregado al carrito",
      });
    } catch (error) {}
  };
  return (
    <div
      key={name}
      className="bg-background rounded-lg shadow-sm overflow-hidden"
    >
      <Link href={`${path}/${slug}`}>
        <img
          src="/placeholder.svg"
          alt={name}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
      </Link>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <IconStar className="w-5 h-5 fill-primary" />
            <span className="text-sm text-muted-foreground">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="text-lg font-semibold">${formatPrice(price)}</div>
        </div>
        <Button onClick={handleAddClick} size="sm" className="w-full mt-4">
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

{
  /* <Card>
      <Link href={`${path}/${slug}`}>
        <div className="relative h-52 ">
        <Image src={image} alt={name} fill style={{objectFit:'contain'}}  />
        </div>

        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {/* <CardContent>
      <p>Card Content</p>
    </CardContent> */
}
// </Link>

// <CardFooter className="justify-end">
//   <Button onClick={()=>{addItem({
//     id: name,
//     quantity: 1,
//     name,
//     price
//   })}}>Add to cart</Button>
// </CardFooter>
// </Card> */}
