const Realm = require('realm');


const movies = {
    name: 'Movies',
    properties: {
        adult: 'bool',
        backdrop_path: "string",
        genre_ids: 'list',
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



  export const getMoviesFilter = (filter:string) => {
    const movies = Realm.objects('Movies').filtered('type = ' + filter);

    return movies;
    
  }

  export const SaveMovies = (obj:object) => {
    
    Realm.open({schema: [movies, dbMovies]})
    .then(realm => {
      // Create Realm objects and write to local storage
      realm.write(() => {
        const movie = realm.create('movies', obj);
      });
  
      realm.close();
    })
    .catch(error => {
      console.log(error);
    });


  }
  
