// make the portrait jiggleable for fun
(function () {
  var p = document.querySelector('.portrait');
  if (!p) return;
  var dragging = false, sx = 0, sy = 0, ox = 0, oy = 0;
  p.addEventListener('pointerdown', function (e) {
    dragging = true; sx = e.clientX; sy = e.clientY;
    p.setPointerCapture(e.pointerId);
    p.style.transition = 'none';
  });
  p.addEventListener('pointermove', function (e) {
    if (!dragging) return;
    ox = e.clientX - sx; oy = e.clientY - sy;
    p.style.transform = 'translate(' + ox + 'px, ' + oy + 'px) rotate(' + (ox * 0.05) + 'deg)';
  });
  p.addEventListener('pointerup', function (e) {
    dragging = false;
    p.style.transition = 'transform 0.6s cubic-bezier(.5,1.7,.4,1)';
    p.style.transform = '';
  });
  p.addEventListener('pointercancel', function () {
    dragging = false; p.style.transform = '';
  });
})();
