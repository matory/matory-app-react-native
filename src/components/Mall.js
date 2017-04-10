import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, ActivityIndicator} from 'react-native'
import {Container, Content, Card, CardItem, Body, Button, Icon } from 'native-base'
import {Actions} from 'react-native-router-flux'
import axios from 'axios'

class Mall extends Component {
    constructor() {
        super()
        this.state = {
            malls: []
        }
    }

    componentDidMount() {
        const hostAPI = 'https://udin.us/matory/api/'
        axios.get(hostAPI + '/malls').then((response) => {
          this.setState({
            malls: response.data
          })
        })

    }

    render() {
        return (
            <Container>
                <Content>
                        {this.state.malls.length === 0
                            ? <ActivityIndicator size='large' style={{marginTop: '35%'}} animation={true}/>
                            : this.state.malls.map((item, index) => {
                                return (
                                    <View key={index} style={{
                                        flexDirection: 'row'
                                    }}>
                                        <Card style={{
                                            flex: 0,
                                            width: '100%'
                                        }}>
                                            <CardItem>
                                                <TouchableOpacity style={{
                                                    flex: 0,
                                                    width: '100%'
                                                }} onPress={Actions.Tour}>
                                                    <Body>
                                                        <Image style={{
                                                            height: 200,
                                                            width: '100%'
                                                        }} source={{
                                                            uri: 'https://unsplash.it/400/200?image=1048'
                                                        }}>
                                                        <Text style={{
                                                          marginTop: '25%',
                                                          marginLeft: '25%',
                                                          fontSize: 25,
                                                        }}>{item.name}</Text>
                                                        </Image>
                                                    </Body>
                                                </TouchableOpacity>
                                            </CardItem>
                                            <CardItem style={styles.storeCount}>
                                              <Button transparent>
                                                <Icon active name="md-shirt" />
                                                <Text>12 Fashion</Text>
                                              </Button>
                                              <Button transparent>
                                                <Icon active name="md-wine" />
                                                <Text>4 Food</Text>
                                              </Button>
                                            </CardItem>
                                        </Card>
                                    </View>
                                )
                            })
                          }
                </Content>
            </Container>
        )
    }
}

const styles = {
  storeCount: {
    margin: -15,
  }
}

export default Mall
