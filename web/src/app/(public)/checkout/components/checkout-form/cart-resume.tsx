import { formatPrice } from "@/lib";
import { useCartStore } from "@/stores";
import React from "react";

export const CartResume = () => {
  const items = useCartStore((state) => state.items);

  return (
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
  );
};
