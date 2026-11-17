# Battle Odyssey · Presentación para Tema Labs

Presentación local, independiente y de siete escenas para una exposición oral de **8 minutos**, incluida la transición a la demo real.

## Requisitos e instalación

- Node.js 20 o posterior y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:5174`. La presentación usa ese puerto para dejar libre `http://localhost:5173` para el videojuego real. Para una versión de producción:

```bash
npm run lint
npm run build
npm run preview
```

## Navegación

- Flechas **← / →** para retroceder y avanzar.
- Botones visibles **Anterior / Siguiente** y puntos de escena clicables.
- La cabecera muestra el número de escena, el tiempo previsto y el progreso.
- En la escena 3, cambia a la pestaña ya preparada del juego con **Ctrl + Tab**; vuelve con **Ctrl + Shift + Tab**. La presentación no abre una segunda instancia ni simula el videojuego.

## Antes de la exposición

1. Ensaya el deck y la demo con cronómetro: 8 minutos como máximo, con 2:30 para la demo.
2. Abre y prueba el juego en otra pestaña antes de presentar. Confirma API, base de datos, login, CORS y que la partida de demo parte de un estado conocido.
3. No uses `migrate:fresh` contra una base con información que quieras conservar. Si necesitas restablecer la demo, confirma primero que es una base desechable.
4. Prueba el acceso al juego en `http://localhost:5173` y revisa cómo volver a la presentación.
5. La opción **Plan B** muestra una captura real estática del proyecto; no es una demo interactiva. Para un respaldo más completo, graba una ejecución real antes de la exposición.

## Contenido y snippets

- `src/deck.js`: las siete escenas y su duración.
- `src/scenes/`: contenido visual de cada escena.
- `src/data/snippets.js`: fragmentos del código real con rutas y líneas de origen.
- `src/styles/theme.css`: identidad visual, layout 16:9, animaciones y `prefers-reduced-motion`.
- `src/assets/`: copias locales del logo, sprites y capturas. No hay symlinks a los proyectos originales.

Assets usados: logo, fondos y sprites copiados de `battle-odyssey-presentation/src/assets/`; capturas de batalla y entre-batallas copiadas de `battle-odyssey-front/docs/screenshots/`.

Los snippets deben volver a contrastarse con los repositorios de frontend y API si el código cambia antes de la presentación.
