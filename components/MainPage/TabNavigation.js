import { createMaterialTopTabNavigator } from 'react-navigation';
import MyPrayers from '../../containers/MyPrayers';
import Subscribed from './Subscribed';

export default createMaterialTopTabNavigator(
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