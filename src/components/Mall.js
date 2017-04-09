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
        console.log('this running ?');
        const hostAPI = 'https://udin.us/matory/api/'
        axios.get(hostAPI + '/malls').then((response) => {
          console.log('isi response : ', response);
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
                            ? <ActivityIndicator animation={true}/>
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
                                            <Button transparent>
                                                <Icon active name="thumbs-up" />
                                                <Text>12 Likes</Text>
                                            </Button>
                                            <Button transparent>
                                                <Icon active name="chatbubbles" />
                                                <Text>4 Comments</Text>
                                            </Button>
                                            <Text>11h ago</Text>
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

export default Mall
