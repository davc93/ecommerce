import type { NextRequest } from "next/server";
import { wait } from "@/helpers";
import type { Order } from "@/app/(public)/checkout/components/usePayOrder";
import { createFlowOrder } from "./createFlowOrder";
import { createMercadopagoOrder } from "./createMercadoOrder";
export async function POST(req: NextRequest) {
  const order: Order = await req.json();

  try {
    console.log(order);
    
    let url;
    switch (order.payMethod) {
      case "flow":
        url = await createFlowOrder({
          email: order.payer.email,
          subject: "Orden random",
          amount: order.cart.total ?? 0,
        });
        break;
      case "mercadopago":
        url = await createMercadopagoOrder({
          items: order.cart.items.map((item) => ({
            ...item,
            unit_price: item.price,
          })),
        });
        break;
      default:
        throw new Error("Debe escoger un metodo de pago");
    }
    
    // const response = await axios.post(`${config.apiUrl}/payment/create`,encodedBody)
    return Response.json({ url }, { status: 200 });
  } catch (error:any) {
    console.log(error);

    return Response.json({ message: error.message }, { status: 400 });
  }
}
