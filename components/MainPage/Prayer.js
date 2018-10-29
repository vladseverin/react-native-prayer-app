import React, { Component } from 'react'
import { Text, View, StyleSheet, CheckBox, Image, TouchableOpacity } from 'react-native'
import Icon from '../Icon';

export default class Prayer extends Component {
  constructor(props) {
    super(props),
    this.state = { check: false }
  }

  render() {
    const {
      container,
      text,
      amount,
      amountWrapper,
      answeredText,
    } = styles;
    const { check } = this.state;
    const { answered } = this.props;

    return (
      <View style={container} > 
        <Icon 
          name="Border" 
          fill="#AC5253" 
          width="3" 
          height="23"/>
        <CheckBox 
          value={answered ? true : check}
          disabled={answered ? true : false}
          onChange={() => this.setState({check: !check})}
          style={{marginRight: 13, marginLeft: 13,}}/>
        <Text style={answered ? answeredText : text}>
          ViewInComponent 
        </Text>
        <View style={amountWrapper}>
          <Image 
            style={{width: 24, height: 24, resizeMode: 'center'}}
            source={require('../../img/user.png')}
          />
          <Text style={amount}>2</Text>
        </View>
        <View style={amountWrapper}>
          <TouchableOpacity
            onPress={() => alert('TouchPrayer')} >
            <Image 
              style={{width: 28, height: 28, resizeMode: 'center'}}
              source={require('../../img/prayer.png')}
            />
          </TouchableOpacity>
          <Text style={amount}>254</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 66,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 17,
    marginRight: 'auto',
  },
  answeredText : {
    fontSize: 17,
    marginRight: 'auto',
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  },
  amount: {
    fontSize: 12,
    color: '#514D47',
    padding: 5,
  },
  amountWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
    justifyContent: 'flex-end',
  }
});