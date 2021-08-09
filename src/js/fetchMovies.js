const basicUrl = 'https://api.themoviedb.org/3/';
const key = '8e2d6c50ec8673fce37d0988f16fea97';
const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;
const searchMovieUrl = `${basicUrl}search/movie/?api_key=${key}`;

export default {
  searchQuery: 'batman',
  _movieId: 321528,

  fetchTrendingMovies() {
    return fetch(trendingMovieUrl)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Error Fetching data');
      })
      .then(({ results }) => {
        return results;
      })
      .catch(error => {
        console.log(error);
      });
  },
  searchMovies() {
    return fetch(`${searchMovieUrl}&query=${this.query}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Error Fetching data');
      })
      .then(({ results }) => {
        return results;
      })
      .catch(error => {
        console.log(error);
      });
  },
  getFullInfo() {
    return fetch(`${basicUrl}movie/${this.movieId}?api_key=${key}`)
      .then(response => {
        if (response.ok) return response.json();
        throw new Error('Error Fetching data');
      })
      .catch(error => {
        console.log(error);
      });
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
  get movieId() {
    return this._movieId;
  },
  set movieId(value) {
    this._movieId = value;
  },
};
