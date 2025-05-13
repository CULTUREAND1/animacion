// Generar estrellas aleatorias
const sky = document.getElementById('sky');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = Math.random() * 100 + 'vh';
  star.style.left = Math.random() * 100 + 'vw';
  star.style.animationDelay = Math.random() * 2 + 's';
  sky.appendChild(star);
}

// Lanzar meteorito aleatorio cada 8 segundos
setInterval(() => {
  const meteor = document.createElement('div');
  meteor.classList.add('meteor');
  meteor.style.top = Math.random() * 50 + 'vh';
  meteor.style.left = '-100px';
  sky.appendChild(meteor);

  setTimeout(() => {
    meteor.remove();
  }, 1200);
}, 8000);