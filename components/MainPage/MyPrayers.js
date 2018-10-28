import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import InputPrayer from './InputPrayer';

export default class MyPrayers extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}>
        <InputPrayer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});