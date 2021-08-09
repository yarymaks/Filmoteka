import modalTpl from '../templates/modal.hbs';
import refs from '../js/refs';
import apiModalInfo from './fetchMovies';
import addToLibrary from './localStorage';
import { buttonLog } from './buttonLog';
import { showSpinnerInModal, hideSpinnerInModal } from './markup';
import teamModalTpl from '../templates/team.hbs'
import footerTpl from '../templates/footer.hbs'
import team from '../js/team';


refs.openModal.addEventListener('click', openModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdropClick.addEventListener('click', onBackdropClick);


function openModal(event) {
  showSpinnerInModal();
  const movie = event.target;
  const movieProperties = {
    title: movie.alt,
    id: movie.dataset.id,
    poster_path: movie.dataset.poster,
    genresNames: movie.dataset.genres,
    year: movie.dataset.year,
    rating: movie.dataset.rating,
  };
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.target.style.PointerEvent = 'none';
  apiModalInfo.movieId = event.target.dataset.id;
  refs.body.classList.add('show-modal');
  document.querySelector('html').style.overflow = 'hidden';

  apiModalInfo
    .getFullInfo()
    .then(renderModalCard)
    .then(() => {
      addToLibrary(movieProperties);
    })
    .catch(error => error)
    .finally(() => {
      hideSpinnerInModal();
    });

  window.addEventListener('keydown', onPressEscape);
}

function onBackdropClick(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onCloseModal() {
  refs.body.classList.remove('show-modal');
  document.querySelector('html').style.overflowY = 'scroll';
  refs.modal.innerHTML = '';
  window.removeEventListener('keydown', onPressEscape);
}

function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
}
function renderModalCard(data) {
  const markup = modalTpl(data);
  refs.modal.insertAdjacentHTML('beforeend', markup);
  buttonLog();
}
