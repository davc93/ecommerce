import type { NextRequest } from "next/server";
import { config } from "../config";
import axios, { AxiosError } from "axios";
export async function POST(req: NextRequest) {
  const body: { items: unknown[] } = await req.json();
  const data = {
    items: body.items.map((item:any)=>({...item,unit_price:item.price})),
  };
  try {
    const response = await axios.post(
      `${config.apiUrl}/checkout/preferences`,
      data,
      {
        headers: {
          Authorization: `Bearer ${config.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
    return Response.json(
      {
        url: `${response.data.sandbox_init_point}`,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof AxiosError) {
        
        console.log(error.message);
    }

    return Response.json({ mesage: "Hubo un error" }, { status: 400 });
  }
}
