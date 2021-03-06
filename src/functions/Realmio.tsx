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
    primaryKey:'id',
    properties: {
      token:     'string',
      id: 'int'
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


  export const getCategory = (filter:any = "",obj:object = {}) => {
    
    const Cat = realm.objects('Category');

    if(filter == ""){
      return Cat;
    }else{
      return Cat.filtered(filter);
    }
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



  export const saveToken = (token:string) => {
    
    try {
        realm.write(() => {
            const movie = realm.create("dbMovies", {token:token, id:1});
          });

    } catch (error) {
        console.log(error);
    }

  }


  export const isLogin = () => {
    
    const login = realm.objects('dbMovies');

    const isLogin = (login.length > 0 ) ? true : false;

    return isLogin;
  }

  export const cleanLogin = () => {
    const Cat = realm.objects('Category');
    const Movies = realm.objects('Movies');
    const Tv = realm.objects('Tv');
    const dbMovies = realm.objects('dbMovies');

    realm.write(() => {
      realm.deleteAll()
    });
    
  }
  
