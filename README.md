# M3W4 - Proyecto SPA con Local Storage

Este proyecto es una aplicación web interactiva desarrollada como parte de la hoja de trabajo del **Módulo 3 Semana 4**, enfocada en el uso del DOM, Local Storage y Session Storage.

---

## ¿Qué hace esta aplicación?

-  Permite al usuario ingresar su **nombre y edad** mediante un formulario.
-  Almacena los datos en el navegador utilizando **Local Storage**.
-  Muestra los datos guardados incluso al recargar la página.
-  Cuenta cuántas veces el usuario ha interactuado en una sesión usando **Session Storage**.
-  Permite **borrar los datos** guardados con un solo clic.

---

##  Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript (ES Modules)
- SPA (Single Page Application) con enrutamiento personalizado
- Local Storage y Session Storage
- Hospedaje en [Netlify](https://netlify.com)

---

## 📂 Estructura del proyecto

/

├── index.html

├── styles.css

├── main.js

├── _redirects

└── pages/

├── home.js

├── form.js

├── formLogic.js

├── info.js

└── notfound.js

## Navegación

El sitio está organizado como una SPA (Single Page Application), con rutas como:

- `/` → Página de inicio
- `/form` → Formulario de ingreso de datos
- `/info` → Información del funcionamiento del sistema


---

## 🌐 Rutas disponibles

| Ruta      | Descripción                          |
|-----------|--------------------------------------|
| `/`       | Página de inicio                     |
| `/form`   | Formulario con almacenamiento local  |
| `/info`   | Información sobre el funcionamiento  |
| *(otras)* | Página 404 personalizada             |

---

## ⚙️ Uso del proyecto

### 🔹 En línea
Accede directamente desde:  
**Link para ver el proyecto desde NETLIFY(https://app.netlify.com/projects/stately-dusk-d58402/overview)** 

### 🔹 Localmente

1. Clona este repositorio
2. Abre con Live Server desde la raíz del proyecto (no desde `index.html`)

```bash
npm install
npm run dev
---

```bash
npm install
npm run dev
