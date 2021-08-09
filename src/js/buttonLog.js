import refs from './refs';
// не явное неравенство
export function buttonLog() {
  const addToWatchedBtn = refs.modal.querySelector('#add-to-watched');
  const addToQueueBtn = refs.modal.querySelector('#add-to-queue');
  const removeBtn = refs.modal.querySelector("#remove");
    if (refs.header.className === ('header')) {
    addToWatchedBtn.classList.remove('visually-hidden');
        addToQueueBtn.classList.remove('visually-hidden');
        removeBtn.classList.add('visually-hidden'); 
        if (removeBtn.className === ('visually-hidden')) {
            removeBtn.closest('.button__modal__container').classList.add('visually-hidden');
        }
  }else if (refs.header.className === ('header library')) {
        removeBtn.classList.remove('visually-hidden');
      if (refs.watched.className === ('button button--watched')) {
        addToWatchedBtn.classList.add('visually-hidden');
        addToQueueBtn.classList.remove('visually-hidden');
        if (addToWatchedBtn.className === ('button button--watched visually-hidden')) {
          addToWatchedBtn.closest('.button__modal__container').classList.add('visually-hidden');
          removeBtn.style.marginLeft = "15px";
        }
     } else if (refs.queue.className === ('button button--watched')) {
        addToWatchedBtn.classList.remove('visually-hidden');
        addToQueueBtn.classList.add('visually-hidden');
        if (addToQueueBtn.className === ('button button--modal visually-hidden')) {
        addToQueueBtn.closest('.button__modal__container').classList.add('visually-hidden');
        }
      }
  }
}