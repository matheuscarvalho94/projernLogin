import React, { Component } from 'react';
import {  AsyncStorage, View, Image, } from 'react-native';
import { NavigationActions } from "react-navigation";

export default class Splash extends Component {
  componentDidMount(){
    setTimeout(this.doRouting, 2000);
  }
  doRouting = async () => {
    let user = await AsyncStorage.getItem("getUser");
    let routeName = "Main";
    if(!user) {
      routeName = "Login";
    }
    this.props.navigation.dispatch(NavigationActions.reset({
      index: 0,
      key: null,
      actions: [NavigationActions.navigate({ routeName})]
    }))

  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#053d4e'}}>
        <Image source={require("../../../icon.png")} style={{width: 100, height: 100 }} />
      </View>
    );
  }
}
