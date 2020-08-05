import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Header, ImageCard, Layout } from '../../components'

const url = 'http://api.tvmaze.com/search/shows?q=stargate'

class Tab0Main extends Component {
  state = {
    title: 'STAR GATE',
    data: []
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data })
    } catch (error) {
      throw error
    }
  }

  render() {
    const { title, data } = this.state
    const { navigation } = this.props
    return (
      <View>
        <Header title={title} />
        <ScrollView>
          <Layout>
            {data.map((item) => (
              <ImageCard
                data={item.show}
                key={item.show.id}
                onPress={() => navigation.navigate('TAB0_DETAILS', item.show)}
              />
            ))}
          </Layout>
        </ScrollView>
      </View>
    )
  }
}

export { Tab0Main }
