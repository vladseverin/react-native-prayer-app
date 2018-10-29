import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { w } from '../../constants';

export default class ButtonPrayrs extends Component {
  render() {
    const { container, button, textStyle } = styles;
    const { text, handleClickBtn } = this.props;

    return (
      <View style={container}>
        <TouchableOpacity
          onPress={handleClickBtn}
          style={button}>
          <Text style={textStyle}>{text.toUpperCase()}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: w / 1.1, 
    flexDirection: 'row',
    height: 72,
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#BFB393',
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 17,
    paddingLeft: 17,
    borderRadius: 15,
  },
  textStyle: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  }
});