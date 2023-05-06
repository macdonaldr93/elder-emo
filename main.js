console.log('I am your elder');

/** @type NodeListOf<HTMlAnchorElement> */
const bookmarkElements = document.querySelectorAll('a[data-bookmark]');

bookmarkElements.forEach(element => {
  element.addEventListener('click', event => {
    event.preventDefault();

    if (window.sidebar && window.sidebar.addPanel) {
      // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, '');
    } else if (window.external && 'AddFavorite' in window.external) {
      // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) {
      // Opera Hotlist
      this.title = document.title;
      return true;
    } else {
      // webkit - safari/chrome
      alert(
        'Press ' +
          (navigator.userAgent.toLowerCase().indexOf('mac') != -1
            ? 'Command/Cmd'
            : 'CTRL') +
          ' + D to bookmark this page.',
      );
    }
  });
});

/** @type HTMLFormElement */
const songRequestForm = document.getElementById('SongRequestForm');

if (songRequestForm) {
  songRequestForm.addEventListener('submit', event => {
    event.preventDefault();
    alert('Song request received. The elders will review');
  });
}
