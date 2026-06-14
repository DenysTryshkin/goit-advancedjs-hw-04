import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.js-form'),
};

function onSearchFormSubmit(event) {
  event.preventDefault();

  const { target: searchForm } = event;

  const userQuery = searchForm.elements['search-text'].value.trim();

  if (!userQuery) {
    iziToast.warning({
      message: 'Search field cannot be empty. Please enter a keyword.',
      position: 'topRight',
    });

    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(userQuery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });

        return;
      }

      createGallery(data.hits);
    })

    .catch(err => {
      iziToast.error({
        message: err.message || 'Failed to load images!',
        position: 'topRight',
      });
    })

    .finally(() => {
      hideLoader();

      searchForm.reset();
    });
}

refs.form.addEventListener('submit', onSearchFormSubmit);