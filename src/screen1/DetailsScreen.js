import React, { PureComponent } from 'react'
import { ScrollView, StyleSheet, View, Text } from 'react-native'
import { Header, ImageBigCard } from '../components/uikit'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  sub: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: '#fff'
  },
  h1: {
    fontFamily: 'AvenirNext-Demibold',
    fontSize: 30,
    padding: 15,
    textAlign: 'center'
  },
  h2: {
    fontFamily: 'AvenirNext-Demibold',
    fontSize: 15,
    padding: 15,
    color: 'grey',
    paddingHorizontal: 15,
    textAlign: 'center'
  }
})

class DetailsScreen extends PureComponent {
  render() {
    console.log('this.props', this.props)
    const { image, name, summary } = this.props.navigation.state.params
    const { navigation } = this.props
    const data = { image }
    const { container, h1, h2, sub } = styles

    return (
      <View style={container}>
        <Header
          detail
          title={name}
          onPress={() => navigation.goBack()}
          leftIcon={'ios-arrow-back'}
          leftColor={'#fff'}
        ></Header>
        <ScrollView>
          <View style={sub}>
            <ImageBigCard data={data}></ImageBigCard>
            <Text style={h1}>{name.toUpperCase()}</Text>
            <Text style={h2}>{summary.replace(/<[^>]+>/g, '')}</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
export default DetailsScreen
