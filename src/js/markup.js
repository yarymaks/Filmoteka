import cardTpl from '../templates/card.hbs';
import refs from './refs';

function addCardTpl(items) {
  const markup = cardTpl(items);
  refs.filmsList.insertAdjacentHTML('beforeend', markup);
}
function addCardTplLibrary(items) {
  for (let i = 0; i < items.length; i += 1) {
    items[i]['genresNames'] = items[i]['genresNames'].split(',');
  }
  const markup = cardTpl(items);
  refs.filmsList.insertAdjacentHTML('beforeend', markup);
}

function cleanMarkup() {
  refs.filmsList.innerHTML = '';
}

function showSpinner() {
  refs.spinner.classList.remove('spinner-is-hidden');
}

function hideSpinner() {
  refs.spinner.classList.add('spinner-is-hidden');
}

function showSpinnerInModal() {
  refs.spinnerInModal.classList.remove('spinner-is-hidden');
}

function hideSpinnerInModal() {
  refs.spinnerInModal.classList.add('spinner-is-hidden');
}

export {
  addCardTpl,
  cleanMarkup,
  showSpinner,
  hideSpinner,
  addCardTplLibrary,
  showSpinnerInModal,
  hideSpinnerInModal,
};
