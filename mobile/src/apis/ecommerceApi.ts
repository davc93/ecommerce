import {API_URL} from '@env'
import axios from 'axios'

export const EcommerceApi = axios.create({
    baseURL:API_URL
})
