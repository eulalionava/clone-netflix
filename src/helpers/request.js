const API_KEY = '8fec448c533621996b193b90eccf5e77';

export const request = {
    fetchTrending:`/trending/all/week?api_key=${ API_KEY }&language=es=US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${ API_KEY }&with_networks=123`,
    fetchTopRated:`/movie/top_rated?api_key=${ API_KEY }&language=es=US`,
    fetchActionsMovies:`/discover/movie?api_key=${ API_KEY }&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${ API_KEY }&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${ API_KEY }&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${ API_KEY }&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${ API_KEY }&with_genres=99`,
}