import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Content, List, ListItem, Thumbnail, Text, Body, InputGroup, Input, Icon, Tabs, Tab } from 'native-base';
import axios from 'axios'

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
    axios.get(hostAPI + '/mall/1/all-store').then((response) => {
      console.log('dapat toko apa aja ', response.data);
      this.setState({
        stores: response.data
      })
    })
  }
  render () {
    return (
      <Container style={{marginTop: '15%'}}>
        <Content>
          <InputGroup>
                <Input placeholder='Search store'/>
                <Icon name='search'/>
          </InputGroup>
          <Tabs>
                <Tab heading="LG">
                    <StoreList/>
                </Tab>
                <Tab heading="L1">
                  <StoreList/>
                </Tab>
                <Tab heading="G">
                    <StoreList/>
                </Tab>
                <Tab heading="1">
                    <StoreList/>
                </Tab>
                <Tab heading="2">
                    <StoreList/>
                </Tab>
                <Tab heading="3">
                    <Text>Lalalala</Text>
                    <StoreList/>
                </Tab>
                <Tab heading="4">
                    <Text>Lalalala</Text>
                    <StoreList/>
                </Tab>
            </Tabs>
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
