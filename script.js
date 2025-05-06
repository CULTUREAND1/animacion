// Crear escena, cámara y renderizador
const escena = new THREE.Scene();
escena.background = new THREE.Color(0x111111);

const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camara.position.z = 5;

const renderizador = new THREE.WebGLRenderer({ canvas: document.getElementById("lienzo3D") });
renderizador.setSize(window.innerWidth, window.innerHeight);

// Cubo
const geometria = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({ color: 0x00ffcc });
const cubo = new THREE.Mesh(geometria, material);
escena.add(cubo);

// Luz
const luz = new THREE.PointLight(0xffffff, 1);
luz.position.set(10, 10, 10);
escena.add(luz);

// Controles de cámara
const controles = new THREE.OrbitControls(camara, renderizador.domElement);

// Animación
function animar() {
  requestAnimationFrame(animar);
  cubo.rotation.x += 0.01;
  cubo.rotation.y += 0.01;
  controles.update();
  renderizador.render(escena, camara);
}

animar();

// Adaptar a pantalla
window.addEventListener('resize', () => {
  camara.aspect = window.innerWidth / window.innerHeight;
  camara.updateProjectionMatrix();
  renderizador.setSize(window.innerWidth, window.innerHeight);
});
