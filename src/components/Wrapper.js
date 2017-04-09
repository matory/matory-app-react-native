import React, { Component } from 'react'
import {Scene, Router} from 'react-native-router-flux'

import Itenerary from './Itenerary'
import Home from './Home'
import Tour from './Tour'

const Wrapper = (props) => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Home" component={Home} initial={true} hideNavBar={true} />
        <Scene key="Tour" component={Tour} title="Tour" hideNavBar={true} />
        <Scene key="Itenerary" component={Itenerary} title="Itenerary"/>
      </Scene>
    </Router>
  )
}

export default Wrapper
