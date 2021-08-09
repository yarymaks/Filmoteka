import footerTpl from '../templates/footer.hbs';
import refs from '../js/refs';

function renderFooter() {
  const markup = footerTpl();
  refs.body.insertAdjacentHTML('beforeend', markup);
}

renderFooter();
