import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import InputPrayer from './InputPrayer';
import PrayerList from './PrayerList';

export default class MyPrayers extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <InputPrayer />
        <PrayerList />  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {  
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 13,
    marginBottom: 13,
  }
});