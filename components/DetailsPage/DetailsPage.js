import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import PrayerButton from './PrayerButton';

export default class DetailsPage extends Component {
  static navigationOptions = {
    headerStyle: {        
      backgroundColor: "#BFB393",   
    },
    headerRight: (
      <PrayerButton />
    ),
    headerTintColor: '#fff',
  }

  render() {
    const { container } = styles;

    return (
      <View style={container}>
        <Text> From Details Page </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});