const requests = {
  fetchTrending: '/trending',
  fetchNetflixOriginals: '/netflix',
  fetchTopRated: '/toprated',
  fetchActionMovies: '/action',
  fetchComedyMovies: '/comedy',
  fetchHorrorMovies: '/horror',
  fetchDocumentaries: '/documentaries',
  fetchMovies: '/searchmovies',
  fetchShows: '/searchshows',
  fetchUsers: `/users`,
  user: `/users/`,
};

export default requests;

// fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
// fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
// fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
// fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
// fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
// fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
// fetchMovies: `search/movie?api_key=${APIKEY}&language=en-US&query=`,
// fetchShows: `search/tv?api_key=${APIKEY}&language=en-US&query=`,

// https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&query=&page=1&include_adultp=false
