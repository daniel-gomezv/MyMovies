import 'react-native-gesture-handler';
import React,{FC,useEffect,useContext,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {PublicScreen} from './src/Navigations/Stacks';
import NavigationTab from './src/Navigations/NavigationTab';
import ThemeContext from './src/Context/ThemeContext';
import {isLogin} from './src/functions/Realmio';
import {PreloaderData} from './src/functions/Functions';
import LottieView from 'lottie-react-native';
import RNBootSplash from 'react-native-bootsplash';
import {  Animated,Easing} from "react-native"

const App: React.FC = () => {

  const [animationIsVisible, setAnimationIsVisible] = React.useState(true);
  const ref = React.useRef<LottieView>(null);
  const progress = React.useRef<Animated.Value>(new Animated.Value(0));
  const opacity = React.useRef<Animated.Value>(new Animated.Value(1));


  React.useEffect(() => {
    // small delay to ensure animation is loaded (see https://github.com/react-native-community/lottie-react-native/issues/274)
    setTimeout(() => {
      RNBootSplash.hide(); // hide the bootsplash immediately, without any fade

      if (!progress.current) {
        return null;
      }

      Animated.sequence([
        Animated.timing(progress.current, {
          toValue: 1,
          useNativeDriver: true,
          duration: 2500, // I speed up the animation a bit
          easing: Easing.ease,
        }),
        Animated.timing(opacity.current, {
          delay: 250,
          toValue: 0,
          useNativeDriver: true,
          duration: 250,
          easing: Easing.in(Easing.ease),
        }),
      ]).start(() => {
        setAnimationIsVisible(false);
      });
    }, 1000);
  }, []);


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
