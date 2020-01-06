import React, { Component } from 'react';
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

import {Actions} from 'react-native-router-flux';

export default class SignUpScreen extends Component {
    goBack(){
        Actions.pop();
    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                <TextInput style={styles.inputBox} 
                    underlineColorAndroid={'rgba(0, 0, 0, 0)'} 
                    placeholder="Name"
                    placeholderTextColor= "#fff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.password.focus()}
               />
               <TextInput style={styles.inputBox} 
                    underlineColorAndroid={'rgba(0, 0, 0, 0)'} 
                    placeholder="Email"
                    placeholderTextColor= "#fff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    onSubmitEditing={()=> this.password.focus()}
               />
               <TextInput style={styles.inputBox} 
                    underlineColorAndroid={'rgba(0, 0, 0, 0)'} 
                    placeholder="Password"
                    placeholderTextColor= "#fff" 
                    secureTextEntry={true}
                    ref={(input) => this.password = input}
               />
            </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    signupContainer: {
      flexGrow: 1,
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
    },
    signupButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight:'500',
    }
  });