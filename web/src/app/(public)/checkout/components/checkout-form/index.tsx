"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/stores";
import { usePayOrder } from "../usePayOrder";
import { formatPrice } from "@/lib";
import { PaymentContainer } from "../payment-container";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CartResume } from "./cart-resume";
const FormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  paymentMethod: z.enum(['mercadopago','flow']),
});

export type FormValues = z.infer<typeof FormSchema>;

export const CheckoutForm = () => {
  const items = useCartStore((state) => state.items);
  const total = items.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );
  const { mutation: payOrder } = usePayOrder();
  const form = useForm<FormValues>({
    defaultValues: {
      paymentMethod: "flow",
    },
    resolver: zodResolver(FormSchema),
  });
  const handleSubmit = async (data: FormValues) => {

    const response = await payOrder.mutateAsync({
        cart: {
            items,
            total
        },
        payer: {
            email: data.email,
            name: data.name
        },
        payMethod: data.paymentMethod
    });
    window.open(response.url);
  };

  return (
    <>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex-1 py-8 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <CartResume />
          <div>
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="bg-muted p-4 rounded-md">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    {...form.register("name")}
                    id="name"
                    placeholder="John Doe"
                  />

                  {form.formState.errors.name?.message && (
                    <span className="text-destructive text-sm">
                      {form.formState.errors.name?.message}
                    </span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    {...form.register("email")}
                    id="email"
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email?.message && (
                    <span className="text-destructive text-sm">
                      {form.formState.errors.email?.message}
                    </span>
                  )}
                </div>
                {/* <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      placeholder="123 Main St, Anytown USA"
                    />
                  </div> */}
              </div>
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
          <PaymentContainer isLoading={payOrder.isPending} form={form} />
        </div>
      </form>
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
};
