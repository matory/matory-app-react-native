import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

class Tour extends Component{
  render () {
    return (
      <View style={styles.Header}>
        <Image style={styles.imageHeader} source={{uri:"https://udin.us/matory/images/malls/cover-central-park.jpg"}}>
          <Text style={styles.mallName}>Nama Mall</Text>
        </Image>

      </View>
    )
  }
}

const styles = {
  Header: {
    height: '50%',
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
    marginTop: '25%',
    marginLeft: '15%'
  }
}

export default Tour
