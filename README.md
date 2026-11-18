# Battle Odyssey

Recorrido web local e independiente por el proyecto Battle Odyssey.

## Requisitos e instalación

- Node.js 20 o posterior y npm.

```bash
npm install
npm run dev
```

Abre `http://localhost:5174`. El puerto 5173 queda disponible para el videojuego real. Para generar y servir el build:

```bash
npm run lint
npm run build
npm run preview
```

## Navegación

- Flechas **← / →** para retroceder y avanzar.
- Botones visibles **Anterior / Siguiente** y puntos de escena clicables.
- La cabecera indica la escena actual y el progreso del recorrido.
- En la escena del producto, cambia a la pestaña local del juego con **Ctrl + Tab** y vuelve con **Ctrl + Shift + Tab**. El videojuego se ejecuta fuera de esta aplicación; aquí no se simula.

## Antes de usarlo

1. Abre y prueba el juego real en otra pestaña. Comprueba la API, la base de datos, el login, CORS y el estado de la partida.
2. No uses `migrate:fresh` contra una base con información que quieras conservar. Restablece partidas solo en una base desechable.
3. La opción **Plan B** mantiene disponible la pantalla entre batallas si falla la conexión. Como respaldo adicional, graba una ejecución real del juego.

## Contenido y código

- `src/deck.js`: orden y nombres de las escenas.
- `src/scenes/`: contenido visual de cada escena.
- `src/data/snippets.js`: fragmentos del código real con sus rutas y líneas de origen.
- `src/styles/theme.css`: identidad visual, layout panorámico, tipografías, animaciones y `prefers-reduced-motion`.
- `src/assets/`: copias locales del logo, sprites e imágenes del juego, sin symlinks.

Los fragmentos técnicos deben contrastarse de nuevo con el código de frontend y backend si este cambia.
