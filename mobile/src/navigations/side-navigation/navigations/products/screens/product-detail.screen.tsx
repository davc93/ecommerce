import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { ProductsStackParams } from '../products.navigation'
import { useGetProductById } from '../hooks/use-get-product-by-id'

interface Props extends StackScreenProps<ProductsStackParams,'Details'>{}
export const ProductScreen = (props:Props) => {
const {productId} = props.route.params
const query = useGetProductById(productId)
return (
    <View>
        <Text>ProductScreen</Text>
    </View>
  )
}

