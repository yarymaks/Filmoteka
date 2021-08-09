import pagination from 'paginationjs/dist/pagination.js';
import { addCardTpl, cleanMarkup, showSpinner, hideSpinner } from './markup';
import getItems from './getItems';
import pag from './pagination';
import refs from './refs';

const basicUrl = 'https://api.themoviedb.org/3/';
const key = '8e2d6c50ec8673fce37d0988f16fea97';
const trendingMovieUrl = `${basicUrl}trending/movie/day?api_key=${key}&per_page=12`;
const searchMovieUrl = `${basicUrl}search/movie`;

export default {
  paginationTrendingMovies() {
    $('#pagination-container').pagination({
      dataSource: trendingMovieUrl,
      locator: 'results',
      prevText: '&#8592;',
      nextText: '&#8594;',
      pageSize: 20,
      alias: {
        pageNumber: 'page',
      },

      totalNumberLocator: function (response) {
        return response.total_results;
      },

      hideWhenLessThanOnePage: true,

      ajax: {
        beforeSend: function () {
          cleanMarkup();
          showSpinner();
        },
      },

      callback: function (data, pagination) {
        const items = getItems(data);
        hideSpinner();
        addCardTpl(items);
      },
    });
  },

  paginationSearchMovies(searchQuery) {
    $('#pagination-container').pagination({
      dataSource: `${searchMovieUrl}?query=${searchQuery}&api_key=${key}`,
      locator: 'results',
      prevText: '&#8592;',
      nextText: '&#8594;',
      pageSize: 20,

      alias: {
        pageNumber: 'page',
      },

      totalNumberLocator: function (response) {
        return response.total_results;
      },

      hideWhenLessThanOnePage: true,

      ajax: {
        beforeSend: function () {
          cleanMarkup();
          showSpinner();
        },
      },

      callback: function (data, pagination) {
        const items = getItems(data);
        if (items === undefined) {
          pag.paginationTrendingMovies();
        }
        hideSpinner();
        addCardTpl(items);
      },
    });
  },
};
