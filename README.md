# 🇪🇨 Selección Ecuatoriana de Fútbol - App Móvil

Aplicación móvil desarrollada con **React Native** y **Expo Go** que muestra información de la Selección Ecuatoriana de Fútbol "La TRI". Incluye una pantalla de bienvenida (Splash Screen) y una pantalla principal (Home Screen) con datos relevantes del equipo.

## 📋 Requisitos del proyecto

| Requisito | Estado |
|-----------|--------|
| Splash Screen con logo centrado | ✅ |
| Fondo con colores de Ecuador (Amarillo #FFCC00) | ✅ |
| Texto "Ecuador - La Tri" debajo del logo | ✅ |
| Duración de 2 a 3 segundos antes de navegar | ✅ |
| Home Screen con título del equipo | ✅ |
| Imagen del escudo/logo de la selección | ✅ |
| Al menos 3 datos del equipo | ✅ |
| Botón interactivo con mensaje | ✅ |
| Estilo visual con colores de La Tri | ✅ |

---

## 🛠️ Tecnologías utilizadas

- **React Native** - Framework para desarrollo móvil
- **Expo Go** - Plataforma para desarrollo y pruebas
- **React Hooks** - Manejo de estado (useState, useEffect)
- **React Native Components** - View, Text, Image, ScrollView, TouchableOpacity, Alert

---

## 📁 Estructura del proyecto

SeleccionEcuadorApp/
│
├── App.js # Componente principal (controla navegación)
├── app.json # Configuración de Expo
├── package.json # Dependencias del proyecto
├── README.md # Este archivo
│
├── src/
│ ├── screens/
│ │ ├── SplashScreen.js # Pantalla de bienvenida
│ │ └── HomeScreen.js # Pantalla principal
│ │
│ └── components/
│ └── (opcional) # Componentes reutilizables
│
├── assets/
│ └── images/ # Imágenes locales (opcional)
│
└── screenshots/ # Capturas para el README
├── splash.jpg
└── home.jpg


---

## 🚀 Instalación y ejecución

### Requisitos previos

- **Node.js** (versión 18 o superior) → [Descargar](https://nodejs.org/)
- **Expo Go** en tu teléfono móvil → [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **Git** (opcional, para clonar el repositorio) → [Descargar](https://git-scm.com/)

### Paso 1: Clonar o descargar el repositorio

```bash
# Clonar el repositorio (si tienes Git)
git clone https://github.com/Segu2807/LaTri.git

# Entrar a la carpeta del proyecto
cd SeleccionEcuadorApp
Paso 2: Instalar dependencias
bash
npm install
O si usas yarn:

bash
yarn install
Paso 3: Iniciar el servidor de desarrollo
bash
npx expo start --clear --tunnel
Explicación de flags:

--clear → Limpia la caché de Metro

--tunnel → Crea un túnel ngrok (recomendado para iPhone)

Paso 4: Ejecutar en dispositivo
Opción A: En iPhone (Expo Go)
Descarga Expo Go desde la App Store

Abre la app Expo Go

Escanea el código QR que aparece en la terminal

Importante: Si aparece error de conexión, ve a:

Configuración → Expo Go → Activar "Red Local" (Local Network)

Espera a que cargue la aplicación

Opción B: En Android (Expo Go)
Descarga Expo Go desde Google Play

Abre la app Expo Go

Escanea el código QR que aparece en la terminal

🎮 Cómo usar la aplicación
Splash Screen (Pantalla de bienvenida)
Se muestra durante 2.5 segundos

Fondo amarillo (#FFCC00)

Logo de la selección ecuatoriana centrado

Texto: "Ecuador - La Tri"

Home Screen (Pantalla principal)
Una vez que pasa el Splash Screen, verás:

Encabezado con el nombre "Selección Ecuatoriana de Fútbol"

Logo/escudo de la selección

Información del equipo:

Confederación: CONMEBOL

Entrenador actual: Sebastián Beccacece

Estadio principal: Estadio Rodrigo Paz Delgado (Quito)

Copa América: 4° lugar (1993, 2015, 2019)

Participaciones mundialistas: 4 (2002, 2006, 2014, 2022 y 2026)

Botón interactivo "🇪🇨 ¡Apoyar a La Tri! 🇪🇨"

Al presionarlo, muestra un mensaje de alerta

🎨 Colores oficiales de la aplicación
Color	Código HEX	Uso
Amarillo Ecuador	#FFCC00	Fondo del Splash Screen, encabezado del Home
Azul Ecuador	#003DA5	Textos, bordes, botón principal
Fondo claro	#FFF9E6	Fondo del Home Screen


🔧 Solución de problemas comunes
❌ Error: "The request timed out" en Expo Go
Solución:

En iPhone: Configuración → Expo Go → Activar "Red Local"

En terminal: Usar npx expo start --tunnel

Asegurar que PC y teléfono estén en la misma red WiFi

❌ Error: "Unable to resolve module"
Solución:

bash
# Limpiar caché completamente
npx expo start --clear
❌ Los cambios no se reflejan en la app
Solución:

En Expo Go: Sacude el teléfono → Reload

O presiona la tecla r en la terminal

O cierra y vuelve a abrir Expo Go

❌ El Splash Screen no aparece (muestra Home directamente)
Solución:
Este problema ocurre por caché. Sigue estos pasos:

Detén el servidor (Ctrl+C)

Borra caché manual:

bash
rmdir /s /q .expo
Reinicia con:

bash
npx expo start --clear --tunnel
En iPhone: Cierra Expo Go y vuelve a escanear

📤 Entregables académicos
1. Repositorio en GitHub
https://github.com/Segu2807/LaTri.git

👨‍💻 Autor
Nombre: Segundo Tipanquiza

Curso: Dispositivos Moviles

Institución: Universida Central del Ecuador

Fecha: 06/06/2026

📄 Licencia
Este proyecto fue desarrollado con fines educativos como parte de un ejercicio de aprendizaje en React Native y Expo.


Inspiración: Selección Ecuatoriana de Fútbol "La TRI"


