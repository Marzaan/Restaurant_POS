import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import {COLORS} from "../constants/index";
import TABS from "../navigation/Tabs";

const Home = () => {
  function renderLeft(){
    return(
      <View style={{flex:24,flexDirection:'row'}}>
        <View style={{flex:14,flexDirection:'column',backgroundColor:COLORS.white}}>
          <View style={{flex:4,alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'red',fontWeight:'bold'}}>FLAVOUR</Text>
            <Text style={{color:'black',fontWeight:'bold'}}>POS</Text>
          </View>
          <View style={{flex:10,flexDirection:'column',alignItems:'center',justifyContent:'flex-start'}}>
            <Button color={COLORS.secondary} title='Drink' onPress={TABS.goTables}/>
            <Button color={COLORS.secondary} title='Drink' onPress={TABS.goTables}/>
            <Button color={COLORS.secondary} title='Drink' onPress={TABS.goTables}/>
          </View>
        </View>
        <View style={{flex:10,flexDirection:'column',marginTop:'10%',padding:'5%',alignItems:'center',justifyContent:'flex-start'}}>
          <Button color={COLORS.primary} title='Pepsi' onPress={TABS.goTables}/>
          <Button color={COLORS.primary} title='Pepsi' onPress={TABS.goTables}/>
          <Button color={COLORS.primary} title='Pepsi' onPress={TABS.goTables}/>
        </View>
      </View>
    )
  }
  function renderHeader(){
    return(
      <View style={{flex:12,flexDirection:'row',alignItems:'center',justifyContent:'flex-end',
        margin:'2%',backgroundColor:COLORS.white}}>
        <View style={{margin:2}}>
          <Button color={COLORS.primary} onPress={TABS.goEdit} title="Edit"/>
        </View>
        <View style={{margin:2}}>
          <Button color={COLORS.primary} onPress={TABS.goTables} title="Tables"/>
        </View>
        <View style={{margin:2}}>
          <Button color={COLORS.primary} onPress={TABS.signOut} title="Sign Out"/>
        </View>
      </View>
    )
  }
  function renderCenter(){
    return(
      <View style={{flex:44}}>
        <ScrollView>

        </ScrollView>
      </View>
    )
  }
  function renderRight(){
    return(
      <View style={{flex:20,backgroundColor:COLORS.white}}>

      </View>
    )
  }
  return(
    <View style={{flex:100,flexDirection:'row',backgroundColor:COLORS.lightGray}}>
        {renderLeft()}
        <View style={{flex:76,flexDirection:'column'}}>
          {renderHeader()}
          <View style={{flex:64,flexDirection:'row'}}>
            {renderCenter()}
            {renderRight()}
          </View>
        </View>
    </View>
  )
}

export default Home;
