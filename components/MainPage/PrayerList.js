import React, { Component, Fragment } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Prayer from './Prayer';
import ButtonPrayers from './ButtonPrayrs';

export default class PrayerList extends Component { 
  constructor(props) {
    super(props);
    this.state = { isHidden: true}
  }

  handleClickBtn = () => {
    const { isHidden } = this.state;
    this.setState({ isHidden: !isHidden });
  }

  render() {
    const { isHidden } = this.state;
    const { container } = styles;

    return (
      <ScrollView style={container}>
        <Prayer />
        <Prayer />
        <Prayer />
        <Prayer />
        <Prayer />
        <ButtonPrayers 
          handleClickBtn={this.handleClickBtn}
          text={
            isHidden 
              ? 'Show Answered Prayers' 
              : 'Hide Answered Prayers'}
        />
        {
          !isHidden && (
            <Fragment>
              <Prayer answered={true}/>
              <Prayer answered={true}/>
              <Prayer answered={true}/>
              <Prayer answered={true}/>
              <Prayer answered={true}/>
            </Fragment>
          )
        }
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginBottom: 20,
  },
});