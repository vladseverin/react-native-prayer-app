import React, { Component } from 'react';
import { View, Text } from "react-native";
import Header from "./Header";
import TabNavigation from './TabNavigation';

export default class MainPage extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <TabNavigation />
      </View>
    );
  }
}
