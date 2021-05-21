import React from "react";
import { Button, TextInput, View } from "react-native";
import { COLORS } from "./constants/index";
import TABS from "./navigation/Tabs";

const App=()=> {
  return (
    <View style={{flex:100,flexDirection:'row',position:'absolute',
                  alignItems:'center',justifyContent:'center',
                  backgroundColor:COLORS.primary,height:'100%',width:'100%'}}>
      <View style={{flexDirection:'column',alignItems:'center',justifyContent:'center',
                  height:'60%',width:'70%',backgroundColor:COLORS.white,padding:'5%'}}>
        <TextInput placeholder='Username' style={{margin:'5%',padding:'3%',borderWidth:1,
                                                  height:'15%',width:'70%',borderColor:COLORS.primary}}/>
        <TextInput placeholder='Password' style={{margin:'5%',padding:'3%',borderWidth:1,marginBottom:'10%',
                                                  height:'15%',width:'70%',borderColor:COLORS.primary}}/>
        <Button color={COLORS.primary} title='Log In' onPress={TABS.goHome}/>
      </View>
    </View>
  )
}

export default App;
