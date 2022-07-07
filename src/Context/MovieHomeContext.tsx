import React,{FC,createContext} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import {SaveMovies,getMoviesFilter} from '../functions/Realmio'


  if(getMoviesFilter().length <= 0){
    console.log('CharginData');
  
    axios.all([ axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34b16de8865cfe7e9f791e016f31ffef'), axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=34b16de8865cfe7e9f791e016f31ffef') ]) .then(axios.spread((obj1, obj2) => { 
      obj1.data.results.forEach(items => {
        items.type = 'Popular';
        items.poster_path = 'https://image.tmdb.org/t/p/original/' + items.poster_path;
        SaveMovies(items);
      });

      obj2.data.results.forEach(item => {
        item.type = 'TopRated';
         item.poster_path = 'https://image.tmdb.org/t/p/original/' + item.poster_path;
        SaveMovies(item);
      });
    }));

    }


    interface ThemeContextData {
      getMoviesFilter:any,
    };
  
    const defaultState = {
      getMoviesFilter: getMoviesFilter
    }
  
    const MovieHomeContext = React.createContext(defaultState);
  
    
    export const ProviderTheme = MovieHomeContext.Provider;
    export const ConsumerTheme = MovieHomeContext.Consumer;


   

  export default MovieHomeContext;