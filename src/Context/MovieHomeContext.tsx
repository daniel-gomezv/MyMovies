import React,{FC,createContext} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {getMoviesFilter,getTvFilter,getCategory} from '../functions/Realmio'
import {PreloaderData,requestAxios,loadmore} from '../functions/Functions';
import {moviesRequest,Movies} from '../functions/config';

    interface ThemeContextData {
      getMoviesFilter:any,
      getTvFilter:any,
      getCategory:any,
      PreloaderData:any,
      moviesRequest:any,
      requestAxios:any,
      Movies:any,
      loadmore:any,
    };
  
    const defaultState = {
      getMoviesFilter: getMoviesFilter,
      getTvFilter: getTvFilter,
      getCategory: getCategory,
      PreloaderData: PreloaderData,
      moviesRequest: moviesRequest,
      requestAxios: requestAxios,
      Movies: Movies,
      loadmore: loadmore,
    }
  
    const MovieHomeContext = React.createContext(defaultState);
  
    PreloaderData();
    
    export const ProviderTheme = MovieHomeContext.Provider;
    export const ConsumerTheme = MovieHomeContext.Consumer;


   

  export default MovieHomeContext;