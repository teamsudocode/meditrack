import React, { Component } from 'react';
import { Modal, Button, Text, StyleSheet, TextInput, TouchableHighlight, View, Image } from 'react-native';

export default class Fab extends Component {
    
    state = {
        modalVisible: false,
        medicineName: 'Calpol',
        quantity: '5',
        times: '3'
    }
    
    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    _changeMedicineName = medicineName => {
        this.setState({ medicineName });
    };

    _changeQuantity = value => {
        this.setState({quantity: value });
    };

    _changeTimes = value => {
        this.setState({times: value});
    };

    _addOrder = () => {
        alert('Entry added');
        this.setState({modalVisible: false})        
    };
    
    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        {/* alert("Modal has been closed.");  */}
                        this.setState({modalVisible: false})}
                    }
                    style={{margin: 20}}
                >
                    <View style={{marginTop: 22, padding: 20}}>
                    <View>
                    <Text>Medicine Name</Text>
                    <TextInput
                    value={this.state.medicineName}
                    onChangeText={this._changeMedicineName}
                    style={{ width: 200, height: 44, padding: 8 }}
                    />
                    </View>
                    
                    <View>
                    <Text>Quantity</Text>
                    <TextInput
                    value={this.state.quantity}
                    onChangeText={this._changeQuantity}
                    keyboardType='numeric'
                    style={{ width: 200, height: 44, padding: 8 }}
                    />
                    </View>
                    
                    <View>
                    <Text>How many times a day?</Text>
                    <TextInput
                    value={this.state.times}
                    keyboardType='numeric'
                    onChangeText={this._changeTimes}
                    style={{ width: 200, height: 44, padding: 8 }}
                    />
                    </View>
                    
                    <View>
                    <Text>Type of medicine</Text>
                    
                    <View style={styles.row}>
                    
                    <View style={styles.image}>
                    <Image resizeMode='contain' style={{width: 30, height: 30}} source={ require('./../../assets/pill/1.png') } />
                    <Text>Capsule</Text>
                    </View>
                    
                    <View style={styles.image}>
                    <Image resizeMode='contain' style={{width: 30, height: 30}} source={ require('./../../assets/pill/2.png') } />
                    <Text>Syrup</Text>
                    </View>
                    
                    <View style={styles.image}>
                    <Image resizeMode='contain' style={{width: 30, height: 30}} source={ require('./../../assets/pill/3.png') } />
                    <Text>Injection</Text>
                    </View>
                    
                    <View style={styles.image}>
                    <Image resizeMode='contain' style={{width: 30, height: 30}} source={ require('./../../assets/pill/4.png') } />
                    <Text>Tablet</Text>
                    </View>
                    
                    </View>
                    
                    </View>
                    
                    
                    <View style={{ bottom: -100, right: 75, position: 'absolute' }}>
                    
                    <Button
                    title="Add"
                    onPress={this._addOrder}
                    />
                    
                    </View>
                    </View> 
                </Modal>

            <View style={{position: 'absolute', right: 30, bottom: 5}}>
            <TouchableHighlight onPress={() => {
                this.setModalVisible(true)
            }}>
                <Image  resizeMode='contain' style={{width: 50, height: 50}}
                    source={require('./../../assets/edit.png')}
                />
            </TouchableHighlight>
            </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    row: {
      padding: 5,
      flex: 1,
      width: 100,
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
    },
    image: {
      padding: 2,
      height: 'auto',
      width: 'auto',
    }
});