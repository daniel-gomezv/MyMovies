import moment from "moment";
import 'moment/min/locales/';
import 'moment-timezone';
moment.locale('es');
import React from "react";
import { Image } from "react-native";
import axios from 'axios';
import {moviesRequest,Movies} from './config';
import {SaveMovies,getMoviesFilter,getTvFilter,getCategory} from '../functions/Realmio'




  

 export const formatDate = (date:string) => {
    
    return moment(date).format('LLLL');
  }


  export const rateVote = (rate:number) => {

    let rateOperation:number = rate * 10;
    let resultRate :number =  (rateOperation *  5) / 100;
    let resultRateRand:number = Math.round(resultRate);

    var component = new Array(); 
  

    for (let i = 0; i < resultRateRand; i++) {
        component.push( <Image source={require('../assets/img/start.png')} style={{  width: 25, height: 25}} key={i+rate}/>)
      }
    
      for (let i = resultRateRand ; i < 5; i++) {
        component.push( <Image source={require('../assets/img/start_blank.png')} style={{  width: 25, height: 25}} key={i+rate}/>)
      }

    return {
        rate:resultRate,
        component:component
    };

  }

  export const filterMap = (obj:any,item:string) => {

    const idsQuery = obj.map(id => `${item} = ${id}`).join(' OR ');

    return idsQuery
} 

export const PreloaderData= async () => {

  if(getMoviesFilter().length <= 0){
   
    axios.all([ 
      axios.get(moviesRequest.Popular), 
      axios.get(moviesRequest.Toprated), 
      axios.get(moviesRequest.Tvpopular), 
      axios.get(moviesRequest.Category), 
    ]) .then(axios.spread((obj1, obj2,obj3,obj4) => { 

      obj1.data.results.forEach(item => {
        
        item.type = 'Popular';
        SaveMovies(item,'Movies');
      });

      obj2.data.results.forEach(item => {
         item.type = 'TopRated';
        SaveMovies(item,'Movies');
      });

      obj3.data.results.forEach(item => {
        item.type = 'Popular';
        SaveMovies(item,'Tv');
      });

      obj4.data.genres.forEach(item => {
        
        SaveMovies(item,'Category');
      });


    }));

    }

}

export const requestAxios = async (endpoint:string, method:string = 'get') => {


  console.log(endpoint)
  
  const  resp = await axios( {
        method: method,
        url: endpoint,
      })


      return resp;

}

export const loadmore = (obj:object) =>{
  
    let pagesCurrent:any; 
    let enpoint:string;

    let shema:string = (obj.shema == "Tv") ? "Tv" : "Movies";

    switch (obj.endpoint) {
      case "Popular":

        pagesCurrent= Math.round((getMoviesFilter(obj.filter).length / 20) ) + 1 ;
        enpoint = moviesRequest.Popular + "&page=" + pagesCurrent;

      break;

       case "Tvpopular":
        pagesCurrent= Math.round((getTvFilter(obj.filter).length / 20) ) + 1 ;
        enpoint = moviesRequest.Tvpopular + "&page=" + pagesCurrent;
      break;
    
    }

    try {
      requestAxios(enpoint,'get').then(resp => {
        
          
                resp.data.results.forEach(item => {
                    item.type = obj.type;
                    SaveMovies(item,shema);
                  });
          
        }).catch(err => {
            // Handle Error Here
            console.error(err);
        });
    } catch (error) {
        
    }
 

}