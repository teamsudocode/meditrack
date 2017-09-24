import React, {Component} from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';
import { Constants } from 'expo';



import Titlebar from './../Titlebar'
import Panel1 from './Panel1' 
import Panel2 from './Panel2' 
import Panel3 from './Panel3' 

import Fab from './Fab'

export default class Schedule extends Component {  
    constructor(props){
        super(props)
    } 
    render() {
        return (
            <View style = {styles.container}> 
                <Titlebar/>
                <Panel1/>  
                <Panel2/>
                <Panel3/>
                <Fab style = {{flex: 1}}/>         
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