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
    <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 shadow-sm bg-background">
      <Link
        href="/"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <IconGrape className="h-6 w-6 text-primary" />
        <img src="/logo.png" alt="San Diego" className="h-6 ml-1 -mb-1" />        
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
                    {formatPrice(item.price * item.quantity)}
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

function Logo() {
  return (
    <svg width="395.52" height="90.61" viewBox="0 0 504.027 115.469">
      <rect
        width="4.578"
        height="100.262"
        x="91.945"
        y="7.603"
        fill="#ff4e50"
        fillOpacity="1"
        stroke="transparent"
        strokeWidth="0"
        className="rect-r-0"
        data-fill-palette-color="primary"
        data-palette-color="#ff4e50"
        opacity="1"
        rx="1%"
      ></rect>
      <svg
        width="395.52"
        height="83.552"
        transform="translate(108.507 15.958)"
        viewBox="0 0 395.52 83.552"
      >
        <g>
          <svg width="395.52" height="83.552" viewBox="0 0 395.52 83.552">
            <svg width="395.52" height="50.764" viewBox="0 0 395.52 50.764">
              <svg
                width="395.52"
                height="50.764"
                data-palette-color="#ff4e50"
                viewBox="2.35 -37.3 395.76 50.8"
              >
                <path
                  fill="#ff4e50"
                  d="M11.95-1.7l6.35-1.45 1.95-2.7-.1-4.45-2.25-2.4-12.7-7.05-2.3-5.4.45-4.7L6.2-33.7l6.95-2.3 7.65.6 2.35-.2-.4 2.55.05 6.55-1.85.4-1.3-6.6-5.9-.8-5.05 1.9-1.15 3.3 1.1 4.25 12.6 6.9 3.7 3.85.2 7.9L21.3-.6 13.95 1 4.7-.1 2.35-.45l.4-1.95.45-6.55 1.85-.4.8 6.6 6.1 1.05zm35.7-18.1l.05 10.7.35 7.05 3.45.5L51.15.1 44.2.7l-.65-2.95h-.25L38.35.7h-5.2l-3.5-2.55-1.05-4.9 2.2-3.9 6-2.6 6.6-.25-.2-6.25-.95-3.1L38.2-24l-4.85 1.15-.15 5.3-1.95.4-1.3-6.85 5.75-1.7 6.45-.3 3.9 1.9 1.6 4.3zM33.45-6.85L34.8-2.8l3.75.95 5.05-2.9-.2-6.75h-4.35L35.2-9.95l-1.75 3.1zM77.9-8.3l.4 5.85 3.54.95-.25 1.75L75.7 0l-6.11.25.11-1.75 3.3-1 .34-5.25-.19-10.9-1.35-3.3-4.25-.75-5.46 2.8-.09 1.75-.3 5 .1 4.85.25 5.8 3.65 1-.25 1.75-5.9-.25-6.1.25.1-1.75 3.29-1 .36-5.25-.45-14.8-3.55.15-.25-1.75 6.89-1.35 2.5.55-.14 2.55 5.35-3.25 5.1-.35 4.6 3.15.75 4-.1 10.55zM111.39.4l-8.75-.4-6.85.25.1-1.75 4-1 .5-14.1-.5-15.9-3.85-1 .25-1.75 6.1.25 9-.45 6 1.35 7.75 4.3 3 6.15.55 6.15-2.65 11.2-8.4 5.55L111.39.4zm-6.25-2.65h6.3l5.95-1.7 4.05-3.9 1.55-9.65-.95-8.6-4.75-5.05-5.8-1.6h-6.35l-.45 6.2.45 24.3zm36.15-22.7l-.35 6.8-.3 5 .15 4.85.2 5.8 3.65 1-.25 1.75-5.9-.25-6.1.25.1-1.75 3.3-1 .25-5.25-.1-9.6-.25-5.2-3.55.15-.25-1.75 6.9-1.35 2.5.55zm-7.05-9.45l1.15-1.85 2.25-1.05 2.3.75 1.05 2.6-1.35 2.1-2.25.9-2.1-1.3-1.05-2.15zm26.85 21.5l-8.65-.55-.05.45 1.35 7.05 3.95 3.9 4.6.5 4.7-2.5.9 1.3L163.94.4l-4.7.6-4.9-1.15-4.25-3.55-2.55-7.5.85-6.7 2.6-4.7 5.25-2.9 4.4-.55 3.5 1.1 2.7 2.45 1.55 4.45.05 4.15-.7.55-6.65.45zm-2.35-10.9l-3.8 2.25-1.95 3.8-.3 2.25 7.6.1 3.45-.75-.3-4.65-1.5-2.55-3.2-.45zm29.49-.7l6.4-4.2 1.6 3.35-2.1 1.3-4.15.55 3.5 4.3-.05 4.85-2.8 4.15-6.1 2-5.3-.75-.9 1.3-.2 1.4 1.4.9 8.6 1.35 3.35.75 3.35 2.4.4 5.95-2.3 3.45-5.6 2.55-7.9.25-3.45-1.05-2.85-2.5-1.05-3.6 1.5-4.35 3.4-1.6-1.8-1.7V-6.9l2.25-2.65-4.25-3.3-.5-6.35 4.15-4.8 6.35-1.5 5.05 1zm-9.75 12.35l3.3 1.8 4.1-.55 2.65-2.85.4-4.9-2.2-3.75-3.65-1.1-4.8 2-1.4 4.4 1.6 4.95zm12.95 14.2L184.48-.3l-5.8-.8-2.25 2.45-.3 3.7 2.25 3.25 5.65.85 5.95-2.25 1.45-4.85zm8.5-6.6l-1.65-4.95v-6.55l2.95-5.95 5.65-3.75 6.85-.25 6.25 3.75 3.25 6-.6 9.15-3.7 5.9-7.75 2.2-6.5-1.25-4.75-4.3zm7-18.65l-3.15 5.45-.25 5.6.6 5.8 2.15 3.75 5.3 1.3 4.9-2.15 1.45-7.8-.5-6.5-1.85-4.15-3.65-1.85-5 .55zm43.05 24.7l-7.3-19.7-2.25-4.4-3.35-.9.25-1.75 6.1.25 6.1-.25-.1 1.75-3.4 1 .8 2.9 2.7 8.35 2 7.3h.15l1.35-5.1 3.8-10.75-1.4-2.8-3.35-.9.25-1.75 6.1.25 6.1-.25-.1 1.75-3.4 1 .8 2.9 2.4 8.35 2 7.3h.15l1.35-5.1 3.5-10.4.8-3.2-3.9-.85.25-1.75 4.9.25 5.3-.25-.1 1.75-3.1 1-2.15 4.6-5.35 16.45-1.55 2.6-1.65.35-6.4-17.9-5.1 14.95-1.55 2.6-1.65.35zm38.89-26.45l-.35 6.8-.3 5 .15 4.85.2 5.8 3.65 1-.25 1.75-5.9-.25-6.1.25.1-1.75 3.3-1 .25-5.25-.1-9.6-.25-5.2-3.55.15-.25-1.75 6.9-1.35 2.5.55zm-7.05-9.45l1.15-1.85 2.25-1.05 2.3.75 1.05 2.6-1.35 2.1-2.25.9-2.1-1.3-1.05-2.15zm37.1 26.1l.4 5.85 3.55.95-.25 1.75-5.9-.25-6.1.25.1-1.75 3.3-1 .35-5.25-.2-10.9-1.35-3.3-4.25-.75-5.45 2.8-.1 1.75-.3 5 .1 4.85.25 5.8 3.65 1-.25 1.75-5.9-.25-6.1.25.1-1.75 3.3-1 .35-5.25-.45-14.8-3.55.15-.25-1.75 6.9-1.35 2.5.55-.15 2.55 5.35-3.25 5.1-.35 4.6 3.15.75 4-.1 10.55zm19.9-4.6l-8.65-.55-.05.45 1.35 7.05 3.95 3.9 4.6.5 4.7-2.5.9 1.3L341.67.4l-4.7.6-4.9-1.15-4.25-3.55-2.55-7.5.85-6.7 2.6-4.7 5.25-2.9 4.4-.55 3.5 1.1 2.7 2.45 1.55 4.45.05 4.15-.7.55-6.65.45zm-2.35-10.9l-3.8 2.25-1.95 3.8-.3 2.25 7.6.1 3.45-.75-.3-4.65-1.5-2.55-3.2-.45zm21.8-1.15l-.2 4.05h.2l3.1-3.55 3.4-1.5 3.75.95-.85 7.45-1.75-.35-1.25-5.15-3.25 1.05-3.55 4.15-.25 4.7.15 4.85.2 5.8 5 1-.25 1.75-7.25-.25-6.1.25.1-1.75 3.3-1 .25-5.25-.1-9.6-.25-5.2-3.55.15-.25-1.75 6.9-1.35 2.5.55zM377.71 13l-2.5.5-1.55-2.25-1.5-4.1 1.9-.7 2.8 4.15 2.55-2.45 3.5-8-7.75-19.85-1.75-3.05-3.55-.75.25-1.75 6.1.25 5.95-.25-.1 1.75-2.9.85.75 3.1 2.7 6.9 2.75 8.05h.15l2.5-7.85 2.55-7.15.5-3.2-2.8-.7.25-1.75 5.35.25 4.25-.25-.1 1.75-3.05.9-1.75 3.75-7.45 19.9-4.3 8.25-3.75 3.7z"
                  className="wordmark-text-0"
                  data-fill-palette-color="primary"
                  opacity="1"
                ></path>
              </svg>
            </svg>
            <svg
              width="232.21"
              height="20.803"
              transform="translate(0 62.748)"
              viewBox="0 0 232.21 20.803"
            >
              <svg
                width="232.21"
                height="20.803"
                data-palette-color="#ff4e50"
                viewBox="1.05 -37.1 423.55 37.95"
              >
                <path
                  fill="#ff4e50"
                  d="M10.3.6Q6.9.6 5.5-.78 4.1-2.15 4.1-5.45v-12.3q0-1.35-.6-1.9-.6-.55-2.25-.6l-.2-.3.25-1.5q1.45-.7 2.83-1.73 1.37-1.02 2.25-1.8.87-.77 1.12-1.02l1 .4q-.05.25-.15 1.2-.1.95-.25 2.55l7.35-.15.15.15-.45 2.65-7.25-.15q-.35 5.5-.35 12.5 0 2.55.88 3.6.87 1.05 3.02 1.05.75 0 1.5-.2t1.25-.43q.5-.22.65-.27l.5 1.3q-.3.25-1.27.95-.98.7-2.1 1.37Q10.85.6 10.3.6zm7.95-2.55q1.45-.15 2.02-.75.58-.6.58-2v-26.6q0-1.35-.45-1.97-.45-.63-1.4-.63h-1.05l-.2-.15.2-1.6q1.7-.2 3.85-.62 2.15-.43 3.55-.83l.3.65q-.35.55-.68 5.35-.32 4.8-.52 11.8 5.7-3.9 7.5-3.9 3.25 0 5.05 1.7 1.8 1.7 1.8 4.75 0 1-.35 4.6Q38-6.3 38-4.9q0 1.45.4 2.12.4.68 1.35.68l1.75-.1.1.2-.4 2.15Q37.9 0 36.75 0q-2 0-5.15.6l.2-2.05q1.5-.4 2.15-1.18.65-.77.65-2.07l.3-9.9q0-2.5-1.08-3.85-1.07-1.35-3.07-1.35-1.25 0-3.08.8-1.82.8-3.27 1.95-.15 5.6-.15 12.15 0 1.55.4 2.17.4.63 1.4.63l1.75-.1.1.2-.45 2.15Q24 0 22.9 0q-2.15 0-4.95.1l.3-2.05zM55.5.6Q52.4.6 50-.78q-2.4-1.37-3.7-3.89Q45-7.2 45-10.45q0-3.35 1.52-6.3 1.53-2.95 4.08-4.7t5.45-1.75q3.65 0 5.55 1.85t1.9 5.4q0 1.45-.3 2.45l-.65.6h-13.8q-.05 4.85 1.92 7.47Q52.65-2.8 56.2-2.8q2.8 0 6.1-1.55l.3.1.55 1.45q-1.8 1.3-3.98 2.35Q57 .6 55.5.6zm-6.55-15.35L58-15.2q.75-.1 1-.35.25-.25.25-1 0-2-1.08-3.05-1.07-1.05-3.07-1.05-2.35 0-4.03 1.6-1.67 1.6-2.12 4.3zM86.64.6q-2.1 0-4.27-.27Q80.19.05 80.19 0l-.45-.4v-30.9q0-2.7-1.85-2.7-.4 0-.7.05-.3.05-.4.1l-.15-.15.2-1.65q2.15-.3 4.45-.8 2.3-.5 2.95-.65l.3.65q-.35.5-.65 5.07-.3 4.58-.5 11.68 2.25-1.6 3.88-2.55 1.62-.95 2.17-.95 2.8 0 5 1.35t3.43 3.78q1.22 2.42 1.22 5.57 0 3.6-1.67 6.6-1.68 3-4.53 4.75Q90.04.6 86.64.6zm1.4-2.75q3.35 0 5.28-2.27 1.92-2.28 1.92-6.23 0-2.5-.87-4.6-.88-2.1-2.4-3.32-1.53-1.23-3.33-1.23-1 0-2.55.77-1.55.78-2.8 1.93l-.15 13.9q.9.45 2.3.75t2.6.3zM113.19.6q-3.1 0-5.5-1.38-2.4-1.37-3.7-3.89-1.3-2.53-1.3-5.78 0-3.35 1.52-6.3 1.53-2.95 4.08-4.7t5.45-1.75q3.65 0 5.55 1.85t1.9 5.4q0 1.45-.3 2.45l-.65.6h-13.8q-.05 4.85 1.92 7.47 1.98 2.63 5.53 2.63 2.8 0 6.1-1.55l.3.1.55 1.45q-1.8 1.3-3.98 2.35Q114.69.6 113.19.6zm-6.55-15.35l9.05-.45q.75-.1 1-.35.25-.25.25-1 0-2-1.08-3.05-1.07-1.05-3.07-1.05-2.35 0-4.03 1.6-1.67 1.6-2.12 4.3zM131.84.6q-1.6 0-2.93-.22-1.32-.23-2.07-.48-.75-.25-.95-.35l-.15-.35q.15-.75.35-3.1.2-2.35.25-3.6l1.75-.25q0 3.3 1.1 4.65 1.1 1.35 3.75 1.35 1.9 0 3.2-.85 1.3-.85 1.3-2.1t-1.18-2.28q-1.17-1.02-4.62-2.87-2.85-1.45-4.15-2.95-1.3-1.5-1.3-3.3 0-2 1.2-3.63 1.2-1.62 3.3-2.55 2.1-.92 4.7-.92 1.2 0 2.3.17 1.1.18 1.8.38t.9.25l.1.25-.45 2.27q-.35 1.78-.5 3.83l-1.85.15q0-.15.05-.6.05-.45.05-.85 0-1.8-.98-2.63-.97-.82-3.12-.82-1.7 0-2.88.8-1.17.8-1.17 1.95 0 1.2 1.02 2.25 1.03 1.05 3.33 2.25 4.05 2.15 5.52 3.62 1.48 1.48 1.48 3.38T139.74-3q-1.25 1.65-3.38 2.62-2.12.98-4.52.98zm21.84 0q-3.4 0-4.8-1.38-1.4-1.37-1.4-4.67v-12.3q0-1.35-.6-1.9-.6-.55-2.25-.6l-.2-.3.25-1.5q1.45-.7 2.83-1.73 1.37-1.02 2.25-1.8.87-.77 1.12-1.02l1 .4q-.05.25-.15 1.2-.1.95-.25 2.55l7.35-.15.15.15-.45 2.65-7.25-.15q-.35 5.5-.35 12.5 0 2.55.88 3.6.87 1.05 3.02 1.05.75 0 1.5-.2t1.25-.43q.5-.22.65-.27l.5 1.3q-.3.25-1.27.95-.98.7-2.1 1.37-1.13.68-1.68.68zm25.2.25q-.7-2.4-2.88-9.43-2.17-7.02-3.02-9.72-.85-2.45-3.3-2.5l-.1-.2.3-1.65 4 .05q1.9 0 3.62-.15 1.73-.15 2.23-.2l.1.25-.3 1.55q-1.65.05-2.25.32-.6.28-.6.98 0 .95 1.75 7.17 1.75 6.23 2.4 8.43h.2l2.95-7.4q1.6-3.85 2.3-5.85-.55-1.7-1.33-2.5-.77-.8-2.22-.8l-.1-.2.3-1.65 4 .05q1.85 0 3.6-.1t2.25-.15l.1.25-.3 1.55q-1.7.05-2.28.3-.57.25-.57.9 0 .9 1.75 7.12 1.75 6.23 2.4 8.48h.2q2.2-5.65 2.9-7.25 1.25-3.1 2.07-5.3.83-2.2.83-2.8 0-.7-.48-.98-.47-.27-1.57-.27h-1.85l-.2-.3.25-1.55q.45 0 1.8.05t3.15.05l4.1-.05-.35 1.85q-1 .1-1.6.82-.6.73-1.5 2.93l-7 17.05-2.7.85-4.5-14.75h-.3L181.63 0l-2.75.85zM207.23.6l.2-2.05q1.5-.4 2.15-1.18.65-.77.65-2.07v-12.7q0-2.7-1.85-2.7-.35 0-.75.07-.4.08-.5.13l.2-1.85q2.1-.3 4.32-.8 2.23-.5 2.88-.65l.25.6q-.45 1.05-.8 6.42-.35 5.38-.35 11.28 0 1.45.4 2.12.4.68 1.35.68.55 0 1.05-.05t.7-.05l.1.2-.4 2.15q-.45-.05-1.7-.1T212.38 0q-1.3 0-2.98.25-1.67.25-2.17.35zm4.4-29.7q-1.15 0-1.8-.75-.65-.75-.65-1.8 0-1.2.85-2.08.85-.87 2.1-.87 1.15 0 1.8.75.65.75.65 1.8 0 1.2-.85 2.07-.85.88-2.1.88zm23.84 27.65q1.5-.4 2.15-1.18.65-.77.65-2.07l.2-9.9q0-2.5-1.07-3.85-1.08-1.35-3.08-1.35-1.6 0-3.25.82-1.65.83-2.9 1.78-.45 10.35-.45 12.3 0 1.55.4 2.17.4.63 1.4.63.55 0 1.05-.05t.7-.05l.1.2-.45 2.15q-.45-.05-1.75-.1t-2.8-.05q-1.3 0-2.87.13-1.58.12-2.08.17l.25-2.05q1.45-.25 2.05-.9.6-.65.6-2.05v-12.2q0-1.7-.55-2.38-.55-.67-1.9-.67h-.55l-.15-.2.15-1.65q2.15-.35 4.28-.83 2.12-.47 2.72-.62l.3.4q-.1.3-.3 1.27-.2.98-.25 2.03l.1.15q5.7-3.8 7.35-3.8 3.15 0 5 1.75t1.85 4.7q0 .5-.3 4.6-.4 5.2-.4 7.25 0 1.45.4 2.12.4.68 1.35.68.55 0 1.05-.05t.7-.05l.1.2-.4 2.15q-.45-.05-1.7-.1T240.42 0q-1.3 0-2.97.25-1.68.25-2.18.35l.2-2.05zM258.82.6q-3.1 0-5.5-1.38-2.4-1.37-3.7-3.89-1.3-2.53-1.3-5.78 0-3.35 1.53-6.3 1.52-2.95 4.07-4.7 2.55-1.75 5.45-1.75 3.65 0 5.55 1.85t1.9 5.4q0 1.45-.3 2.45l-.65.6h-13.8q-.05 4.85 1.93 7.47 1.97 2.63 5.52 2.63 2.8 0 6.1-1.55l.3.1.55 1.45q-1.8 1.3-3.97 2.35Q260.32.6 258.82.6zm-6.55-15.35l9.05-.45q.75-.1 1-.35.25-.25.25-1 0-2-1.07-3.05-1.08-1.05-3.08-1.05-2.35 0-4.02 1.6-1.68 1.6-2.13 4.3zM290.32.6q-2.85 0-5.05-1.4-2.2-1.4-3.43-3.93-1.22-2.52-1.22-5.77 0-3.5 1.52-6.43 1.53-2.92 4.18-4.6 2.65-1.67 5.9-1.67 2.8 0 5.02 1.4 2.23 1.4 3.45 3.92 1.23 2.53 1.23 5.78 0 3.5-1.53 6.42-1.52 2.93-4.17 4.61Q293.57.6 290.32.6zm1.4-2.45q2.8 0 4.45-2.28 1.65-2.27 1.65-6.17 0-2.95-.9-5.28-.9-2.32-2.53-3.62-1.62-1.3-3.67-1.3-2.8 0-4.45 2.3-1.65 2.3-1.65 6.25 0 2.95.9 5.25t2.5 3.57q1.6 1.28 3.7 1.28zM306.01.2l.25-1.95q2.85-.4 2.85-2.95v-13.5q-.05-1.2-.67-1.58-.63-.37-2.48-.47l-.2-.3.35-1.7 3-.55v-.2q0-4.3 1.43-7.5 1.42-3.2 4-4.9 2.57-1.7 6.07-1.7 1.5 0 2.78.2 1.27.2 2 .42.72.23.92.33l.1.45q-.15.25-.62 1.18-.48.92-.93 2.07l-.55.15q-.2-.15-.97-.6-.78-.45-2.05-.85-1.28-.4-2.73-.4-2.85 0-4.25 2.27-1.4 2.28-1.5 6.98l-.05 2.45q2.6 0 4.45-.05t2.45-.1l.15.15-.5 2.65q-.55-.05-2.32-.1-1.78-.05-4.28-.05l-.2 15.05q0 1.4.63 2.07.62.68 1.92.68 1.2 0 1.98-.05.77-.05 1.02-.05l.1.2-.35 2.15q-.7 0-2.55-.05-1.85-.05-3.65-.05-1.75 0-3.42.08-1.68.07-2.18.12zm36.35.4q-4.75 0-7.6-3-2.85-3-2.85-8.05 0-3.55 1.52-6.48 1.53-2.92 4.15-4.6 2.63-1.67 5.88-1.67 1.4 0 2.7.2 1.3.2 2.12.42.83.23 1.03.33l.15.35q-.05.25-.28 1.17-.22.93-.47 2.45-.25 1.53-.3 3.28l-2.05.15v-1.55q0-1.85-1.13-2.98-1.12-1.12-2.97-1.12-3.05 0-4.7 2.18-1.65 2.17-1.65 6.17 0 4.35 1.82 6.87 1.83 2.53 4.98 2.53 1.25 0 2.5-.38 1.25-.37 2.1-.75.85-.37 1.05-.52l.3.1.55 1.55q-.35.25-1.53 1.05-1.17.8-2.7 1.55-1.52.75-2.62.75zm10.7-2.55q1.44-.15 2.02-.75.58-.6.58-2v-26.6q0-1.35-.46-1.97-.45-.63-1.39-.63h-1.06l-.19-.15.19-1.6q1.7-.2 3.86-.62 2.14-.43 3.55-.83l.29.65q-.34.55-.67 5.35t-.53 11.8q5.7-3.9 7.5-3.9 3.25 0 5.06 1.7 1.8 1.7 1.8 4.75 0 1-.36 4.6-.44 5.85-.44 7.25 0 1.45.39 2.12.41.68 1.36.68l1.75-.1.1.2L376 .15Q372.7 0 371.56 0q-2 0-5.15.6l.2-2.05q1.5-.4 2.14-1.18.66-.77.66-2.07l.29-9.9q0-2.5-1.07-3.85t-3.07-1.35q-1.25 0-3.08.8-1.82.8-3.28 1.95-.14 5.6-.14 12.15 0 1.55.39 2.17.41.63 1.41.63l1.75-.1.09.2-.45 2.15Q358.81 0 357.7 0q-2.14 0-4.95.1l.31-2.05zM380.2.6l.2-2.05q1.5-.4 2.15-1.18.65-.77.65-2.07v-12.7q0-2.7-1.85-2.7-.35 0-.75.07-.4.08-.5.13l.2-1.85q2.1-.3 4.33-.8 2.22-.5 2.87-.65l.25.6q-.45 1.05-.8 6.42-.35 5.38-.35 11.28 0 1.45.4 2.12.4.68 1.35.68.55 0 1.05-.05t.7-.05l.1.2-.4 2.15q-.45-.05-1.7-.1T385.35 0q-1.3 0-2.97.25-1.68.25-2.18.35zm4.4-29.7q-1.15 0-1.8-.75-.65-.75-.65-1.8 0-1.2.85-2.08.85-.87 2.1-.87 1.15 0 1.8.75.65.75.65 1.8 0 1.2-.85 2.07-.85.88-2.1.88zM393.45.6l.2-2.05q1.4-.4 1.98-1 .57-.6.7-1.45.12-.85.12-2.85V-31.3q0-1.55-.35-2.1t-1.45-.55q-.25 0-1.15.1l-.15-.1.2-1.7q4.2-.6 7.4-1.45l.3.65q-.55.85-.97 10.7-.43 9.85-.43 20.85 0 1.5.4 2.15.4.65 1.35.65l1.75-.1.1.2-.4 2.15Q399.75 0 398.6 0q-1.7 0-5.15.6zm23.15 0q-3.1 0-5.5-1.38-2.4-1.37-3.7-3.89-1.3-2.53-1.3-5.78 0-3.35 1.52-6.3 1.53-2.95 4.08-4.7t5.45-1.75q3.65 0 5.55 1.85t1.9 5.4q0 1.45-.3 2.45l-.65.6h-13.8q-.05 4.85 1.92 7.47 1.98 2.63 5.53 2.63 2.8 0 6.1-1.55l.3.1.55 1.45q-1.8 1.3-3.98 2.35Q418.1.6 416.6.6zm-6.55-15.35l9.05-.45q.75-.1 1-.35.25-.25.25-1 0-2-1.08-3.05-1.07-1.05-3.07-1.05-2.35 0-4.03 1.6-1.67 1.6-2.12 4.3z"
                  className="slogan-text-1"
                  data-fill-palette-color="secondary"
                  opacity="1"
                ></path>
              </svg>
            </svg>
          </svg>
        </g>
      </svg>
      <svg width="79.96" height="115.469" viewBox="0 0 79.96 115.469">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="79.96"
          height="115.469"
          x="0"
          y="0"
          className="icon-icon-0"
          data-fill-palette-color="accent"
          version="1.1"
          viewBox="16.244 0.869 68.568 99.017"
          xmlSpace="preserve"
        >
          <g fill="#a22224" data-fill-palette-color="accent">
            <path
              d="M50.527 51.855c13.081 0 23.684-10.604 23.684-23.685H26.846c0 13.082 10.601 23.685 23.681 23.685"
              data-fill-palette-color="accent"
            ></path>
            <path
              d="M58.175 90.307a4.38 4.38 0 01-3.826-4.341V65.791a3.29 3.29 0 012.794-3.251c.002 0-.005-.008-.004-.009 15.75-3.09 27.673-16.996 27.673-33.639 0-6.9-1.893-18.836-5.667-28.023h-6.642c3.755 7.792 6.195 20.236 6.195 28.023 0 15.532-12.638 28.17-28.17 28.17s-28.17-12.638-28.17-28.17c0-7.221 3.082-20.005 7.359-28.023h-6.782c-4.262 9.345-6.691 21.445-6.691 28.023 0 16.65 11.935 30.562 27.696 33.643l-.002.005a3.28 3.28 0 012.769 2.974v20.49l-.001.011a4.38 4.38 0 01-3.877 4.352c-.021.002-.037.024-.051.06-11.966 1.219-20.689 4.99-20.689 9.459h58.042c0-4.626-9.343-8.506-21.956-9.579"
              data-fill-palette-color="accent"
            ></path>
          </g>
        </svg>
      </svg>
    </svg>
  );
}

