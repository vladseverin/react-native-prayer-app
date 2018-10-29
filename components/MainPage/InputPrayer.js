import React, { Component } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { h, w } from '../../constants';
import Icon from '../Icon';

export default class InputPrayer extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onDoneKeyPress = () => {
    const { text } = this.state;
    const { handleAddPrayer } = this.props;

    if(text) {
      handleAddPrayer(text);
      this.setState({text: ''});
    }  
  }

  render() {
    const { inputText, inputWrapper } = styles;
    const { text } = this.state;

    return (
      <View style={inputWrapper}>
        <TouchableOpacity 
          onPress={this.onDoneKeyPress} >
          <Image 
            source={require('../../img/Rectangle.png')}
            style={{margin: 13, height: 24, width: 24,}}
          />
        </TouchableOpacity>
        <TextInput
          style={inputText}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.onDoneKeyPress}
          value={text}
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
    marginBottom: 13,
  },
  inputText: {
    width: w / 1.3,
    height: 50,
    color: '#514D47',
    textTransform: 'none',
  }
});