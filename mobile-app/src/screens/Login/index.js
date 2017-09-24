import React, {Component} from 'react';
import {Button, View, StyleSheet, Text, TextInput, Alert } from 'react-native'
import {Constants} from 'expo'
import Titlebar from './../Titlebar'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '', 
      password: '' 
    };
  }
  _onLogin = () => {
    //if(this.state.username == 'himanshu' && this.state.password == 'abc')
      this.props._onLogin()
    //else
       //Alert.alert("wrong credentials")
    //else some modal  
  }
  render() {
    return (
      <View style = {styles.container}>
        <Titlebar/>
        <Text> Username </Text>
        <TextInput
          style={styles.textbox}
          onChangeText={(text) => this.setState({username : text})}
          value={this.state.username}
          
        />
        <Text> Password </Text>
        <TextInput
          style={styles.textbox}
          onChangeText={(text) => this.setState({password : text})}
          value={this.state.password}
          secureTextEntry = {true}
        />
        <Button title="Login" onPress = {this._onLogin}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  textbox: {
    height: 40,
    width: 150,
    borderColor: 'gray',
    borderWidth: 1,
  }
});

