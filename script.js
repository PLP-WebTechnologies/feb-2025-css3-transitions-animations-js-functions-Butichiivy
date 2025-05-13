// Animation trigger on button click
const animateBtn = document.getElementById('change-text-btn');
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('shake');
  setTimeout(() => {
    animateBtn.classList.remove('shake');
  }, 500);
});

// Save theme preference to localStorage
const themeSelector = document.getElementById('theme-selector');
const savedTheme = localStorage.getItem('chronicare-theme');

if (savedTheme) {
  document.body.classList.add(`${savedTheme}-theme`);
  themeSelector.value = savedTheme;
} else {
  document.body.classList.add('default-theme');
}

themeSelector.addEventListener('change', () => {
  const selectedTheme = themeSelector.value;
  document.body.className = ''; // clear all classes
  document.body.classList.add(`${selectedTheme}-theme`);
  localStorage.setItem('chronicare-theme', selectedTheme);
});
