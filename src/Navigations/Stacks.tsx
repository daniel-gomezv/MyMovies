import React,{FC,useEffect,useState,useContext} from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screens/Home";
import List from "../screens/List";
import MovieDetails from "../screens/MovieDetails";
import {Image,View} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ThemeContext from '../Context/ThemeContext';

const Stack = createNativeStackNavigator();


const Stacks: React.FC = () => {

    const theme = useContext(ThemeContext)

    return(
        
        <Stack.Navigator initialRouteName="HomeMovies"
        screenOptions={{ 
            headerTitleStyle: {color:theme.primaryColor},
            headerStyle: theme.background,
            headerBackTitle: "Atras",
            headerTintColor: theme.secondaryColor , 
             headerTitle: props => 
                    <View style={{ height: 200 }}>
                    <Image source={require('../assets/img/logo.png')}  style={{  width: wp('30'), height: wp('10')}}/>
                    </View>,    
         }}
        
        >
            <Stack.Screen name="HomeMovies" component={Home}/>
            <Stack.Screen name="List" component={List}   />
            <Stack.Screen name="DetailsMovie" component={MovieDetails} />
        </Stack.Navigator>

    )
}

export default Stacks;

