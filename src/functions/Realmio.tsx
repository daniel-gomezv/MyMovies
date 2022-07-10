const Realm = require('realm');


const movies = {
    name: 'Movies',
    primaryKey:'id',
    properties: {
        adult: 'bool',
        backdrop_path: "string",
        genre_ids: 'int[]',
        id: 'int',
        original_language: "string",
        original_title: "string",
        overview : "string",
        popularity: 'float',
        poster_path: "string",
        release_date: "date",
        title: "string",
        video: 'bool',
        vote_average: 'float',
        vote_count: 'int',
        type:'string',
    }
  };


  const Tv = {
    name: 'Tv',
    primaryKey:'id',
    properties: {
        backdrop_path: "string",
        genre_ids: 'int[]',
        id: 'int',
        name: "string",
        origin_country: "string[]",
        original_language: "string",
        overview : "string",
        original_name: "string",
        popularity: 'float',
        poster_path: "string",
        first_air_date: "date",
        vote_average: 'float',
        vote_count: 'int',
        type:'string',
    }
  };


  const Category = {
    name: 'Category',
    primaryKey:'id',
    properties: {
      name:'string',
      id:'int',
    }
  };


  const dbMovies = {
    name: 'dbMovies',
    properties: {
      token:     'string',
      movies: 'Movies[]',
      tv: 'Tv[]',
      category: 'Category[]',
    }
  };


  const realm = new Realm({ schema: [
    movies,dbMovies,Tv,Category
  ]});


  export const getMoviesFilter = (filter:string = '') => {
    
    const movies = realm.objects('Movies');
    
    if(filter != ''){
         return movies.filtered("" + filter + "");
    }else{
        return movies;
    }
  }


  export const getTvFilter = (filter:string = '') => {
    
    const tvShow = realm.objects('Tv');
    
    if(filter != ''){
         return tvShow.filtered("" + filter +"");
    }else{
        return tvShow;
    }
  }


  export const getCategory = () => {
    
    const tvShow = realm.objects('Category');
    return tvShow;
  }

  export const SaveMovies = (obj:object,schema:string) => {
    
    try {
        realm.write(() => {
            const movie = realm.create(schema, obj);
          });

    } catch (error) {
        console.log(error);
    }


    

  }
  
