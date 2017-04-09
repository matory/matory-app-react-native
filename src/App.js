import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store/index'
import Wrapper from './components/Wrapper'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Wrapper />
      </Provider>
    )
  }
}

export default App
