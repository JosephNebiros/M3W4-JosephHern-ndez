export default function NotFound() {
    const app = document.getElementById('app');
  
    app.innerHTML = `
      <section>
        <h2>Página no encontrada</h2>
        <p>La ruta que intentaste visitar no existe.</p>
        <a href="/" data-link>Volver al inicio</a>
      </section>
    `;
  }
  
  