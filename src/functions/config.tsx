export const AUTH = {
 endPoint:'https://reqres.in/api'
};
export const Movies = {
    endPoint: 'https://api.themoviedb.org/3',
    ApiKey : '34b16de8865cfe7e9f791e016f31ffef',
    imglink : 'https://image.tmdb.org/t/p/w500/',
    popular : '/movie/popular?language=es-Es',
    topRated : '/movie/top_rated?language=es-Es',
    tvPopular : '/tv/popular?language=es-Es',
    category : '/genre/movie/list?language=es-Es',
    search : '/search/movie?language=es-Es',
    moviewCategory : '/discover/movie?language=es-Es',
}


export const moviesRequest = {
    Popular : `${Movies.endPoint}${Movies.popular}&api_key=${Movies.ApiKey}`,
    Toprated : `${Movies.endPoint}${Movies.topRated}&api_key=${Movies.ApiKey}`,
    Tvpopular: `${Movies.endPoint}${Movies.tvPopular}&api_key=${Movies.ApiKey}`, 
    Category: `${Movies.endPoint}${Movies.category}?&api_key=${Movies.ApiKey}`,
    Search: `${Movies.endPoint}${Movies.search}?&api_key=${Movies.ApiKey}&query=`,

}
