import React, { Component } from "react";
import { Navigation } from "react-native-navigation";

class Tabs extends Component {
  goHome=()=>{
    Navigation.push('CenterScreen',{
      component:{
        name: 'Home',
        options:{
          topBar:{
            visible:false
          }
        }
      }
    })
  }
  goEdit=()=>{
    Navigation.push('CenterScreen',{
      component:{
        name: 'Edit'
      }
    })
  };
  goTables=()=>{
    Navigation.push('CenterScreen',{
      component:{
        name: 'Tables'
      }
    })
  };
  signOut=()=>{
    Navigation.push('CenterScreen',{
      component:{
        name: 'LogIn',
        options:{
          topBar:{
            visible:false
          }
        }
      }
    })
  };
}
const TABS = new Tabs();
export default TABS;
