import 'react-native-gesture-handler';
import React,{FC,useEffect,useContext,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {PublicScreen} from '../Navigations/Stacks';
import NavigationTab from '../Navigations/NavigationTab';
import ThemeContext from '../Context/ThemeContext';
import {isLogin} from '../functions/Realmio';
import { SafeAreaView } from 'react-native-safe-area-context';


const PrivateNavigation: React.FC = () => {

  const defaultContext = useContext(ThemeContext);

  const [objectTheme, setobjectTheme] = useState(defaultContext);
  const [authLogin, setAuthLogin] = useState(isLogin());

  useEffect(() => {

    setAuthLogin(isLogin())

  }, [isLogin()])


    return(
      
    
            <ThemeContext.Provider value={objectTheme}>

              
                <NavigationTab /> 
             
             
           
            </ThemeContext.Provider>
    
    )
}

export default PrivateNavigation;
