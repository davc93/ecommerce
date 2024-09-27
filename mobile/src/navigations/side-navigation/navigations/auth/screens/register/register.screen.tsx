import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'


const handleUploadDocument = async () => {
  const response = await launchCamera({
    mediaType:'photo',
    quality:0.7,
    cameraType:'back'
  })
  if (response.assets) {
    return [response.assets[0].uri]
  }

}

const getPicturesFromLibrary = async () => {
  const response = await launchImageLibrary({
    mediaType:'photo',
    quality:0.7,
    selectionLimit:10
  })
  if (response.assets) {
    const images = response.assets.map(asset => asset.uri!)
  }
}

export const RegisterScreen = () => {
return (
    <View>
        <Text>RegisterScreen</Text>
        <Pressable onPress={handleUploadDocument}>upload document</Pressable>
    </View>
  )
}

