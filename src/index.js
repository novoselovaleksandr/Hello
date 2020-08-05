import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import One from './screen1'
import Two from './screen2'
import Three from './screen3'

export default createBottomTabNavigator({
  Stargate: One,
  Batman: Two,
  Spideman: Three
})
