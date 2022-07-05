import React,{FC,createContext} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ThemeContextData {
  background : object,
  title: object,
  text: object
  primaryColor:object,
  secondaryColor:object
  }
  
  const defaultState = {
    background : { backgroundColor: '#000'},
    title: { color: '#FFFFFF', fontSize: wp('8%')},
    text: { color: '#FFFFFF'},
    primaryColor:{ color: '#FFFFFF'},
    secondaryColor:{ color: '#f69411'}
  };
  
  const ThemeContext = React.createContext(defaultState);

  
  export const ProviderTheme = ThemeContext.Provider;
  export const ConsumerTheme = ThemeContext.Consumer;
  
  export default ThemeContext;