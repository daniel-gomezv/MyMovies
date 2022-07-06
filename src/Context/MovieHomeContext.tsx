import React,{FC,createContext} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import {SaveMovies} from '../functions/Realmio'

  interface ThemeContextData {
  
  };

  const defaultState = {
   
  }

  const MovieHomeContext = React.createContext(defaultState);

  
  export const ProviderTheme = MovieHomeContext.Provider;
  export const ConsumerTheme = MovieHomeContext.Consumer;


   axios.all([ axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=34b16de8865cfe7e9f791e016f31ffef'), axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=34b16de8865cfe7e9f791e016f31ffef') ]) .then(axios.spread((obj1, obj2) => { 
       
      obj1.data.results.forEach(items => {
        items.type = 'Popular';
        SaveMovies(items);
      });


    }));

  
  export default MovieHomeContext;