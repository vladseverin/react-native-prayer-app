import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { h, w } from '../../constants';
import Icon from '../Icon';

export default class InputPrayer extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    const { inputText, inputWrapper } = styles;

    return (
      <View style={inputWrapper}>
        <TouchableOpacity 
          onPress={() => alert('GearTouched')} >
          <Icon 
            style={{margin: 13}}
            name="Gear" 
            fill="#72A8BC" 
            height="24" 
            width="24"/>
        </TouchableOpacity>
        <TextInput
          style={inputText}
          onChangeText={(text) => this.setState({text})}
          placeholder="Add a prayer..."/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputWrapper: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E5E5E5',
    width: w / 1.1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputText: {
    width: w / 1.3,
    height: 50,
    color: '#514D47',
    textTransform: 'none',
  }
});