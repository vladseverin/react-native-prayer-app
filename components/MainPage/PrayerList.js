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
    // this.props.navigation.navigate('Details');
  }

  render() {
    const { isHidden } = this.state;
    const { container } = styles;
    const { data } = this.props;

    return (
      <ScrollView style={container}>
        {data.length !== 0 && data
          .filter(prayer => !prayer.answered)
          .reverse()
          .map(item => (
            <Prayer 
              key={item.id} 
              prayer={item}
              {...this.props}
            />
          ))
        }

        <ButtonPrayers 
          handleClickBtn={this.handleClickBtn}
          text={
            isHidden 
              ? 'Show Answered Prayers' 
              : 'Hide Answered Prayers'}
        />

        <Fragment>
          {
            !isHidden && data.length !== 0 && data
              .filter(prayer => prayer.answered)
              .reverse()
              .map(item => (
                <Prayer 
                  key={item.id} 
                  answered={item.answered} 
                  prayer={item}
                  {...this.props}
                />
            ))
          }
        </Fragment>
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