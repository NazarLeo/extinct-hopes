/* Extinct Hopes — shared behaviour */
(function () {
  'use strict';

  /* trailer: click poster -> load YouTube only on demand */
  var poster = document.getElementById('trPoster');
  if (poster) {
    poster.addEventListener('click', function () {
      var id = poster.getAttribute('data-yt');
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      f.title = 'Trailer';
      f.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      f.allowFullscreen = true;
      poster.parentNode.appendChild(f);
      poster.remove();
    });
  }

  /* lightbox gallery */
  var gal = document.getElementById('gal');
  var lb = document.getElementById('lb');
  if (!gal || !lb) return;

  var lbImg = document.getElementById('lbi');
  var shots = Array.prototype.slice.call(gal.querySelectorAll('.shot img'));
  var idx = 0;

  function full(src) {
    return src.replace(/=w\d+-h\d+-rw$/, '=w1920-h1080-rw');
  }
  function show(i) {
    idx = (i + shots.length) % shots.length;
    lbImg.src = full(shots[idx].src);
    lbImg.alt = shots[idx].alt || 'Screenshot';
  }
  function open(i) {
    show(i);
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    lb.classList.remove('open');
    lbImg.src = '';
    document.body.style.overflow = '';
  }

  shots.forEach(function (img, i) {
    img.parentNode.addEventListener('click', function () { open(i); });
  });

  document.getElementById('lbx').addEventListener('click', close);
  document.getElementById('lbp').addEventListener('click', function (e) {
    e.stopPropagation(); show(idx - 1);
  });
  document.getElementById('lbn').addEventListener('click', function (e) {
    e.stopPropagation(); show(idx + 1);
  });
  lb.addEventListener('click', function (e) { if (e.target === lb) close(); });

  document.addEventListener('keydown', function (e) {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') show(idx - 1);
    else if (e.key === 'ArrowRight') show(idx + 1);
  });
})();
