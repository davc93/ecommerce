import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores";
import { ReloadIcon } from "@radix-ui/react-icons";
import { usePayOrder } from "./usePayOrder";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Controller, type UseFormReturn } from "react-hook-form";
import type { FormValues } from "./checkout-form";
type Props = {
  form: UseFormReturn<FormValues, any, undefined>;
  isLoading:boolean
};

export const PaymentContainer = ({ form,isLoading }: Props) => {
  const [paymentMethod, setPaymentMethod] = useState("flow");
  const items = useCartStore((state) => state.items);
  const total = items.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );

  // const handlePayClick = async () => {
  //   const response = await payOrder.mutateAsync({
  //     items,
  //     total,
  //     payMethod: paymentMethod as any,
  //   });
  //   // console.log(response);
  //   window.open(response.url);
  // };

  return (
    <div className="mt-4">
      <div className="px-2">
        <Label>Choose payment method</Label>
        <Controller
        control={form.control}
          name="paymentMethod"
          render={({field}) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecciona un medio de pago" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Payments methods</SelectLabel>
                  <SelectItem value="flow">Flow</SelectItem>
                  <SelectItem value="mercadopago">Mercado pago</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full mt-4"
      >
        {isLoading && (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        )}
        {isLoading ? "Cargando" : "Place Order"}
      </Button>
    </div>
  );
};
