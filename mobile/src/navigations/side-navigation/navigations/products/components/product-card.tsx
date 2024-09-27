import { NavigationProp, useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { ProductsStackParams } from '../products.navigation'

export const ProductCard = () => {
  
  const navigation = useNavigation<NavigationProp<ProductsStackParams>>()
  const handleCardPress = () => {
    navigation.navigate('Details',{
      productId:'233'
    })
  }
return (
    <Pressable onPress={handleCardPress} >
        <Text>ProductCard</Text>
    </Pressable>
  )
}

