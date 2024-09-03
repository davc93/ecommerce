/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { IconStar as StarIcon } from '@/components/icons'
import { ProductsResponse } from "../models"
import { useToast } from "@/hooks"
import { useCartStore } from "@/stores"
import { formatPrice } from "@/lib"
// import React from 'react'
type Props = {
    product:ProductsResponse['data'][0]
}

export const ProductDetail = (props:Props) => {
    const product = props.product.attributes
const toast = useToast();
  const rating = 4;
  const addItem = useCartStore((state) => state.addItem);
  const handleAddClick = () => {
    try {
      addItem({
        id: product.name,
        quantity: 1,
        name:product.name,
        price:product.price,
      });
      toast.toast({
        description: "Producto agregado al carrito",
      });
    } catch (error) {}
  };
  return (
    <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
      <div className="grid gap-4 md:gap-8">
        <img
          src="/placeholder.svg"
          alt="Product Image"
          width={600}
          height={900}
          className="aspect-[2/3] object-cover border w-full rounded-lg overflow-hidden"
        />
        <div className="grid gap-4">
          <div className="grid gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl">{product.name}</h1>
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
          </div>
          <div className="text-sm leading-loose text-muted-foreground">
            <p>
              Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual. This
              tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester jersey,
              ensuring a soft and breathable fabric that feels gentle against the skin.
            </p>
            <p>
              The design of the Acme Prism T-Shirt is as striking as it is comfortable. The shirt features a unique
              prism-inspired pattern that adds a modern and eye-catching touch to your ensemble.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <h2 className="text-4xl font-bold">{formatPrice(product.price)}</h2>
            <Button onClick={handleAddClick} size="lg">Add to Cart</Button>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Product Specifications</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <h3 className="font-medium">Materials</h3>
              <p>60% combed ringspun cotton, 40% polyester jersey</p>
            </div>
            <div className="grid gap-2">
              <h3 className="font-medium">Care Instructions</h3>
              <p>Machine wash cold, tumble dry low</p>
            </div>
            <div className="grid gap-2">
              <h3 className="font-medium">Dimensions</h3>
              <p>Length: 27 inches, Chest: 42 inches</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="grid gap-0.5 text-sm">
                    <h3 className="font-semibold">Sarah Johnson</h3>
                    <time className="text-sm text-muted-foreground">2 days ago</time>
                  </div>
                  <div className="flex items-center gap-0.5 ml-auto">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm leading-loose text-muted-foreground">
                  <p>
                    I've been experimenting with my LuminaCook Multi-Function Air Fryer for a few weeks now, and it's
                    been a versatile addition to my kitchen. It's great for making crispy fries, chicken wings, and even
                    some healthier options.
                  </p>
                </div>
              </div>
            </div>
            <Separator className="my-6" />
            <div className="flex gap-4">
              <Avatar className="w-10 h-10 border">
                <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="grid gap-0.5 text-sm">
                    <h3 className="font-semibold">Alex Smith</h3>
                    <time className="text-sm text-muted-foreground">3 weeks ago</time>
                  </div>
                  <div className="flex items-center gap-0.5 ml-auto">
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-primary" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                    <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                  </div>
                </div>
                <div className="text-sm leading-loose text-muted-foreground">
                  <p>
                    I recently purchased the SparkleShine Home Cleaning Robot, and it has been a game-changer in my
                    life. I used to spend hours every weekend cleaning my house, but now I can simply turn on this
                    little robot and let it do the work. It's incredibly efficient, navigating around obstacles with
                    ease. The only reason I didn't give it a perfect 5-star rating is that it occasionally gets stuck
                    under low furniture. Overall, it's been a great addition to my home, saving me time and effort.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
