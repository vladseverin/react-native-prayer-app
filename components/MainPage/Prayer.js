import React, { Component } from 'react'
import { StyleSheet, CheckBox, Image, TouchableOpacity, Text } from 'react-native'
import { SwipeRow, View, Button } from 'native-base';
import SvgIcon from '../Icon';
import { w } from '../../constants';

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
      swipeContainer,
      answeredContainer,
    } = styles;
    const { check } = this.state;
    const { answered, prayer } = this.props;
    const totalAmount = prayer.amountOtherPrayered + prayer.amoutnAuthoPrayered;

    return (
      <SwipeRow 
        rightOpenValue={-80}
        style={swipeContainer}
        body={
          <View style={answered ? answeredContainer : container}> 
            <SvgIcon 
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
              {prayer.prayer} 
            </Text>
            <View style={amountWrapper}>
              <Image 
                style={{width: 24, height: 24, resizeMode: 'center'}}
                source={require('../../img/user.png')}
              />
              <Text style={amount}>
                {prayer.members.length}
              </Text>
            </View>
            <View style={amountWrapper}>
              <TouchableOpacity
                onPress={() => alert('TouchPrayer')} >
                <Image 
                  style={{width: 28, height: 28, resizeMode: 'center'}}
                  source={require('../../img/prayer.png')}
                />
              </TouchableOpacity>
              <Text style={amount}>
                {totalAmount}
              </Text>
            </View>
          </View>
        }
        right={
          <Button danger onPress={() => alert('Trash')}>
            <Text style={{color: '#fff',fontSize: 13,}}>Delete</Text>
          </Button>
        }
      />
    )
  }
}

const styles = StyleSheet.create({
  swipeContainer: {
    alignSelf: 'stretch', 
    borderBottomWidth: 0, 
    paddingRight: 0, 
    paddingBottom: 0, 
    paddingTop: 0,
  },
  container: {
    width: w / 1.1, 
    flexDirection: 'row',
    height: 66,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  answeredContainer: {
    width: w / 1.1, 
    flexDirection: 'row',
    height: 66,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
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

