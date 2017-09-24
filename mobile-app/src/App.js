import React , {Component} from 'react';
import { View, Text, Image,StatusBar } from 'react-native'
import {Font} from 'expo'
import { Navigator } from './screens/Navigator'
import Login from './screens/Login' 
import Notify from './Notify'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: false, 
      auth: true
    }
  }
  componentDidMount() {
    Font.loadAsync({
      'bold': require('./assets/fonts/Gotham-Rounded-Bold.otf'),
      'book': require('./assets/fonts/Gotham-Rounded-Book.otf'),
      
    });
  }
  _onLogin = () => {
    this.setState({
      auth : true
    })
  }
  
  render() {
    if(!this.state.loading && this.state.auth){
      return (
        <View style={{flex:1}}> 
          <Navigator/>  
          <Notify/>
        </View>
      );
    }
    if(!this.state.loading && !this.state.auth){
      return (
          <Login _onLogin = {this._onLogin} />  
      );
    }   
  }
}


