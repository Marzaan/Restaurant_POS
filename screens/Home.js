import React, { useState } from "react";
import { Alert, Button, FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, icons, images } from "../constants/index";
import TABS from "../navigation/Tabs";
import LinearGradient from "react-native-linear-gradient";

const Home = () => {
  const [state, setState] = useState({
    selectedID:0,
  });
  const [state2, setState2] = useState({
    selectedSubID:0,
  });
  const categoryData = [
    {id:0,category:'Food',icon:icons.tray},
    {id:1,category:'Dessert',icon:icons.ice},
    {id:2,category:'Drink',icon:icons.drink},
  ];
  const subCategoryData = [
    {id:0,value:0,categoryName:'Pizza',icon:icons.pizza},
    {id:1,value:0,categoryName:'Pasta',icon:icons.pasta},
    {id:2,value:0,categoryName:'Chicken',icon:icons.dish},
    {id:3,value:1,categoryName:'Cake',icon:icons.tray},
    {id:4,value:1,categoryName:'IceCream',icon:icons.ice},
    {id:5,value:2,categoryName:'Fruits',icon:icons.drink},
    {id:6,value:2,categoryName:'Spirits',icon:icons.coc},
  ];
  const menuData = [
    {id:0,value:0,menu:'Pizza',image:images.pizza},
    {id:1,value:0,menu:'Pasta',image:images.pastaSalad},
    {id:2,value:0,menu:'Cheese Pizza',image:images.cheese_pizza},
    {id:3,value:0,menu:'Pizza',image:images.pizza},
    {id:4,value:0,menu:'Pasta',image:images.pastaSalad},
    {id:5,value:0,menu:'Cheese Pizza',image:images.cheese_pizza},
    {id:6,value:1,menu:'Pasta',image:images.pastaSalad},
    {id:7,value:1,menu:'Cheese Pasta',image:images.pastaSalad},
    {id:8,value:2,menu:'Roast',image:images.roast},
    {id:9,value:2,menu:'Duck',image:images.duck},
    {id:10,value:3,menu:'Cake',image:images.cake},
    {id:11,value:3,menu:'Chocolate',image:images.chocolate},
    {id:12,value:3,menu:'Dessert',image:images.dessert},
    {id:13,value:4,menu:'Ice Cream',image:images.eclair},
    {id:14,value:5,menu:'Watermelon',image:images.watermelon},
    {id:15,value:5,menu:'Apple Drink',image:images.apple},
    {id:16,value:5,menu:'Strawberry',image:images.strawberries},
    {id:17,value:5,menu:'Grape',image:images.grape},
    {id:18,value:6,menu:'Spirits',image:icons.coc},
  ];

  function renderSubCategory(){
    const onPressItem=(id)=>{
      setState2({selectedSubID:id});
      setState({selectedID:state.selectedID});
    }
    const renderItem=({item})=>(
      <View>
        {item.value === state.selectedID?(
          <TouchableOpacity onPress={onPressItem.bind(this,item.id)} style={{backgroundColor:(item.id===state2.selectedSubID)?COLORS.primary:COLORS.white}}>
            <View style={{flex:100,flexDirection:'column',alignItems:'center',justifyContent:'center',padding:'10%'}}>
              <Image style={{flex:70,height:32,width:'80%'}} source={item.icon}/>
              <Text style={{flex:30,fontSize:10}}>{item.categoryName}</Text>
            </View>
          </TouchableOpacity>
        ):null}
      </View>
    )
    return(
      <FlatList keyExtractor={item=>item.id} data={subCategoryData} renderItem={renderItem}/>
    )
  }

  function renderCategory(){
    const onPressCategory=(id)=> {
      setState({selectedID:id});
    }
    const headerComponent=()=>(
      <View style={{alignItems:'center',justifyContent:'center',paddingTop:'30%',paddingBottom:'30%'}}>
        <Text style={{color:'red',fontWeight:'bold'}}>FLAVOUR</Text>
        <Text style={{color:'black',fontWeight:'bold'}}>POS</Text>
      </View>
    )
    const renderCategory=({item})=>(
        <TouchableOpacity onPress={onPressCategory.bind(this,item.id)}>
          <View style={{flex:100,flexDirection:'column',backgroundColor:(item.id===state.selectedID)?COLORS.primary:null,alignItems:'center',justifyContent:'center',padding:'10%'}}>
            <Image style={{flex:70,height:32,width:'80%'}} source={item.icon}/>
            <Text style={{flex:30,fontSize:10}}>{item.category}</Text>
          </View>
        </TouchableOpacity>
    )
    return(
      <FlatList ListHeaderComponent={headerComponent} keyExtractor={item=>item.id} data={categoryData} renderItem={renderCategory}/>
    )
  }

  function renderLeft(){
    return(
      <View style={{flex:24,flexDirection:'row'}}>
        <View style={{flex:14,flexDirection:'column',alignItems:'center',backgroundColor:COLORS.white}}>
          {renderCategory()}
        </View>
        <View style={{flex:10,flexDirection:'column',marginTop:'10%',alignItems:'flex-start',justifyContent:'flex-start'}}>
          {renderSubCategory()}
        </View>
      </View>
    )
  }

  function renderHeader(){
    return(
      <View style={{flex:12,flexDirection:'row',marginTop:'2%',marginBottom:'2%',backgroundColor:COLORS.white}}>
        <View style={{flex:4,justifyContent:'center',paddingLeft:10}}>
          <Text style={{fontSize:20,fontWeight:'bold'}}>{categoryData[state.selectedID].category}</Text>
        </View>
        <View style={{flex:8,flexDirection:'row',justifyContent:'flex-end',alignItems:'center'}}>
          <View style={{margin:2}}>
            <Button color={COLORS.primary} onPress={TABS.goTables} title="Tables"/>
          </View>
          <View style={{margin:2}}>
            <Button color={COLORS.primary} onPress={TABS.signOut} title="Sign Out"/>
          </View>
        </View>
      </View>
    )
  }

  function renderMenu() {
    const renderMenu=({item})=>(
      <View>
        {item.value === state2.selectedSubID?(
          <TouchableOpacity style={{padding:10,alignItems:'center'}}>
            <Image style={{height:100,width:120}} source={item.image}/>
            <Text>{item.menu}</Text>
          </TouchableOpacity>
        ):null}
      </View>
    )
    return(
      <FlatList keyExtractor={item=>item.id} data={menuData} renderItem={renderMenu} numColumns={3}/>
    )
  }

  function renderCenter(){
    return(
      <View style={{flex:44,flexDirection:'column',marginRight:'1%'}}>
        <View style={{flex:6,backgroundColor:COLORS.white,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontWeight:'bold'}}>{subCategoryData[state2.selectedSubID].categoryName}</Text>
        </View>
        <View style={{flex:38,padding:'2%'}}>
            {renderMenu()}
        </View>
      </View>
    )
  }

  function renderRight(){
    const onPressDemo=()=>{
      Alert.alert("Not Completed");
    }
    return(
      <View style={{flex:20,backgroundColor:COLORS.white}}>
        <LinearGradient style={{height:'13%',width:'100%',alignItems:'center',justifyContent:'center'}} colors={[COLORS.gradient1, COLORS.gradient2, COLORS.gradient3]}>
          <TouchableOpacity onPress={onPressDemo}>
            <Text style={{fontWeight:'bold'}}>Order & Payment</Text>
          </TouchableOpacity>
        </LinearGradient>
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
