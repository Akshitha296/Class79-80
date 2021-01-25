import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen'
import { AppTabNavigator } from './screens/AppTabNavigator'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SwitchNavigator = createSwitchNavigator({
  WelcomeScreen: {screen: WelcomeScreen},
  AppTabNavigator: {screen: AppTabNavigator},
})

const AppContainer = createAppContainer( SwitchNavigator )