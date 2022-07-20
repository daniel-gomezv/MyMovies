import React,{FC,useEffect,useState,useContext} from "react";

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "../screens/Home";
import List from "../screens/List";
import LoginScreen from "../screens/LoginScreen";
import MovieDetails from "../screens/MovieDetails";
import TvDetails from "../screens/TvDetails";
import Search from "../screens/Search";
import CategoryMovies from "../screens/CategoryMovies";
import {Image,View,TouchableOpacity} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ThemeContext from '../Context/ThemeContext';
import Premieres from '../screens/Premieres';
import PrivateNavigation from '../screens/PrivateNavigation';
import {isLogin,cleanLogin} from '../functions/Realmio';

const Stack = createNativeStackNavigator();
const StackPremieres = createNativeStackNavigator();
const StackSearch = createNativeStackNavigator();
const StackPublic = createNativeStackNavigator();

interface Props {
    navigation: any;
}


export const PublicScreen: React.FC<Props> = ({
    navigation,
}) =>{

    const theme = useContext(ThemeContext)
    const [authLogin, setAuthLogin] = useState(isLogin());

    return(
        
        <Stack.Navigator initialRouteName={(authLogin) ? "PrivateNavigation" : "Login"} 
         screenOptions={{
            headerShown: false
        }}>
            <StackPublic.Screen name="Login" component={LoginScreen} />
            <StackPublic.Screen name="PrivateNavigation" component={PrivateNavigation} />
        </Stack.Navigator>

    )
}


export const Stacks: React.FC<Props> = ({
    navigation,
}) =>{

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
            
            headerRight: () => (
                <TouchableOpacity onPress={ () => {
                    cleanLogin(); 
                    navigation.navigate('Login')
                }}>
                <Image source={require('../assets/img/orange.png')}  style={{  width: wp('6%'), height: wp('6%'), marginRight:wp('1%')}}/>
                </TouchableOpacity>
            ),
           
         }}
        
        >
        
            <Stack.Screen name="HomeMovies" component={Home} options={{
                 headerLeft: () => (
                    <TouchableOpacity onPress={ () => {
    
                        navigation.navigate('Search')
                    }}>
                    <Image source={require('../assets/img/searchBlank.png')}  style={{  width: wp('6%'), height: wp('6%'), marginRight:wp('1%')}}/>
                    </TouchableOpacity>
                ),
            }}/>
            <Stack.Screen name="List" component={List}   />
            <Stack.Screen name="DetailsMovie" component={MovieDetails} />
            <Stack.Screen name="Premieres" component={Premieres} />
            <Stack.Screen name="TvDetails" component={TvDetails} />
            <Stack.Screen name="CategoryMovies" component={CategoryMovies} />
            <Stack.Screen name="Search" component={Search} options={{}}/>
        </Stack.Navigator>

    )
}

export const PremieresScreen: React.FC<Props> = ({
    navigation,
}) =>{

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
                     headerRight: () => (
                        <TouchableOpacity onPress={ () => {
                            cleanLogin(); 
                            navigation.navigate('Login')
                        }}>
                        <Image source={require('../assets/img/orange.png')}  style={{  width: wp('6%'), height: wp('6%'), marginRight:wp('1%')}}/>
                        </TouchableOpacity>
                    ),
                   
         }}
        
        >
            <StackPremieres.Screen name="Premieres" component={Premieres} options={{
                 headerLeft: () => (
                    <TouchableOpacity onPress={ () => {
    
                        navigation.navigate('Search')
                    }}>
                    <Image source={require('../assets/img/searchBlank.png')}  style={{  width: wp('6%'), height: wp('6%'), marginRight:wp('1%')}}/>
                    </TouchableOpacity>
                ),
            }}/>
            <StackPremieres.Screen name="List" component={List}   />
            <StackPremieres.Screen name="DetailsMovie" component={MovieDetails} />
            <StackPremieres.Screen  name="Search" component={Search} />
            <StackPremieres.Screen  name="CategoryMovies" component={CategoryMovies} />
        </Stack.Navigator>

    )
}


export const SearchScreen: React.FC<Props> = ({
    navigation,
}) =>{

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
                 headerRight: () => (
                    <TouchableOpacity onPress={ () => {
                        cleanLogin(); 
                        navigation.navigate('Login')
                    }}>
                    <Image source={require('../assets/img/orange.png')}  style={{  width: wp('6%'), height: wp('6%'), marginRight:wp('1%')}}/>
                    </TouchableOpacity>
                ),

                
            }}
            
            >
            <StackSearch.Screen name="Search" component={Search} options={{
                 headerLeft: () => (
                    <TouchableOpacity onPress={ () => {
    
                        navigation.navigate('Search')
                    }}>
                    <Image source={require('../assets/img/searchBlank.png')}  style={{  width: wp('6%'), height: wp('6%'), marginRight:wp('1%')}}/>
                    </TouchableOpacity>
                ),
            }}/>
            <StackSearch.Screen name="List" component={List}   />
            <StackSearch.Screen name="DetailsMovie" component={MovieDetails} />
            <StackSearch.Screen name="CategoryMovies" component={CategoryMovies} />
        </Stack.Navigator>

    )
}





