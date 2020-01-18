import React from 'react';
import { Actions } from 'react-native-router-flux';
import { StyleSheet, View, TextInput, Button, Text, KeyboardAvoidingView } from 'react-native';
import styles from '../constants/Styles';
import UserImage from '../components/UserImage';

export default function ProfileScreen() {

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View>
        <View>
          <UserImage />
          <TextInput style={styles.inputBox}
            placeholder="Annual Income"
            placeholderTextColor="#fff"
            selectionColor="#fff"
            keyboardType="email-address"
            keyboardAppearance='dark'
          />
          <TextInput style={styles.inputBox}
            placeholder="Savings"
            placeholderTextColor="#fff"
            selectionColor="#fff"
            keyboardType="email-address"
            keyboardAppearance='dark'
          />
          <TextInput style={styles.inputBox}
            placeholder="Debt"
            placeholderTextColor="#fff"
            selectionColor="#fff"
            keyboardType="email-address"
            keyboardAppearance='dark'
          />
          <TextInput style={styles.inputBox}
            placeholder="Report"
            placeholderTextColor="#fff"
            selectionColor="#fff"
            keyboardType="email-address"
            keyboardAppearance='dark'
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={profileStyle.button}>
            <Button
              color="#ffffff"
              title="Submit"
            />
          </View>
        </View>
      </View>
      <View style={{ height: 90 }} />
    </KeyboardAvoidingView>
  );
};

const profileStyle = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    flexDirection: 'column'
  },
  button: {
    backgroundColor: 'black',
    width: 300,
    padding: 5,
    borderRadius: 2,
    marginVertical: 25,
    shadowOffset: { width: 3, height: 1.5, },
    shadowColor: 'white',
    shadowOpacity: 0.25,
    backgroundColor: '#463547',
    margin: 10,
  },
  logOutButton: {
    backgroundColor: '#463547',
    margin: 5,
    width: 100,
    padding: 5,
  }
});