export default function Home() {
    const app = document.getElementById('app');
  
    app.innerHTML = `
      <section>
        <h1>Bienvenido</h1>
        <p>Esta es una aplicación web sencilla donde puedes:</p>
        <ul>
          <li>Guardar tu nombre y edad en el navegador</li>
          <li>Visualizar tus datos al recargar la página</li>
          <li>Contar tus interacciones durante la sesión</li>
          <li>Limpiar los datos cuando lo necesites</li>
        </ul>
        <p>Usa el menú de navegación para comenzar.</p>
      </section>
    `;
  }
  