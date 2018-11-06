import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
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
      user,
      users,
      avatar,
      titleText,
      addMembersBlock,
      messageBlock,
      userNameBlock,
      userNameStyle,
      userMessageStyle,
      sendTimeMessage,
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
        <ScrollView style={{marginBottom: 20}}>
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
          <View style={addMembersBlock}>
            <Text style={titleText}>MEMBERS</Text>
            <View style={users}>
            {
              prayerItem.members.map((item, id) => (
                <View style={user} key={id}>
                  <Image 
                    style={avatar}
                    source={{uri: item.img}}
                  />
                  <Text>{item.name}</Text>
                </View>
              ))
            }
              <TouchableOpacity onPress={() => alert('click')}>
                <Image 
                  style={{width: 38, height: 36, resizeMode: 'center'}} 
                  source={require('../../img/add.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={[titleText, {paddingLeft: 15}]}>COMMENTS</Text>
            {
              prayerItem.comments.map((item, id) => (
                <View style={messageBlock} key={id}>
                  <Image 
                    source={{ uri: item.img}}
                    style={[avatar, {width: 46, height: 46}]}
                  />
                  <View style={userNameBlock}>
                    <Text style={userNameStyle}>{item.name}</Text>
                    <Text style={userMessageStyle}>{item.text}</Text>
                  </View>
                  <Text style={sendTimeMessage}>{moment(item.datePublished).fromNow()}</Text>
                </View>
              ))
            }
          </View>

        </ScrollView>
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
  user: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 13,
  },
  users: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  avatar: {
    width: 38, 
    height: 36,
    borderRadius: 50
  },
  titleText: {
    color: '#72A8BC',
    marginBottom: 13,
  },
  addMembersBlock: {
    padding: 15,
  },
  messageBlock: {
    width: w,
    minHeight: 74,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
  userNameBlock: {
    marginLeft: 9, 
    marginRight: 9
  },
  userNameStyle: {
    fontSize: 17, 
    color: '#514d47', 
    fontFamily: 'SF UI Text', 
    fontWeight: 'bold'
  },
  userMessageStyle: {
    fontSize: 17, 
    color: '#514D47', 
    fontFamily: 'SF UI Text', 
    fontWeight: '300'
  },
  sendTimeMessage: {
    alignSelf: 'flex-start', 
    color: '#9C9C9C', 
    fontSize: 13,
    marginLeft: 'auto',
  }
});