const toggleBtn = document.getElementById('lang-toggle');
const enContent = document.getElementById('en-content');
const esContent = document.getElementById('es-content');

toggleBtn.addEventListener('click', () => {
  const isEnglish = enContent.style.display !== 'none';

  if (isEnglish) {
    enContent.style.display = 'none';
    esContent.style.display = 'block';
    toggleBtn.textContent = 'English';
  } else {
    enContent.style.display = 'block';
    esContent.style.display = 'none';
    toggleBtn.textContent = 'Español';
  }
});
