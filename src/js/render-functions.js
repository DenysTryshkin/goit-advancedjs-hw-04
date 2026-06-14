import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.js-gallery');
const loader = document.querySelector('.js-loader');

const lightbox = new SimpleLightbox('.gallery-link', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const createGallery = images => {
  const markup = images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
          <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img
                class="gallery-image"
                src="${webformatURL}"
                alt="${tags}"
              />
            </a>

            <ul class="img-info-list">
              <li class="img-info-item">
                <p class="info-type">Likes</p>
                <p class="img-info">${likes}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Views</p>
                <p class="img-info">${views}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Comments</p>
                <p class="img-info">${comments}</p>
              </li>

              <li class="img-info-item">
                <p class="info-type">Downloads</p>
                <p class="img-info">${downloads}</p>
              </li>
            </ul>
          </li>
        `;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
};

export const clearGallery = () => {
  gallery.innerHTML = '';
};

export const showLoader = () => {
  loader.classList.add('is-active');
};

export const hideLoader = () => {
  loader.classList.remove('is-active');
};