'use strict'

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Radar } from 'react-native-pathjs-charts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});

class Raadar extends Component {
    render() {
        let data = [{
          "speed": 74,
          "balance": 29,
          "explosives": 40,
          "energy": 40,
          "flexibility": 30,
          "agility": 25,
          "endurance": 44
        }]
      
        let options = {
          width: 290,
          height: 290,
          margin: {
            top: 20,
            left: 20,
            right: 30,
            bottom: 20
          },
          r: 150,
          max: 100,
          fill: "#2980B9",
          stroke: "#2980B9",
          animate: {
            type: 'oneByOne',
            duration: 200
          },
          label: {
            fontFamily: 'Arial',
            fontSize: 14,
            fontWeight: true,
            fill: '#34495E'
          }
        }
      
        return (
          <View>
            <Radar data={data} options={options} />
          </View>
        )
      }
}

export default Raadar;