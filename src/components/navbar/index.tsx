"use client";
import Link from "next/link";
import React from "react";
import { IconGrape, IconShoppingCart } from "../icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { ContactForm } from "../contact-form";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { useCartStore } from "@/stores";
import { ContactModal } from "../contact-modal";
import { formatPrice } from "@/lib";

export const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <IconGrape className="h-6 w-6" />
        <span className="sr-only">Acme Winery</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          href="/"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/products"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Shop
        </Link>
        <ContactModal
          triggerElement={
            <button className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </button>
          }
        />
        <CartMenu />
      </nav>
    </header>
  );
};

export const CartMenu = () => {
  const cart = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">

          <IconShoppingCart className="mx-auto" />
          {cart.length >= 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full px-1.5 py-0.5 text-xs font-medium">
              {cart.length}
            </span>
          )}
          <span className="sr-only">Shopping Cart</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[320px] p-4">
        {cart.length > 0 ? (
          <>
            <div className="grid gap-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4"
                >
                  <img
                    src="/placeholder.svg"
                    alt={item.name}
                    width={64}
                    height={64}
                    className="rounded-md"
                    style={{ aspectRatio: "64/64", objectFit: "cover" }}
                  />
                  <div className="grid gap-1">
                    <h4 className="font-medium">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.quantity} x ${formatPrice(item.price)}
                    </p>
                  </div>
                  <div className="text-right font-medium">
                    ${formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
            <Separator className="my-4" />
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Total</span>
                {/* <span className="font-medium">${total.toFixed(2)}</span> */}
              </div>
              <div className="grid sm:grid-cols-2 gap-2">
                <Link href={"/checkout"}>
                  <Button variant='outline'>Checkout</Button>
                </Link>
                <Button variant="ghost" onClick={clearCart}>
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center gap-2 py-8">
            <div className="w-8 h-8 text-muted-foreground" />
            <p className="text-muted-foreground">Your cart is empty</p>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
