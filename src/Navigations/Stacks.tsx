import React,{FC} from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "../screens/LoginScreen";


const Stack = createNativeStackNavigator();

const Stacks: React.FC = () => {
 
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default Stacks;

