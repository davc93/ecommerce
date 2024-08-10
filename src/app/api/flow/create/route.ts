import type { NextRequest } from "next/server";
import { config } from "../config";
import crypto from 'node:crypto'
import querystring from 'node:querystring'
import type { CartItem } from "@/stores/cart.store";
import axios from "axios";
export async function POST(req: NextRequest) {
  const order:{items:CartItem[],total:number} = await req.json()
  const params:any = {
    apiKey:config.apiKey,
    commerceOrder:crypto.randomUUID(),
    urlConfirmation:'https://mydomain.com/confirmation',
    urlReturn:'https://mydomain.com/payment-status',
    email:'juanperez123@gmail.com',
    subject:'Compra de articulos',
    amount: order.total
  } 

  const secretKey = config.secretKey as string
  const keys = Object.keys(params)
  keys.sort()

  let toSign = ''
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i]
    toSign += key + params[key]

  }
  const signature = crypto.createHmac('sha256',secretKey).update(toSign).digest('hex')
  const body = {
    ...params,
    s:signature
  }
  console.log(body);
  
  const encodedBody = querystring.stringify(body)
  try {
    const response = await axios.post(`${config.apiUrl}/payment/create`,encodedBody)
    return Response.json({
      url: `${response.data.url}?token=${response.data.token}`
    }, { status: 200 });
  } catch (error) {
    console.log(error);
    
    return Response.json({mesage:'Hubo un error'}, { status: 400 });
    
  }
}
