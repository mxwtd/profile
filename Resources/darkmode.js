document.addEventListener('DOMContentLoaded', function() {
  const themeLink = document.querySelector('#theme');
  const themeMode = localStorage.getItem('themeMode') || 'light';

  if (themeMode === 'dark') {
    themeLink.setAttribute('href', 'Resources/CSS/darkstyle.css');
  } else {
    themeLink.setAttribute('href', 'Resources/CSS/style.css');
  }
});

function toggleTheme() {
    var theme = document.getElementsByTagName('link')[0];

    if (theme.getAttribute('href') == 'Resources/CSS/style.css') {
        theme.setAttribute('href', 'Resources/CSS/darkstyle.css');
    } else {
        theme.setAttribute('href', 'Resources/CSS/style.css');
    }
}

window.onload = initate;
