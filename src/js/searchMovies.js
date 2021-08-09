import refs from './refs';
import pagination from './pagination';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const searchQuery = form.elements.query.value;
  const trimSearchQuery = searchQuery.trim();
  // debugger
  if (!trimSearchQuery) {
    refs.error.classList.remove('visually-hidden');
    return;
  } else {
    refs.error.classList.add('visually-hidden');
    refs.filmsList.innerHTML = '';
    pagination.paginationSearchMovies(searchQuery);
  }
  form.reset();
});
