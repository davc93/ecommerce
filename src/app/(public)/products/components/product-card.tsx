'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useCartStore } from "@/stores";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    name:string
    description:string
    slug:string
    image:string,
    price:number
}

export const ProductCard = ({name,description,slug = '#',image,price}:Props) => {
  const path = usePathname()
  const addItem = useCartStore(state => state.addItem)
  return (
    <Card>
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
    </CardContent> */}
      </Link>

      <CardFooter className="justify-end">
        <Button onClick={()=>{addItem({
          id: name,
          quantity: 1,
          name,
          price
        })}}>Add to cart</Button>
      </CardFooter>
    </Card>
  );
};

