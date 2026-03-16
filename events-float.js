(function () {
  'use strict';
  var btn = document.createElement('button');
  btn.className = 'events-float';
  btn.setAttribute('aria-label', 'Upcoming Events');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span class="events-tooltip">Upcoming Events</span>' +
    '<span class="events-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>' +
    '<div class="events-panel" role="dialog" aria-labelledby="events-title" aria-hidden="true">' +
    '<h3 id="events-title">Family & Personal Issue Workshop</h3>' +
    '<p class="event-detail">7th May 2026</p>' +
    '<p class="event-detail">6pm - 9pm</p>' +
    '<a href="https://www.tickettailor.com/events/sarapossconstellations/2109470" class="btn" target="_blank" rel="noopener">Book tickets</a>' +
    '</div>';
  document.body.appendChild(btn);

  btn.addEventListener('click', function (e) {
    if (e.target.closest('.btn')) return;
    var expanded = btn.classList.toggle('expanded');
    btn.setAttribute('aria-expanded', expanded);
    btn.querySelector('.events-panel').setAttribute('aria-hidden', !expanded);
  });

  document.addEventListener('click', function (e) {
    if (!btn.classList.contains('expanded')) return;
    if (btn.contains(e.target)) return;
    btn.classList.remove('expanded');
    btn.setAttribute('aria-expanded', 'false');
    btn.querySelector('.events-panel').setAttribute('aria-hidden', 'true');
  });
})();
