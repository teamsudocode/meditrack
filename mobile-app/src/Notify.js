import {Notifications}from 'expo'

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    componentDidMount(){
        const localNotification = {
            title: 'Meditrack',
            body: "It's time to have your pills ", // (string) — body text of the notification.
            ios: { // (optional) (object) — notification configuration specific to iOS.
              sound: true // (optional) (boolean) — if true, play a sound. Default: false.
            },
        android: // (optional) (object) — notification configuration specific to Android.
            {
              sound: true, // (optional) (boolean) — if true, play a sound. Default: false.
              //icon (optional) (string) — URL of icon to display in notification drawer.
              //color (optional) (string) — color of the notification icon in notification drawer.
              priority: 'high', // (optional) (min | low | high | max) — android may present notifications according to the priority, for example a high priority notification will likely to be shown as a heads-up notification.
              sticky: true, // (optional) (boolean) — if true, the notification will be sticky and not dismissable by user. The notification must be programmatically dismissed. Default: false.
              vibrate: true // (optional) (boolean or array) — if true, vibrate the device. An array can be supplied to specify the vibration pattern, e.g. - [ 0, 500 ].
              // link (optional) (string) — external link to open when notification is selected.
            }
          };

          let t = new Date();
          t.setSeconds(t.getSeconds() + 10);
          const schedulingOptions = {
              time: t, // (date or number) — A Date object representing when to fire the notification or a number in Unix epoch time. Example: (new Date()).getTime() + 1000 is one second from now.
              repeat: 'hour'
            };
        Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions)
    }

  render() {
    return (
      null
    );
  }
}


