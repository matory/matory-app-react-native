import React, { Component } from 'react'
import { View, Image } from 'react-native'
import { Container, Content, List, ListItem, Thumbnail, Text, Body, InputGroup, Input, Icon } from 'native-base';

class Tour extends Component{
  render () {
    return (
      <Container style={{marginTop: '15%'}}>
        <Content>
          <InputGroup>
                        <Input placeholder='Search store'/>
                        <Icon name='search' style={{color:'#00C497'}}/>
                    </InputGroup>
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
