# futbolPwaAPP

# Estructura de Carpetas del Proyecto

```
my-football-app/
├── src/
│   ├── api/
│   │   ├── footballApi.js
│   │   └── types.js
│   ├── components/
│   │   ├── Header.js
│   │   ├── LeagueList.js
│   │   ├── SeasonDetails.js
│   │   └── TeamStats.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── LeaguePage.js
│   │   └── TeamPage.js
│   ├── services/
│   │   ├── cacheService.js
│   │   └── serviceWorkerRegistration.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── helpers.js
│   ├── app.js
│   └── index.js
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── icons/
│       ├── icon-192x192.png
│       └── icon-512x512.png
├── sw.js
└── package.json
```

## Explicación

1. **src/**: Contiene todo el código fuente de la aplicación.
   - **api/**: Aquí se encuentra la lógica de comunicación con la API de fútbol.
     - `footballApi.js`: Implementa las funciones para hacer las solicitudes a la API.
     - `types.js`: Define los tipos de datos utilizados en la API.
   - **components/**: Aquí se encuentran los componentes reutilizables de la aplicación.
   - **pages/**: Contiene los componentes que representan las páginas principales de la aplicación.
   - **services/**: Contiene los servicios utilizados en la aplicación.
     - `cacheService.js`: Maneja el almacenamiento en caché de datos.
     - `serviceWorkerRegistration.js`: Registra y gestiona el Service Worker.
   - **styles/**: Contiene los estilos globales de la aplicación.
   - **utils/**: Contiene funciones y utilidades auxiliares.
   - `app.js`: Es el componente principal de la aplicación.
   - `index.js`: Es el punto de entrada de la aplicación.(por el momento no esta)
2. **public/**: Contiene los archivos estáticos servidos por la aplicación.
   - `index.html`: Es el archivo HTML principal.
   - `manifest.json`: Contiene la configuración de la PWA.
   - `icons/`: Contiene los iconos utilizados por la PWA.
3. `sw.js`: Contiene la implementación del Service Worker.
4. `package.json`: Contiene la configuración y dependencias del proyecto.

