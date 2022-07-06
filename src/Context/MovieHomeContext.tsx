import React,{FC,createContext} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';

  interface ThemeContextData {
    getPopular : object,
  };

  const defaultState = {
    getPopular:{}
  }
  
  const MovieHomeContext = React.createContext(defaultState);

  
  export const ProviderTheme = MovieHomeContext.Provider;
  export const ConsumerTheme = MovieHomeContext.Consumer;
  
  export default MovieHomeContext;