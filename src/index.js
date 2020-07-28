import React, { Component } from 'react'
import { Header } from './components/uikit'

export default class App extends Component {
  state = {
    title: 'STAR GATE8'
  }

  render() {
    return (
      <>
        <Header title={'this.state.title'} />
      </>
    )
  }
}
