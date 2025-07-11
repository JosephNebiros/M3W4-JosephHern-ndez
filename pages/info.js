export default function Info() {
    const app = document.getElementById('app');
  
    app.innerHTML = `
      <section>
        <h2>¿Qué puedes hacer en esta página?</h2>
        <ul>
          <li>Ir a la pestaña "Formulario" para ingresar tu nombre y edad.</li>
          <li>Guardar estos datos en el navegador. Se mantendrán al recargar la página.</li>
          <li>Ver cuántas veces has interactuado con el formulario durante tu sesión actual.</li>
          <li>Limpiar los datos almacenados cuando lo desees usando el botón "Limpiar Datos".</li>
        </ul>
      </section>
    `;
  }
  