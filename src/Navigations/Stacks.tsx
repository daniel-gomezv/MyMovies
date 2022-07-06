import React,{FC,useEffect,useState} from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";
import Home from "../screens/Home";


const Stack = createNativeStackNavigator();



const Stacks: React.FC = () => {

    return(
        
        <Stack.Navigator initialRouteName="login">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
        </Stack.Navigator>

    )
}

export default Stacks;

