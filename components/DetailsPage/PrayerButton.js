import React, { Component } from 'react'
import { Image, TouchableOpacity, StyleSheet } from 'react-native'

export default class PrayerButton extends Component {
  render() {
    const { prayerIco } = styles;

    const { handlePressOnPrayer } = this.props;
    return (
      <TouchableOpacity
        onPress={handlePressOnPrayer} >
        <Image 
          style={[prayerIco, {tintColor: '#fff'}]}
          fill="red"
          source={require('../../img/prayer.png')}
        />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  prayerIco: {
    width: 28, 
    height: 28, 
    marginRight: 15,
    resizeMode: 'center',
  }
});