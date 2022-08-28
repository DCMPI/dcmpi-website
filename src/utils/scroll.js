/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const requestAnimationFrame = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame;

function easeOutQuart(t) {
  return 1 - (--t) * t * t * t;
}

export function scrollTo(to) {
  const start = window.scrollY || window.pageYOffset;
  const time = Date.now();
  const duration = Math.abs(start - to) / 2;

  (function step() {
    const dx = Math.min(1, (Date.now() - time) / duration);
    const pos = start + (to - start) * easeOutQuart(dx);

    window.scrollTo(0, pos);

    if (dx < 1) {
      requestAnimationFrame(step);
    }
  }());
}
