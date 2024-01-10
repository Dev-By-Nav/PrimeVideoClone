const API_KEY = 'ab85e0a373d56b58be2734e06f7713d7'

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchPremiere: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
  };

  export default requests;


//   https://api.themoviedb.org/3/trending/all/week?api_key=ab85e0a373d56b58be2734e06f7713d7&language=en-US

