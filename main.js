import Home from './pages/home.js';
import Form from './pages/form.js';
import Info from './pages/info.js';
import NotFound from './pages/notfound.js';
// Definir rutas
const routes = {
  '/': Home,
  '/form': Form,
  '/info': Info,
};
// Renderizador principal
function renderRoute() {
  const path = window.location.pathname;
  console.log('Ruta actual:', path);
  const page = routes[path] || NotFound;
  document.getElementById('app').innerHTML = '';
  page();
}
// Cambiar ruta sin recargar la página
function navigateTo(url) {
  window.history.pushState({}, '', url);
  renderRoute();
}
// Interceptar clics en enlaces internos
document.addEventListener('click', (e) => {
  if (e.target.matches('a[data-link]')) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    navigateTo(href);
  }
});

// Manejar navegación con botones del navegador (atrás/adelante)
window.addEventListener('popstate', renderRoute);

// Cargar la ruta inicial
document.addEventListener('DOMContentLoaded', renderRoute);
