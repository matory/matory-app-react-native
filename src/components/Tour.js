import React, { Component } from 'react'
import { View, Image, ActivityIndicator } from 'react-native'
import { Container, Content, List, ListItem, Thumbnail, Text, Body, InputGroup, Input, Icon, Tabs, Tab } from 'native-base';
import axios from 'axios'
import _ from 'lodash'

import StoreList from './StoreList'

class Tour extends Component{
  constructor(props){
    super(props)
    this.state = {
      stores: []
    }
  }

  componentDidMount(){
    const hostAPI = 'https://udin.us/matory/api/'
    let self = this
    axios.get(hostAPI + '/mall/1/all-store').then((response) => {
      console.log('dapat toko apa aja ', response.data);
      self.setState({
        stores: response.data
      })
    }).catch((err) => {
      console.log('error when trying to get all data store : ', err);
    })
  }

  listFloor(){
    let floorName = _.uniqBy(this.state.stores, 'floor_name');
    console.log('floorName : ', floorName);
    return (
      <Tabs>
      {
        floorName.map((store, index) => {
        return (
          <Tab key={index} heading={store.floor_name}>
            <StoreList/>
          </Tab>
        )
      })
      }
      </Tabs>
    )
  }

  render () {
    return (
      <Container style={{marginTop: '15%'}}>
        <Content>
          <InputGroup>
                <Input placeholder='Search store'/>
                <Icon name='search'/>
          </InputGroup>
          {
            this.state.stores.length == 0
            ? <ActivityIndicator size='large' style={{marginTop: '35%'}} animation={true}/>
            : this.listFloor()
          }

        </Content>
    </Container>
    )
  }
}

const styles = {
  Header: {
    height: '20%',
    width: '100%',
  },
  imageHeader: {
    height: '100%',
    width:'100%',
    resizeMode:'cover',
  },
  mallName: {
    fontSize: 30,
    color: '#ffffff',
    marginTop: '15%',
    marginLeft: '6%'
  }
}

export default Tour
