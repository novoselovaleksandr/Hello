import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { width } from '../../../../constants'

const styles = StyleSheet.create({
  sub: { elevation: 24, backgroundColor: 'white', borderRadius: 10 },
  container: { paddingVertical: 10 },
  cover: {
    width: width / 1.67,
    height: width * 0.9,
    borderRadius: 10
  }
})

const ImageBigCard = ({ data }) => {
  const { sub, container, cover } = styles
  const { image } = data
  const img = `https${image.medium.slice(4)}`

  return (
    <View style={container}>
      <View style={sub}>
        <Image style={cover} source={{ uri: img }} />
      </View>
    </View>
  )
}

export { ImageBigCard }
