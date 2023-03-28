'use strict';

window.addEventListener('scroll', e => {
  // eslint-disable-next-line
  document.body.style.cssText = `--scrollTop: ${scrollY}px`;
});
