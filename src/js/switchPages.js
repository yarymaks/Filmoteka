import pagination from './pagination';
import refs from '../js/refs';
import { addCardTplLibrary } from './markup';
window.onload = () => {
  refs.libraryPage.classList.add('visually-hidden');
  refs.home.classList.add('current');
  refs.error.classList.add('visually-hidden');
  pagination.paginationTrendingMovies();
  refs.notification.classList.add('visually-hidden');
};
refs.myLibrary.addEventListener('click', libraryPage);
refs.home.addEventListener('click', homePage);
refs.logo.addEventListener('click', homePage);
function homePage(event) {
  refs.libraryPage.classList.add('visually-hidden');
  refs.homepage.classList.remove('visually-hidden');
  refs.home.classList.add('current');
  refs.myLibrary.classList.remove('current');
  refs.error.classList.add('visually-hidden');
  refs.filmsList.innerHTML = '';
  pagination.paginationTrendingMovies();
  refs.watched.removeEventListener('click', watchedList);
  refs.queue.removeEventListener('click', queueList);
  refs.header.classList.remove("library");
  refs.paginator.classList.remove('visually-hidden');
  refs.notification.classList.add('visually-hidden');
}
function libraryPage(event) {
  refs.homepage.classList.add('visually-hidden');
  refs.libraryPage.classList.remove('visually-hidden');
  refs.header.classList.add("library");
  refs.myLibrary.classList.add('current');
  refs.home.classList.remove('current');
  refs.filmsList.innerHTML = '';
  watchedList();
  refs.watched.addEventListener('click', watchedList);
  refs.queue.addEventListener('click', queueList);
  refs.paginator.classList.add('visually-hidden');
}
export function watchedList(event) {
  refs.watched.classList.add('button--watched');
  refs.queue.classList.remove('button--watched');
  getLocalItems("watched");
}
export function queueList(event) {
  refs.queue.classList.add('button--watched');
  refs.watched.classList.remove('button--watched');
  getLocalItems("queue");
}
function getLocalItems(selectedButton) {
  if ((localStorage.getItem(`${selectedButton}`)) === null){
    refs.filmsList.innerHTML = '';
    refs.notification.classList.remove('visually-hidden');
    return;
  } 
    refs.filmsList.innerHTML = '';
    refs.notification.classList.add('visually-hidden');
    addCardTplLibrary(JSON.parse(localStorage.getItem(`${selectedButton}`)));
}