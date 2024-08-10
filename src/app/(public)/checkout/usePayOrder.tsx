import { localApi } from "@/apis";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
interface Order {

}

const createOrder = async (order:Order) => {
  try {
    const { data } = await localApi.post("/flow/create",order);
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);
    }
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
            description:error.message
        })
    },
  });
  return {mutation}
};
