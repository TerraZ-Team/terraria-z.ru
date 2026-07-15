(() => {
  'use strict';

  const IMAGE_COUNT = 6;
  const FALLBACK_IMAGE = '/img/jpg/1.jpg';
  const picture = document.getElementById('picture');

  if (!picture) {
    return;
  }

  let fallbackUsed = false;

  const reveal = () => {
    window.requestAnimationFrame(() => {
      picture.classList.add('is-visible');
    });
  };

  picture.addEventListener('load', reveal);
  picture.addEventListener('error', () => {
    if (fallbackUsed) {
      reveal();
      return;
    }

    fallbackUsed = true;
    picture.src = FALLBACK_IMAGE;
  });

  const imageNumber = Math.floor(Math.random() * IMAGE_COUNT) + 1;
  picture.src = `/img/jpg/${imageNumber}.jpg`;

  if (picture.complete && picture.naturalWidth > 0) {
    reveal();
  }
})();
