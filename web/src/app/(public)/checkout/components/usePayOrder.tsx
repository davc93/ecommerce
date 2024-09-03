import { localApi } from "@/apis";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
interface Item {
  id: string;
  name:string;
  price:number;
  quantity:number
}

export interface Order {
  cart: {
    items: Item[];
    total?: number;
  };
  payer:{
    email:string,
    name:string
  },
  payMethod: "mercadopago" | "flow";
}


const createOrder = async (order: Order) => {
  try {
    const response = await localApi.post<{url:string}>('/payments/create',order);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data) {
        
        throw new Error(error.response.data.message)
        
      }
      throw new Error(error.message)
    }
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
