import 'react-native-gesture-handler';
import React,{FC,useContext,useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/Navigations/Stacks';
import NavigationTab from './src/Navigations/NavigationTab';
import ThemeContext from './src/Context/ThemeContext';


const App: React.FC = () => {

  const defaultContext = useContext(ThemeContext);

  const [objectTheme, setobjectTheme] = useState(defaultContext)

    return(
      
      <NavigationContainer>
            <ThemeContext.Provider value={objectTheme}>
                 <NavigationTab />
            </ThemeContext.Provider>
      </NavigationContainer>
    )
}

export default App;
