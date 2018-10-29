import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, CheckBox } from 'react-native'
import Prayer from './Prayer';

export default class PrayerList extends Component { 
  render() {
    const { container } = styles;

    return (
      <ScrollView style={container}>
        <Prayer />
        <Prayer />
        <Prayer answered={true}/>
        <Prayer answered={true}/>
        <Prayer answered={true}/>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
});