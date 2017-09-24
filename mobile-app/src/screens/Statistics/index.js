import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native'
import Titlebar from './../Titlebar'
import Piee from './Piee'
import Raadar from './Raadar'
export default class Statistics extends Component {
   render() {
    return (
      <View style = {styles.container}>
        <Titlebar/>
        
        <Piee style={{flex:1, marginTop:70}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:70,
  }
});
