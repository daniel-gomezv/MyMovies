import 'react-native-gesture-handler';
import React,{FC} from "react";
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/Navigations/Stacks';


const App: React.FC = () => {
 
    return(
      <NavigationContainer>
        <Stacks/>
      </NavigationContainer>
    )
}

export default App;
