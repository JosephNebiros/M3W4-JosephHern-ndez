import {
    validateUserData,
    saveUserData,
    loadUserData,
    clearUserData,
    incrementSessionCounter
  } from './formLogic.js';
  
  export default function Form() {
    const app = document.getElementById('app');
  
    app.innerHTML = `
      <h2>Formulario de Usuario</h2>
      <form id="userForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" name="name" required />
  
        <label for="age">Edad:</label>
        <input type="number" id="age" name="age" required />
  
        <div class="buttons">
          <button type="submit">Guardar Datos</button>
          <button type="button" id="clearBtn">Limpiar Datos</button>
        </div>
      </form>
  
      <div id="output" class="output"></div>
    `;
  
    const form = document.getElementById('userForm');
    const output = document.getElementById('output');
    const clearBtn = document.getElementById('clearBtn');
  
    // Mostrar datos almacenados
    const data = loadUserData();
    if (data) {
      output.textContent = `Datos guardados: ${data.name}, ${data.age} años`;
    } else {
      output.textContent = 'No hay información almacenada.';
    }
  
    // Guardar datos
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const name = form.name.value;
      const age = form.age.value;
  
      if (!validateUserData(name, age)) {
        output.textContent = 'Por favor ingresa un nombre y una edad válidos.';
        return;
      }
  
      saveUserData(name, age);
      output.textContent = `Datos guardados: ${name}, ${age} años`;
  
      incrementSessionCounter();
    });
  
    // Limpiar datos
    clearBtn.addEventListener('click', () => {
      clearUserData();
      output.textContent = 'Datos eliminados del almacenamiento.';
    });
  }