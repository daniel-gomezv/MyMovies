import 'react-native-gesture-handler';
import React,{FC,useEffect,useContext,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {PublicScreen} from './src/Navigations/Stacks';
import NavigationTab from './src/Navigations/NavigationTab';
import ThemeContext from './src/Context/ThemeContext';
import {isLogin} from './src/functions/Realmio';
import {PreloaderData} from './src/functions/Functions';


const App: React.FC = () => {

  const defaultContext = useContext(ThemeContext);

  const [objectTheme, setobjectTheme] = useState(defaultContext);
  const [authLogin, setAuthLogin] = useState(isLogin());

  useEffect(() => {
    PreloaderData();
    setAuthLogin(isLogin())

  }, [isLogin()])
    return(
      
      <NavigationContainer>
            <ThemeContext.Provider value={objectTheme}>

              
                <PublicScreen /> 
             
             
           
            </ThemeContext.Provider>
      </NavigationContainer>
    )
}

export default App;
