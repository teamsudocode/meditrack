import {
    TabNavigator,
  } from 'react-navigation';
 
import Schedule from './Schedule';
import Connect from './Connect';
import Receipt from './Receipt';
import Statistics from './Statistics';
import Preferences from './Preferences';


export const Navigator = TabNavigator({
    Schedule: {
        screen: Schedule,
        navigationOptions: {
            title: 'Schedule',
          },
    },
    Connect: {
        screen: Connect,
        navigationOptions: {
            title: 'Connect',
          },
    },
    Receipt: {
        screen: Receipt,
        navigationOptions: {
            title: 'Receipt',
          },
    },
    Statistics: {
        screen: Statistics,
        navigationOptions: {
            title: 'Statistics',
          },
    },
    Preferences: {
        screen: Preferences,
        navigationOptions: {
            title: 'Preferences',
          },
    },
},
{
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
    activeTintColor: 'blue',
    labelStyle: {
    fontSize: 12,
    color: 'black'
  },
  tabStyle: {
    width: 100,    
  },
  style: {
    backgroundColor: '#F5F5F5',
    borderTopWidth: 1,
  },
    },
});