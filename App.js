import React from "react";
import { Image, Linking, Text, TextInput, TouchableOpacity, View } from "react-native";
import { COLORS,images} from "./constants/index";
import TABS from "./navigation/Tabs";
import LinearGradient from "react-native-linear-gradient";

const App=()=> {
  return (
    <LinearGradient colors={[COLORS.gradient1, COLORS.gradient2, COLORS.gradient3]} style={{flex:100}}>
      <View style={{flex:100,alignContent:"center", alignItems:'center',justifyContent:'center'}}>
          <Image style={{height:100,width:100,marginBottom:20}} source={images.user}/>
          <TextInput inlineImageLeft='user' inlineImagePadding={10} placeholder='Username' style={{height:35,width:200,marginBottom:20,backgroundColor:COLORS.white}}/>
          <TextInput inlineImageLeft='password' inlineImagePadding={10} placeholder='Password' style={{height:35,width:200,marginBottom:25,backgroundColor:COLORS.white}}/>
          <TouchableOpacity onPress={TABS.goHome} style={{height:25,width:200,justifyContent:'center',alignItems:'center',backgroundColor:COLORS.optional}}>
            <Text>LOG IN</Text>
          </TouchableOpacity>
      </View>
      <View style={{justifyContent:"flex-end",alignItems:"center"}}>
        <TouchableOpacity onPress={()=>{ Linking.openURL('https://technotronix.co/')
                                        .catch(err => {
                                        console.error("Failed opening page because: ", err)
                                        alert('Failed to open page')})}}>
          <Text style={{textDecorationLine:"underline"}}>
            Powered by TECHNOTRONIX
          </Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  )
}

export default App;
