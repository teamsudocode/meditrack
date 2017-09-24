import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';

export default class Content extends Component {
  _handleButtonPress = () => {
    Alert.alert(
      'Connecting...',
      'Please Wait for sometime'
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
        Allow any nearby shops to discover and connect to your mobile to send data and request. Once connected, the shop owner can add list of medicines to your application.
        </Text>
        <Button
          color="#0098FF"
          title="Accept Connections"
          onPress={this._handleButtonPress}

        />
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 14,
    fontSize: 16,
    textAlign: 'left',
    color: '#34495e',
    padding: 40,
  },
});
