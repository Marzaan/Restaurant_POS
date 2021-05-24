import React, { useState } from "react";
import { Button, FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons, SIZES } from "../constants/index";
import TABS from "../navigation/Tabs";

const Home = () => {
  const [state, setState] = useState({
    selectedId:0,
  });
  const categoryData = [
    {id:0,category: 'Food', icon:icons.tray},
    {id:1,category: 'Dessert', icon: icons.ice},
    {id:2,category: 'Drink', icon: icons.drink},
  ];
  const subCategoryData = [
    {
      id:0,
      subCategory:[
        {categoryName: 'Chicken', icon: icons.dish},
        {categoryName: 'Pizza', icon: icons.pizza},
        {categoryName: 'Pasta', icon: icons.pasta}
      ]
    },
    {
      id:1,
      subCategory:[
        {categoryName: 'Cake', icon: icons.tray},
        {categoryName: 'IceCream', icon: icons.ice},
      ]
    },
    {
      id:2,
      subCategory:[
        {categoryName: 'Fruits', icon: icons.drink},
        {categoryName: 'Spirits', icon: icons.drink},
      ]
    }
  ]
  function renderSubCategory(){
    const renderItem=({item})=>(
      <TouchableOpacity>
          {item.id === state.selectedId?(
            <View style={{flex:100,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'10%',borderWidth:1,borderColor:COLORS.primary}}>
              <Image style={{flex:70,height:SIZES.height/16,width:'100%'}} source={item.subCategory[0].icon}/>
              <Text style={{flex:30,fontSize:10}}>{item.subCategory[0].categoryName}</Text>
            </View>
          ):null}
      </TouchableOpacity>
    )
    return(
      <FlatList keyExtractor={item=>item.id} data={subCategoryData} renderItem={renderItem}/>
    )
  }
  function renderCategory(){
    const onPressItem=(id)=> {
      setState({selectedId:id});
    }
    const headerComponent=()=>(
      <View style={{alignItems:'center',justifyContent:'center',paddingTop:'30%',paddingBottom:'30%'}}>
        <Text style={{color:'red',fontWeight:'bold'}}>FLAVOUR</Text>
        <Text style={{color:'black',fontWeight:'bold'}}>POS</Text>
      </View>
    )
    const renderItem=({item})=>(
        <TouchableOpacity onPress={onPressItem.bind(this, item.id)} style={{backgroundColor:(item.id===state.selectedId)?COLORS.primary:COLORS.white}}>
          <View style={{flex:100,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'10%',borderWidth:1,borderColor:COLORS.secondary}}>
            <Image style={{flex:70,height:SIZES.height/16,width:'100%'}} source={item.icon}/>
            <Text style={{flex:30,fontSize:10}}>{item.category}</Text>
          </View>
        </TouchableOpacity>
    )
    return(
      <FlatList ListHeaderComponent={headerComponent} keyExtractor={item=>item.id} data={categoryData} renderItem={renderItem}/>
    )
  }
  function renderLeft(){
    return(
      <View style={{flex:24,flexDirection:'row'}}>
        <View style={{flex:14,flexDirection:'column',alignItems:'center',backgroundColor:COLORS.white}}>
          {renderCategory()}
        </View>
        <View style={{flex:10,flexDirection:'column',marginTop:'10%',padding:'5%',alignItems:'center',justifyContent:'flex-start'}}>
          {renderSubCategory()}
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
