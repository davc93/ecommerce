import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores";
import { ReloadIcon } from "@radix-ui/react-icons";
import { usePayOrder } from "../usePayOrder";
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
type Props = {};

export const PaymentContainer = () => {
  const [paymentMethod, setPaymentMethod] = useState("flow");
  const items = useCartStore((state) => state.items);
  const total = items.reduce(
    (prev, current) => prev + current.price * current.quantity,
    0
  );
  const { mutation: payOrder } = usePayOrder();

  const handlePayClick = async () => {
    const response = await payOrder.mutateAsync({
      items,
      total,
      payMethod: paymentMethod as any,
    });
    // console.log(response);
    window.open(response.url);
  };

  return (
    <div className="mt-4">
      <div className="px-2">
        <Label>Choose payment method</Label>
        <Select
          value={paymentMethod}
          onValueChange={(value) => {
            setPaymentMethod(value);
          }}
        >
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
      </div>

      <Button
        onClick={handlePayClick}
        disabled={payOrder.isPending}
        className="w-full mt-4"
      >
        {payOrder.isPending && (
          <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
        )}
        {payOrder.isPending ? "Cargando" : "Place Order"}
      </Button>
    </div>
  );
};
