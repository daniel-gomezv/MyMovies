import React,{useState,useContext} from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import { Image} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ThemeContext from '../Context/ThemeContext';

const Tab = createBottomTabNavigator();

const NavigationTab: React.FC = () => {


  let headerContent:any ={
    headerTitle: props => <Image source={require('../assets/img/logo.png')}  style={{  width: wp('40'), height: wp('20')}}/>,
    headerStyle: {
      backgroundColor: '#000',    
    }
  };


  const defaultContext = useContext(ThemeContext);

  const [objectTheme, setobjectTheme] = useState(defaultContext)

  return (
    
    <Tab.Navigator
    screenOptions={({ route }) => ({
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
      <Tab.Screen name="Home" component={Home}    options={headerContent}/>
      <Tab.Screen name="Popular" component={Home} options={headerContent}/>
      <Tab.Screen name="Buscar" component={Home}  options={headerContent}/>
      <Tab.Screen name="Random" component={Home}  options={headerContent}/>
    </Tab.Navigator>
  );
}

export default NavigationTab;