import React,{FC,useEffect,useState,useContext} from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screens/Home";
import List from "../screens/List";
import MovieDetails from "../screens/MovieDetails";
import TvDetails from "../screens/TvDetails";
import Search from "../screens/Search";
import {Image,View} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ThemeContext from '../Context/ThemeContext';
import Premieres from '../screens/Premieres'

const Stack = createNativeStackNavigator();
const StackPremieres = createNativeStackNavigator();
const StackSearch = createNativeStackNavigator();


export const Stacks: React.FC = () => {

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
            <Stack.Screen name="Premieres" component={Premieres} />
            <Stack.Screen name="TvDetails" component={TvDetails} />
        </Stack.Navigator>

    )
}

export const PremieresScreen: React.FC = () => {

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
            <StackPremieres.Screen name="Premieres" component={Premieres} />
            <StackPremieres.Screen name="List" component={List}   />
            <StackPremieres.Screen name="DetailsMovie" component={MovieDetails} />
        </Stack.Navigator>

    )
}


export const SearchScreen: React.FC = () => {

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
            <StackSearch.Screen name="Search" component={Search} />
            <StackSearch.Screen name="List" component={List}   />
            <StackSearch.Screen name="DetailsMovie" component={MovieDetails} />
        </Stack.Navigator>

    )
}
