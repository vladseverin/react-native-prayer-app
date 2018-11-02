import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';
import PrayerButton from './PrayerButton';
import SvgIcon from '../Icon';

export default class DetailsPage extends Component {
  constructor(props){
    super(props);
    const prayerId = props.navigation.getParam('prayerId');
    this.props.navigation.setParams({
      counterPrayer: () => this.props.counterPrayer(prayerId),
    }); 
  }

  static navigationOptions = (props) => {
    const { params } = props.navigation.state;

    return {
      headerStyle: {        
        backgroundColor: "#BFB393",
        elevation: 0   
      },
      headerRight: (
        <PrayerButton handlePressOnPrayer={params.counterPrayer} {...params}/>
      ),
      headerTintColor: '#fff',
      style: { elevation: 0 },
    }
  }

  render() {
    const { 
      container, 
      header,
      textHeader,
      lastPrayer,
      lastPrayerText,
      svgBorder
    } = styles;

    const { navigation, prayerList } = this.props;
    const prayerId = navigation.getParam('prayerId');
    const prayerItem = prayerList
      .filter(item => item.id === prayerId)[0];

    return (
      <View style={container}>
        <View style={header}>
          <Text style={textHeader}>{prayerItem.prayer}</Text>
        </View>
        <View style={lastPrayer}>
          <SvgIcon 
            style={svgBorder}
            name="Border" 
            fill="#AC5253" 
            width="3" 
            height="23"/>
          <Text style={lastPrayerText}>
            {
              prayerItem.lastPrayer 
                ? `Last prayed ${moment(prayerItem.lastPrayer).fromNow()}` 
                : 'Not have a prayers'
            }
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#BFB393',
    alignSelf: 'stretch',
    minHeight: 50, 
    justifyContent: 'center',
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  textHeader: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 23,
    fontSize: 17,
    color: '#fff',
    alignSelf: "stretch",
  },
  lastPrayer: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lastPrayerText: {
    fontSize: 17,
  },
  svgBorder: {
    margin: 15,
  }
});