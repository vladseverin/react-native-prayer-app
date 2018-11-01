import React, { Component } from 'react'
import { StyleSheet, CheckBox, Image, TouchableOpacity, Text, Alert } from 'react-native'
import { SwipeRow, View, Button } from 'native-base';
import SvgIcon from '../Icon';
import { w } from '../../constants';

export default class Prayer extends Component {
  constructor(props) {
    super(props),
    this.state = { check: false }
  }

  handlePressDeleteBtn = (id) => {
    const { deletePrayer } = this.props;
    Alert.alert('Confirm please', 'Are you sure you want to delete this prayer item?',
    [
      {text: 'YES', onPress: () => deletePrayer(id)},
      {text: 'NO', onPress: () => null, style: 'cancel'},
    ]);    
  }

  handlePressPrayerBtn = (id) => {
    const { counterPrayer } = this.props;
    counterPrayer(id);
  }

  handleChangeAnswered = (id) => {
    const { addAnsweredPrayer } = this.props;
    const { check } = this.state;

    this.setState({check: !check});
    addAnsweredPrayer(id);
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

    const { 
      answered, 
      prayer,
    } = this.props;

    const { check } = this.state;
    const totalAmount = prayer.amountOtherPrayered + prayer.amoutnAuthorPrayered;
    const textPrayer = prayer.prayer.length > 18
      ? `${prayer.prayer.slice(0, 18)}...`
      : prayer.prayer;

    return (
      <SwipeRow 
        rightOpenValue={-80}
        style={swipeContainer}
        body={
          <TouchableOpacity 
            onPress={() => (
              this.props.navigation.navigate('Details', {
                prayerId: prayer.id,
                handlePressPrayerBtn: () => this.handlePressPrayerBtn(prayer.id),
              }
            ))}
          >
            <View style={answered ? answeredContainer : container}> 
              <SvgIcon 
                name="Border" 
                fill="#AC5253" 
                width="3" 
                height="23"/>
              <CheckBox 
                value={answered ? true : check}
                disabled={answered ? true : false}
                onChange={() => this.handleChangeAnswered(prayer.id)}
                style={{marginRight: 13, marginLeft: 13,}}/>
              <Text style={answered ? answeredText : text}>
                {textPrayer} 
              </Text>
              {prayer.members.length !== 0 
                && (
                  <View style={amountWrapper}>
                    <Image 
                      style={{width: 24, height: 24, resizeMode: 'center'}}
                      source={require('../../img/user.png')}
                    />
                    <Text style={amount}>
                      {prayer.members.length}
                    </Text>
                  </View>
                )
              }
              <View style={amountWrapper}>
                {
                  answered
                    ? <Image 
                        style={{width: 28, height: 28, resizeMode: 'center'}}
                        source={require('../../img/prayer.png')}
                      />
                    : <TouchableOpacity
                        onPress={() => this.handlePressPrayerBtn(prayer.id)} >
                        <Image 
                          style={{width: 28, height: 28, resizeMode: 'center'}}
                          source={require('../../img/prayer.png')}
                        />
                      </TouchableOpacity>
                }
                <Text style={amount}>
                  {totalAmount}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        }
        right={
          <Button danger onPress={() => this.handlePressDeleteBtn(prayer.id)}>
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

