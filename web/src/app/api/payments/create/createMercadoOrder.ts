import axios, { AxiosError } from "axios";
import { config } from "../config";

type Params = {
  items: Item[];
};
interface Item {
  id: string;
  name: string;
  unit_price: number;
  quantity: number;
}

export const createMercadopagoOrder = async ({ items }: Params) => {
  try {
    const response = await axios.post(
      `${config.mercadoPago.apiUrl}/checkout/preferences`,
      {items},
      {
        headers: {
          Authorization: `Bearer ${config.mercadoPago.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return `${response.data.sandbox_init_point}`;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error);
      
      throw new Error(error.message);
    }
  }
};
