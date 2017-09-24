import React, {Component} from 'react';
import {Button, View, StyleSheet, Text} from 'react-native'
import Titlebar from './../Titlebar'
import Content from './Content'

export default class Connect extends Component {
   render() {
    return (
      <View style = {styles.container}>
        <Titlebar/>
        <Content/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 70, 
      backgroundColor: '#FAFAFA',
      justifyContent: 'flex-start',
  }
})
