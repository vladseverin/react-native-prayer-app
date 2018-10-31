import React from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import MyPrayers from '../containers/MyPrayers';
import Subscribed from './MainPage/Subscribed';
import DetailsPage from './DetailsPage/DetailsPage';
import Header from './MainPage/Header'

const Tabs = createMaterialTopTabNavigator(
  {
    'MY PRAYERS': {screen: MyPrayers},
    'SUBSCRIBED': {screen: Subscribed}
  },
  { 
    tabBarOptions: {
      activeTintColor: '#72A8BC',
      inactiveTintColor: '#C8C8C8',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: '#fff',
      },
      indicatorStyle: {
        backgroundColor: '#72A8BC',
      },
    },
    swipeEnabled: false,
  }
);

export default createStackNavigator(
  {
    Home: { 
      screen: Tabs,
      navigationOptions: { 
        header: props => <Header {...props} />,
        headerStyle: {        
          backgroundColor: "transparent"      
        },
        animationEnabled: true,
      } 
    },
    Details: { screen: DetailsPage },
  }, 
  {
    initialRouteName: 'Home',
  }
);