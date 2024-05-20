import React, { Component } from 'react'
import Header from './Header'
import Counter from './Counter'


export default class App extends Component {
  render() {
    return (
      <div>
            <Header />
            <Counter/>
      </div>
    )
  }
}
