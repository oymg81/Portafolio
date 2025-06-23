document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.getElementById('lang-toggle');
  const enContent = document.getElementById('en-content');
  const esContent = document.getElementById('es-content');
  const title = document.getElementById('title');

  let isEnglish = true;

  toggleBtn.addEventListener('click', function () {
    isEnglish = !isEnglish;

    if (isEnglish) {
      enContent.style.display = 'block';
      esContent.style.display = 'none';
      toggleBtn.textContent = 'Español';
      title.textContent = 'Welcome to my portfolio';
    } else {
      enContent.style.display = 'none';
      esContent.style.display = 'block';
      toggleBtn.textContent = 'English';
      title.textContent = 'Bienvenido a mi portafolio';
    }
  });
});
