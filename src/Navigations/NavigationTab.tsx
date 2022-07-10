import React,{useState,useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image} from 'react-native';
import ThemeContext from '../Context/ThemeContext';

//****** Import Stacks ******//
import 
  Stack
from './Stacks'


const Tab = createBottomTabNavigator();

const NavigationTab: React.FC = () => {

  const defaultContext = useContext(ThemeContext);

  const [objectTheme, setobjectTheme] = useState(defaultContext)

  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false ,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName:string = './src/assets/img/logo.png';

        if(route.name === 'Home')
        return  <Image source={require('../assets/img/home.png')}  style={{  width: 25, height: 25}}/>
         
        
        if(route.name === 'Popular')
        return  <Image source={require('../assets/img/hot.png')}  style={{  width: 25, height: 25}}/>

        if(route.name === 'Buscar')
         return  <Image source={require('../assets/img/search.png')}  style={{  width: 25, height: 25}}/>

         if(route.name === 'Random')
         return  <Image source={require('../assets/img/random.png')}  style={{  width: 25, height: 25}}/>
       
      
      },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: objectTheme.primaryColor,
      tabBarStyle: {
        backgroundColor: objectTheme.secondaryColor,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
      },
      headerShadowVisible: false,
      headerBackTitleVisible: false,
    })}

    

    >
      <Tab.Screen name="Home" component={Stack}    />
      <Tab.Screen name="Popular" component={Stack} />
      <Tab.Screen name="Buscar" component={Stack}  />
      <Tab.Screen name="Random" component={Stack}  />
    </Tab.Navigator>
  );
}

export default NavigationTab;