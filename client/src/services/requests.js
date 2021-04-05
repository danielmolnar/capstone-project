const APIKEY = process.env.REACT_APP_APIKEY;

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=en-US,`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
  fetchSearch: `search/movie?api_key=${APIKEY}&language=en-US&query=`,
  fetchShows: `search/tv?api_key=${APIKEY}&language=en-US&query=`,
};

export default requests;
