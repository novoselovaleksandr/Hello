import React from 'react'
import { Image, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { width } from '../../../../constants'

const styles = StyleSheet.create({
  sub: { elevation: 24, backgroundColor: 'white', borderRadius: 10 },
  container: { width: width / 2.4, paddingVertical: 10 },
  h1: {
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    paddingTop: 10
  },
  cover: {
    width: width / 2.4,
    height: width * 0.63,
    borderRadius: 10
  }
})

const ImageCard = ({ data, onPress }) => {
  const { sub, container, h1, cover } = styles
  const { image, name } = data
  const img = `https${image.medium.slice(4)}`

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={container}>
        <View style={sub}>
          <Image style={cover} source={{ uri: img }} />
        </View>
        <Text style={h1}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  )
}

export { ImageCard }
