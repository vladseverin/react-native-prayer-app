import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import MainPage from "./MainPage/MainPage";

export default class App extends Component {
  render() {
    const { container } = styles;
    return (
      <Provider store={store}>
        <View style={container}> 
          <MainPage />
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
