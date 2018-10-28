import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Subscribed = () => {
  const { container } = styles;
  return (
    <View style={container}>
      <Text> SubscribedList </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  }
});

export default Subscribed;