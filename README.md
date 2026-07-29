# 🇪🇨 Selección Ecuatoriana de Fútbol - App Móvil (Examen)

Aplicación móvil desarrollada con **React Native** y **Expo Go** para el examen de Dispositivos Móviles. La app incluye una pantalla de bienvenida (Splash Screen) con temporizador y carga, una barra de navegación inferior con 3 pestañas funcionales, y contenido multimedia.

## Requisitos del proyecto (Rúbrica del examen)

| # | Criterio | Estado |
|---|----------|--------|
| 1 | Splash Screen con indicador de carga, logo y paso automático al Home | ✅ |
| 2 | Barra inferior (Bottom Navigation Bar) con 3 pestañas funcionales | ✅ |
| 3 | Pestaña Home: Bienvenida y tarjeta del subcampeón Argentina | ✅ |
| 4 | Pestaña España: Bandera, himno, equipación y jugadores estrella | ✅ |
| 5 | Pestaña Acerca de: Foto (video) y descripción de cada estudiante | ✅ |
| 6 | Reutilización de componentes, props y organización del código | ✅ |
| 7 | Repositorio en GitHub con commits del día y README actualizado | ✅ |

---

## Tecnologías utilizadas

- **React Native** - Framework para desarrollo móvil
- **Expo Go** - Plataforma para desarrollo y pruebas
- **React Navigation (Stack & Bottom Tabs)** - Navegación entre pantallas y pestañas
- **Expo AV** - Reproducción de videos en la pantalla Acerca de
- **React Hooks** - Manejo de estado (useState, useEffect)
- **Componentes React Native** - View, Text, Image, ScrollView, ActivityIndicator, Video

---

## Estructura del proyecto


SeleccionEcuadorApp/
│
├── App.js # Configuración de Stack y Bottom Tabs
├── app.json # Configuración de Expo
├── package.json # Dependencias
├── README.md # Este archivo
│
├── assets/
│ ├── images/ # Imágenes locales (logo, banderas, etc.)
│ └── videos/ # Videos cortos para la pantalla About
│ ├── estudiante1.mp4
│ └── estudiante2.mp4
│
└── src/
├── components/
│ └── PlayerCard.js # Componente reutilizable de jugador (Props)
│
├── data/
│ └── playersData.js # Datos de los jugadores de la selección
│
├── screens/
│ ├── SplashScreen.js # Pantalla de bienvenida con ActivityIndicator
│ ├── HomeScreen.js # Pestaña 1 (Bienvenida + Subcampeón Argentina)
│ ├── SpainScreen.js # Pestaña 2 (Información de España)
│ └── AboutScreen.js # Pestaña 3 (Videos y descripción estudiantes)
│
└── styles/
└── globalStyles.js # Estilos reutilizables (Textos, colores)


---

## Instalación y ejecución

### Requisitos previos

- **Node.js** (versión 18 o superior) → [Descargar](https://nodejs.org/)
- **Expo Go** en tu teléfono móvil → [iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- **Git** (opcional) → [Descargar](https://git-scm.com/)

### Paso 1: Clonar o descargar el repositorio

```bash
# Clonar el repositorio (si tienes Git)
git clone https://github.com/Segu2807/LaTri.git

# Entrar a la carpeta del proyecto
cd SeleccionEcuadorApp

Paso 2: Instalar dependencias
bash
npm install
Nota: Este proyecto utiliza @react-navigation/bottom-tabs y expo-av. Si tienes errores, ejecuta:

bash
npx expo install @react-navigation/bottom-tabs @react-navigation/native-stack react-native-screens react-native-safe-area-context expo-av
Paso 3: Iniciar el servidor de desarrollo
bash
npx expo start --clear --tunnel
--clear → Limpia la caché.

--tunnel → Crea un túnel (recomendado para iPhone).

Paso 4: Ejecutar en dispositivo
Opción A: En iPhone (Expo Go)

Descarga Expo Go desde la App Store.

Abre la app y escanea el código QR que aparece en la terminal.

Nota: Si falla, ve a Configuración → Expo Go → Activar "Red Local".

Opción B: En Android (Expo Go)

Descarga Expo Go desde Google Play.

Abre la app y escanea el código QR.

🎮 Funcionalidades de la App (Por pestañas)
1. Splash Screen (Pantalla de bienvenida)
Se muestra durante 3 segundos.

Fondo azul oscuro (#003DA5) con logo de la selección.

Incluye un indicador de carga (ActivityIndicator) para simular la inicialización.

Paso automático a la barra de pestañas principal.

2. Bottom Navigation Bar (Barra Inferior)
Diseñada con los colores oficiales de Ecuador (#003DA5 y #FFCC00).

3 pestañas funcionales: Home, España y Acerca de.

3. Pestaña Home (Inicio)
Mensaje de bienvenida personalizado para el estudiante.

Tarjeta del Subcampeón: Información de Argentina como subcampeón de la Copa América 2024 (bandera, nombre y resultado de la final).

4. Pestaña España
Información completa del país y su selección:

Bandera de España.

Himno Nacional (Marcha Real).

Equipación oficial (Local y Visitante).

Jugadores estrella (Pedri, Lamine Yamal, Rodri).

5. Pestaña Acerca de
Información de los desarrolladores del proyecto.

Cada estudiante tiene un video corto en bucle (formato circular) y su descripción.

Uso del componente <Video> de expo-av con propiedades shouldPlay y isLooping.

Colores oficiales de la aplicación
Color	Código HEX	Uso
Amarillo Ecuador	#FFCC00	Textos del Splash, Tarjetas de Home
Azul Ecuador	#003DA5	Fondo del Splash, Barra de Navegación, Títulos
Fondo claro	#FFF9E6 / #F0F4F8	Fondos de las pantallas principales

Ejecuta en la terminal: npx expo install expo-av

El Splash Screen no aparece

Detén el servidor (Ctrl+C), elimina la carpeta .expo y reinicia con:

bash
npx expo start --clear --tunnel
Entregables académicos (Criterios del examen)
Repositorio en GitHub
https://github.com/Segu2807/LaTri.git
(Asegúrate de tener al menos 1 commit del día de la entrega).

Entrega de archivos
Enviar el enlace del repositorio y el PDF al correo: dfnoguera@uce.edu.ec (según lo indicado en la rúbrica).

Autores
Nombre: Segundo Tipanquiza 

Curso: Dispositivos Móviles
Institución: Universidad Central del Ecuador
Fecha: 28/07/2026

Licencia
Este proyecto fue desarrollado con fines educativos como parte de un examen práctico de la materia de Dispositivos Móviles, utilizando React Native y Expo.