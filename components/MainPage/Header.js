import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Icon from '../Icon';

export default class Header extends Component {
  render() {
    const { 
      tileBlock, 
      textStyle, 
      gearWrap 
    } = styles;

    return (
      <SafeAreaView>
        <View style={tileBlock}>
          <Text style={textStyle}>My Prayersr</Text>
          <TouchableOpacity 
            onPress={() => alert('GearTouched')} 
            style={gearWrap}>
            <Icon 
              style={{marginRight: 8}}
              name="Gear" 
              fill="#72A8BC" 
              height="24" 
              width="24"/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  tileBlock: {
    backgroundColor: '#fff',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  gearWrap: {
    position: 'absolute',
    right: 0,
    margin: 5,
  },
  textStyle: {
    marginTop: 22,
    marginBottom: 22,
    fontSize: 17,
    color: '#514D47',
    fontFamily: 'Roboto',
  }
});

