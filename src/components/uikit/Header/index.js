import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { width } from '../../../../constants'

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    backgroundColor: '#30d0fe',
    height: 116,
    //justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    color: '#fff',
    fontSize: 28,
    fontFamily: 'AvenirNext-DemiBold',
    paddingTop: 50,
    width: width - 40
  },
  leftButtonStyle: {
    ...ifIphoneX(
      {
        paddingTop: 75
      },
      {
        paddingTop: 50
      }
    ),
    fontSize: 35
  }
})

const Header = ({ title, detail, onPress, leftIcon, leftColor }) => {
  const { viewStyle, textStyle, leftButtonStyle } = styles
  return (
    <View style={viewStyle}>
      <TouchableOpacity onPress={onPress}>
        <Ionicons
          name={leftIcon}
          style={[leftButtonStyle, { paddingLeft: detail ? 5 : 20 }]}
          color={leftColor}
        ></Ionicons>
      </TouchableOpacity>
      <Text numberOfLines={1} ellipsizeMode="tail" style={[textStyle, { paddingLeft: leftIcon ? 5 : 0 }]}>
        {title}
      </Text>
    </View>
  )
}

export { Header }
