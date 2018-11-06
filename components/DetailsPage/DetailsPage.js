import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';
import PrayerButton from './PrayerButton';
import SvgIcon from '../Icon';
import { w, h } from '../../constants';

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
      svgBorder,
      detailInfo,
      mainText,
      descriptionText,
      otherText,
      detaiBlock,
    } = styles;

    const { navigation, prayerList } = this.props;
    const prayerId = navigation.getParam('prayerId');
    const prayerItem = prayerList
      .filter(item => item.id === prayerId)[0];
    const totalAmount = prayerItem.amountOtherPrayered + prayerItem.amoutnAuthorPrayered;

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
        <View style={detailInfo}>
          <View style={[detaiBlock, {borderRightWidth: 1, borderBottomWidth: 1}]}>
            <Text style={[mainText, {fontWeight: '100'}]}>
              {moment(prayerItem.date_created).format('MMMM D YYYY')}
            </Text>
            <Text style={descriptionText}>Date Added</Text>
            <Text style={otherText}>
              Opened for {moment(prayerItem.date_created).fromNow(true)}
            </Text>
          </View>
          <View style={[detaiBlock, {borderBottomWidth: 1}]}>
            <Text style={mainText}>{totalAmount}</Text>
            <Text style={descriptionText}>Times Prayed Total</Text>
          </View>
          <View style={[detaiBlock, {borderRightWidth: 1, borderBottomWidth: 1}]}>
            <Text style={mainText}>{prayerItem.amoutnAuthorPrayered}</Text>
            <Text style={descriptionText}>Times Prayed by Me</Text>
          </View>
          <View style={[detaiBlock, {borderBottomWidth: 1}]}>
            <Text style={mainText}>{prayerItem.amountOtherPrayered}</Text>
            <Text style={descriptionText}>Times Prayed by Others</Text>
          </View>
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
  },
  detailInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  mainText: {
    fontSize: 22,
    color: '#BFB393',
    fontWeight: '100'
  },
  descriptionText: {
    fontSize: 13,
    color: '#514D47',
  },
  otherText: {
    fontSize: 13,
    color: '#72A8BC',
  },
  detaiBlock: {
    padding: 15,
    width: w / 2,
    height: 108,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderColor: '#E5E5E5',
  },
});