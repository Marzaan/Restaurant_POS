/**
 * @format
 */
import { Navigation } from "react-native-navigation";
import App from './App';
import { Edit, Tables, Home } from "./screens/Index";

Navigation.registerComponent('LogIn',()=> App);
Navigation.registerComponent('Edit',()=> Edit);
Navigation.registerComponent('Home',()=> Home);
Navigation.registerComponent('Tables',()=> Tables);

const stack= {
  id: 'CenterScreen',
  children: [
    {
      component: {
        name: 'LogIn',
        options: {
          topBar: {
            visible:false
          }
        }
      }
    },
  ]
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack
    }
  });
});
