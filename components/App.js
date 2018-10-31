import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import NavigationStack from './NavigationStack';

export default class App extends Component {
  render() {
    const { container } = styles;
    return (
      <Provider store={store}>
        <View style={container}> 
          <NavigationStack {...this.props}/>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
