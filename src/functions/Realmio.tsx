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

  const dbMovies = {
    name: 'dbMovies',
    properties: {
      token:     'string',
      movies: 'Movies[]',
    }
  };


  const realm = new Realm({ schema: [
    movies,dbMovies
  ]});


  export const getMoviesFilter = (filter:string = '') => {
    
    const movies = realm.objects('Movies');
    
    if(filter != ''){
         return movies.filtered("type == '" + filter + "'");
    }else{
        return movies;
    }
  }

  export const SaveMovies = (obj:object) => {
    
    try {
        realm.write(() => {
            const movie = realm.create('Movies', obj);
          });

    } catch (error) {
        
    }
  

  }
  
