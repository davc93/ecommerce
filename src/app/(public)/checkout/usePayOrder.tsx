import { localApi } from "@/apis";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
interface Item {
  id: string;
}

interface Order {
  items: Item[];
  total?: number;
  payMethod: "mercadopago" | "flow";
}
const createFlowOrder = async (order: { items: Item[]; total: number }) => {
  try {
    const { data } = await localApi.post("/flow/create", order);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};

const createMercadoPagoOrder = async (order: any) => {
  try {
    const { data } = await localApi.post("/mercadopago/create", order);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
  }
};

const methods = {
  mercadopago: createMercadoPagoOrder,
  flow: createFlowOrder,
};

const createOrder = async ({ items, total, payMethod }: Order) => {
  try {
    const response = await methods[payMethod]({
      items,
      total: total ?? 0,
    });
    return response;
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const usePayOrder = () => {
  const toast = useToast();
  const mutation = useMutation({
    mutationFn: createOrder,
    onSuccess: (data) => {
      //   toast.toast({
      //     description:`${data}`
      // })
    },
    onError: (error) => {
      toast.toast({
        description: error.message,
      });
    },
  });
  return { mutation };
};
