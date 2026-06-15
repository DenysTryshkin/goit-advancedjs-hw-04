import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const refs = {
  form: document.querySelector('.js-form'),
  loadMoreButton: document.querySelector('.js-load-more-button'),
};

let currentQuery = '';
let page = 1;
const perPage = 15;

async function onSearchFormSubmit(event) {
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

  currentQuery = userQuery;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / perPage);

    if (page < totalPages) {
      showLoadMoreButton();
    }
  } catch (err) {
    iziToast.error({
      message: err.message || 'Failed to load images!',
      position: 'topRight',
    });
  } finally {
    hideLoader();

    searchForm.reset();
  }
}

async function onLoadMoreButtonClick() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(currentQuery, page);

    createGallery(data.hits);
    smoothScroll();

    const totalPages = Math.ceil(data.totalHits / perPage);

    if (page >= totalPages) {
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });

      return;
    }

    showLoadMoreButton();
  } catch (err) {
    iziToast.error({
      message: err.message || 'Failed to load images!',
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function smoothScroll() {
  const galleryCard = document.querySelector('.gallery-item');

  if (!galleryCard) {
    return;
  }

  const cardHeight = galleryCard.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

refs.form.addEventListener('submit', onSearchFormSubmit);
refs.loadMoreButton.addEventListener('click', onLoadMoreButtonClick);