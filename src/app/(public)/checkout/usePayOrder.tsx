import { localApi } from "@/apis";
import { useToast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const createOrder = async () => {
  try {
    const { data } = await localApi.post("/payments/create");
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
        
    },
    onError: (error) => {
        toast.toast({
            description:error.message
        })
    },
  });
};
