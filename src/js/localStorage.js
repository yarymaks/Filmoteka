import refs from './refs';
import { queueList } from './switchPages';
import {watchedList} from './switchPages';


function addToLibrary(movieProperties) {
  const addToWatchedBtn = refs.modal.querySelector('#add-to-watched');

  addToWatchedBtn.addEventListener('click', () => {
    updateLocalStorage(movieProperties, 'watched');
  });
  
  const addToQueueBtn = refs.modal.querySelector('#add-to-queue');
  addToQueueBtn.addEventListener('click', () => {
      updateLocalStorage(movieProperties, 'queue');
  }
  );

  const removeBtn = refs.modal.querySelector('#remove');
  removeBtn.addEventListener('click', () => {
    if (refs.header.className === ('header library')) {
      if (refs.watched.className === ('button button--watched')){
        removeLocalStorage(movieProperties, 'watched');
        watchedList(); 
      } else if (refs.queue.className === ('button button--watched')) {
        removeLocalStorage(movieProperties, 'queue');
        queueList();
      }
    }
  });
}

function updateLocalStorage(value, key) {
  const wasAdded = refs.modal.querySelector(`#add-to-${key}`);
  const arr = JSON.parse(localStorage.getItem(key)) || [];
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i]["title"] === value.title) {
      wasAdded.textContent = "was added";
      return;
    }
  }
  arr.push(value);
  wasAdded.textContent = `Added to ${key}`;
  localStorage.setItem(key, JSON.stringify(arr));
}

function removeLocalStorage(value, key) {
  const removeFilm = refs.modal.querySelector('#remove');
  const arr = JSON.parse(localStorage.getItem(key)) || [];
  for (let i = 0; i < arr.length; i += 1){
    if (arr[i]["title"] === value.title) {
      arr.splice(i, 1); 
      localStorage.setItem(key, JSON.stringify(arr));
      removeFilm.textContent = "removed";
  if (arr.length === 0) {
    localStorage.removeItem(key);
  }
      return ;
    }
  }
  
  removeFilm.textContent = `Please add film to ${key}`;
  removeFilm.classList.add('visually-hidden');
  const wasAdded = refs.modal.querySelector(`#add-to-${key}`);
  wasAdded.closest('.button__modal__container').classList.remove('visually-hidden');
  wasAdded.classList.remove('visually-hidden');
}

export default addToLibrary;
