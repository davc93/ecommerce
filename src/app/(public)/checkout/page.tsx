"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores";
import { usePayOrder } from "./usePayOrder";
import { formatPrice } from "@/lib";
import { PaymentContainer } from "./components";
export default function Page() {
  const items = useCartStore((state) => state.items);
  const total = items.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );
  const { mutation: payOrder } = usePayOrder();
  return (
    <>
      <div className="flex-1 py-8 px-4 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-4">Review Your Order</h1>
            <div className="bg-muted p-4 rounded-md">
              <div className="grid gap-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src="/placeholder.svg"
                      alt="Product Image"
                      width={80}
                      height={80}
                      className="rounded-md"
                      style={{ aspectRatio: "80/80", objectFit: "cover" }}
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-muted-foreground text-sm">
                        {formatPrice(item.price)} x {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="bg-muted p-4 rounded-md">
              <form className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>
                {/* <div className="grid gap-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea
                    id="address"
                    placeholder="123 Main St, Anytown USA"
                  />
                </div> */}
              </form>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-muted p-4 rounded-md">
            <div className="grid gap-2">
              <div className="flex items-center justify-between">
                <p>Subtotal</p>
                <p className="font-medium">{formatPrice(total)}</p>
              </div>
              <div className="flex items-center justify-between">
                <p>Taxes</p>
                <p className="font-medium">$0</p>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">{formatPrice(total)}</p>
              </div>
            </div>
          </div>
          <PaymentContainer  />
        </div>
      </div>
      <footer className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <p className="text-sm">&copy; 2023 Vino Deluxe. All rights reserved.</p>
        <nav className="flex items-center gap-4">
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms of Service
          </Link>
        </nav>
      </footer>
    </>
  );
}

