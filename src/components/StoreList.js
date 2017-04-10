import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { List, ListItem, Thumbnail, Text, Body } from 'native-base';

class StoreList extends Component{
  render () {
    return (
      <List>
          <ListItem>
              <Thumbnail source={require('../images/avatar/avatar-1.png')} />
              <Body>
                  <Text>H&M</Text>
                  <Text note>Floor 1 - Fashion Store</Text>
              </Body>
          </ListItem>
          <ListItem>
              <Thumbnail source={require('../images/avatar/avatar-1.png')} />
              <Body>
                  <Text>Gramedia</Text>
                  <Text note>Floor 1 - Book Store</Text>
              </Body>
          </ListItem>
      </List>
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

export default StoreList
