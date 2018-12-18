import * as c from './../constants';
const moviedb_api_key = '?api_key=4ecfbbe47d132ddcc6b98ce77d71b265';

export function getPopularShows() {
  return async function(dispatch) {
    try {
      const response = await fetch(`${c.API_URL}/trending/tv/week${moviedb_api_key}`);
      const json = await response.json();
      dispatch({
        type: c.GET_TRENDING,
        data: json.results
      });
    }
    catch (error) {
      console.log('An error occurred.', error);
    }
  }
}

export function getGenres() {
  return async function(dispatch) {
    try {
      const response = await fetch(`${c.API_URL}/genre/tv/list${moviedb_api_key}`);
      const json = await response.json();
      dispatch({
        type: c.GET_GENRES,
        data: json.genres
      });
    }
    catch (error) {
      console.log('An error occurred.', error);
    }
  }
}

export function discoverGenre(id, pageNumber = 1) {
  return async function(dispatch) {
    try {
      const response = await fetch(`${c.API_URL}/discover/tv${moviedb_api_key}&language=en-US&sort_by=popularity.desc&page=${pageNumber}&with_genres=${id}`);
      const json = await response.json();
      dispatch({
        type: c.DISCOVER_GENRE,
        id,
        results: json.results, 
        page: json.page
      });
    }
    catch (error) {
      console.log('An error occurred', error);
    }
  }
}