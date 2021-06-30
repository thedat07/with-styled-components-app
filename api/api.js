import axios from "axios";

const getDataPopularMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=0aecc06bb4fadb06b5f071fef0c2ce6d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=10b76682efbb6e9b2390aa285f5dd29f`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataNowPlayingMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataTopRatedMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataUpcomingMovies = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataPopularTV = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/tv/popular?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getAiringTodayTV = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/tv/airing_today?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&page==${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getOnTheAirTV = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getTopRatedTV = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/tv/top_rated?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataTrendingTV = async () => {
  const url = `https://api.themoviedb.org/3/trending/tv/day?api_key=10b76682efbb6e9b2390aa285f5dd29f`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataDetailMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=10b76682efbb6e9b2390aa285f5dd29f&&language=en-US&append_to_response=videos,images&include_image_language=en,null`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataCreditsMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const searchDataMovie = async (movieName = "", page = 1) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=cfe422613b250f702980a3bbf9e90716&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const searchDataPerson = async (name = "", page = 1) => {
  const url = `https://api.themoviedb.org/3/search/person?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&query=${name}&page=1&include_adult=false&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataGenresMovie = async (id, page = 1) => {
  const url = `https://api.themoviedb.org/3/discover/movie?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${id}&with_watch_monetization_types=flatrate`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataRecommendationsMovie = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US&page=1`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};
const getDataPerson = async (page = 1) => {
  const url = `https://api.themoviedb.org/3/trending/person/day?api_key=10b76682efbb6e9b2390aa285f5dd29f&page=${page}`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
};

const getDataPeopleDetailsById = async (id) => {
  const url = `https://api.themoviedb.org/3/person/${id}?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}
const getDataPeopleTimeLineById = async (id) => {
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}
const getDataPeopleMovieById = async (id) => {
  const url = `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=10b76682efbb6e9b2390aa285f5dd29f&language=en-US`;
  const response = await axios.get(url);
  const result = response.status === 200 ? response.data : {};
  return result;
}

export const api = {
  getDataPopularMovies,
  getDataNowPlayingMovies,
  getDataTopRatedMovies,
  getDataUpcomingMovies,
  getDataPopularTV,
  getDataTrendingTV,
  getDataTrendingMovies,
  getAiringTodayTV,
  getOnTheAirTV,
  getTopRatedTV,
  getDataDetailMovie,
  getDataCreditsMovie,
  searchDataMovie,
  getDataGenresMovie,
  getDataRecommendationsMovie,
  getDataPerson,
  getDataPeopleDetailsById,
  getDataPeopleTimeLineById,
  getDataPeopleMovieById,
  searchDataPerson
};
