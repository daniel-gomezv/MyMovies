import React,{FC,createContext} from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import {SaveMovies,getMoviesFilter,getTvFilter,getCategory} from '../functions/Realmio'


  if(getMoviesFilter().length <= 0){
   
    axios.all([ 
      axios.get('https://api.themoviedb.org/3/movie/popular?api_key=34b16de8865cfe7e9f791e016f31ffef'), 
      axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=34b16de8865cfe7e9f791e016f31ffef'), 
      axios.get('https://api.themoviedb.org/3/tv/popular?api_key=34b16de8865cfe7e9f791e016f31ffef'), 
      axios.get('https://api.themoviedb.org/3/genre/movie/list?language=es-Es&api_key=34b16de8865cfe7e9f791e016f31ffef'), 
    ]) .then(axios.spread((obj1, obj2,obj3,obj4) => { 

      obj1.data.results.forEach(item => {
        
        item.type = 'Popular';
        item.poster_path = 'https://image.tmdb.org/t/p/original' + item.poster_path;
        item.backdrop_path = 'https://image.tmdb.org/t/p/original' + item.backdrop_path;
        SaveMovies(item,'Movies');
      });

      obj2.data.results.forEach(item => {
         item.type = 'TopRated';
         item.poster_path = 'https://image.tmdb.org/t/p/original' + item.poster_path;
         item.backdrop_path = 'https://image.tmdb.org/t/p/original' + item.backdrop_path;
        SaveMovies(item,'Movies');
      });

      obj3.data.results.forEach(item => {
        item.type = 'Popular';
        item.poster_path = 'https://image.tmdb.org/t/p/original' + item.poster_path;
        SaveMovies(item,'Tv');
      });

      obj4.data.genres.forEach(item => {
        
        SaveMovies(item,'Category');
      });


    }));

    }


    interface ThemeContextData {
      getMoviesFilter:any,
      getTvFilter:any,
      getCategory:any,
    };
  
    const defaultState = {
      getMoviesFilter: getMoviesFilter,
      getTvFilter: getTvFilter,
      getCategory: getCategory,
    }
  
    const MovieHomeContext = React.createContext(defaultState);
  
    
    export const ProviderTheme = MovieHomeContext.Provider;
    export const ConsumerTheme = MovieHomeContext.Consumer;


   

  export default MovieHomeContext;