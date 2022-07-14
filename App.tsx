import 'react-native-gesture-handler';
import React,{FC,useEffect,useContext,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {PublicScreen} from './src/Navigations/Stacks';
import ThemeContext from './src/Context/ThemeContext';
import {isLogin} from './src/functions/Realmio';
import {PreloaderData} from './src/functions/Functions';
import LottieView from 'lottie-react-native';
import {StyleSheet,View} from 'react-native'


const App: React.FC = () => {



  const defaultContext = useContext(ThemeContext);
  const [loaded, setLoaded] = useState(false);
  const [objectTheme, setobjectTheme] = useState(defaultContext);
  const [authLogin, setAuthLogin] = useState(isLogin());

  useEffect(() => {
    
    PreloaderData();
    setAuthLogin(isLogin())

  }, [isLogin()])


  if (loaded == false) {
    return(
      <View style={styles.splash}>
    
       <LottieView
        source={require('./src/assets/animation/loading.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          console.log('animation finished')
          setLoaded(true);
      }}
      />
      </View>
    )      
  } else {
    return(
      <NavigationContainer>
      <ThemeContext.Provider value={objectTheme}>

        
          <PublicScreen /> 
       
       
     
      </ThemeContext.Provider>
</NavigationContainer>
    )
  }
};

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    alighItems: 'center',
    margin: 0,
    backgroundColor:'#000'
  },
  text: {
    alignItems: 'center',
    marginTop: 100,
    fontWeight: 'bold'
  }
});

export default App;
