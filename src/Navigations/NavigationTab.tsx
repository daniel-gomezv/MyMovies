import React,{useState,useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image} from 'react-native';
import ThemeContext from '../Context/ThemeContext';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//****** Import Stacks ******//
import 
  {Stacks,PremieresScreen,SearchScreen}
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
         
        
        if(route.name === 'Estrenos')
        return  <Image source={require('../assets/img/premieres.png')}  style={{  width: 25, height: 25}}/>

        if(route.name === 'Buscar')
         return  <Image source={require('../assets/img/search.png')}  style={{  width: 25, height: 25}}/>

       
      
      },
      tabBarActiveTintColor: '#000',
      tabBarInactiveTintColor: objectTheme.primaryColor,
      tabBarStyle: {
        backgroundColor: objectTheme.secondaryColor,
       
      },
      headerShadowVisible: false,
      headerBackTitleVisible: false,
    })}

    

    >
      <Tab.Screen name="Home" component={Stacks}    />
      <Tab.Screen name="Estrenos" component={PremieresScreen} />
      <Tab.Screen name="Buscar" component={SearchScreen}  />
      
    </Tab.Navigator>
  );
}

export default NavigationTab;