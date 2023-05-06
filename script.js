const modoEscuroBtn = document.querySelector('#modo-escuro');
const body = document.querySelector('body');

modoEscuroBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (modoEscuroBtn.textContent === 'Modo Escuro') {
    modoEscuroBtn.textContent = 'Modo Claro';
  } else {
    modoEscuroBtn.textContent = 'Modo Escuro';
  }
});

const button = document.querySelector('#toggle-dark-mode');

button.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});