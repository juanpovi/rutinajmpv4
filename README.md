# 🏋️ Rutina Checklist App V4

Esta es una app de rutina semanal personalizada con:

- ✅ Login con Google (Firebase Auth)
- ✅ Progreso guardado por usuario en Firestore
- ✅ Interfaz responsiva con TailwindCSS
- ✅ Funciona en Vercel, GitHub Pages o localmente con Vite

---

## 🔧 Requisitos

1. Cuenta de Google
2. Cuenta en [Firebase](https://console.firebase.google.com/)
3. Editor de código (ej: VS Code)
4. Node.js y npm instalados

---

## ⚙️ Configuración Firebase

1. Crear un nuevo proyecto en Firebase
2. Habilitar **Authentication > Google**
3. Activar **Firestore Database**
4. Crear una **app web** y copiar la config de Firebase
5. Reemplazar el contenido de `src/firebase.js` con tus datos:

```js
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_BUCKET",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID"
};
```

---

## ▶️ Iniciar en modo desarrollo

```bash
npm install
npm run dev
```

---

## 🚀 Deploy con Vercel

1. Subir este proyecto a GitHub
2. Ir a [https://vercel.com](https://vercel.com)
3. Crear nuevo proyecto, elegir este repo
4. Vercel detecta Vite automáticamente
5. ¡Listo! Tu app queda online

---

## 📁 Estructura del Proyecto

```
📦 rutina-checklist-v4
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 firebase.js ← ⚠️ Pegá tu config de Firebase aquí
 ┃ ┣ 📜 index.css
 ┃ ┣ 📜 main.jsx
 ┣ 📜 index.html
 ┣ 📜 package.json
 ┣ 📜 postcss.config.js
 ┣ 📜 tailwind.config.js
 ┣ 📜 vite.config.js
```

---

## 🧠 Autor
App creada con ayuda de ChatGPT para Juan Manuel 💪
