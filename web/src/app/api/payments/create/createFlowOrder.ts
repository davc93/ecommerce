import axios, { AxiosError } from "axios";
import { config } from "../config";
import crypto from 'crypto'
import querystring from 'querystring'

type Params = {
  email: string;
  subject: string;
  amount: number;
};

export const createFlowOrder = async ({ email, subject, amount }: Params) => {
  const params:any = {
    apiKey: config.flow.apiKey,
    commerceOrder: crypto.randomUUID(),
    urlConfirmation: "https://mydomain.com/confirmation",
    urlReturn: "https://mydomain.com/payment-status",
    email,
    subject,
    amount,
  };

  const secretKey = config.flow.secretKey as string
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
  
  const encodedBody = querystring.stringify(body)
  try {
    const response = await axios.post(`${config.flow.apiUrl}/payment/create`,encodedBody)
    return `${response.data.url}?token=${response.data.token}`
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data) {
        throw new Error(error.response?.data.message)
        
      }
      throw new Error(error.message)
    }
    throw new Error('Error al crear orden con flow')
    
  }
};
