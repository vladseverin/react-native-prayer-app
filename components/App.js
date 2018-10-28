import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import MainPage from "./MainPage/MainPage";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    const { container } = styles;
    return (
      <View style={container}> 
        <MainPage />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
