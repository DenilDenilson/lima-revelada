# 🌆 Lima Revelada

**Lima Revelada** es una plataforma web interactiva donde las calles de Lima cobran voz propia. Cada punto en el mapa guarda una historia: leyendas urbanas, curiosidades culturales, eventos históricos, personajes olvidados y misterios locales. Una manera de caminar por Lima descubriendo lo que normalmente pasa desapercibido.

---

## 🧭 ¿Qué puedes hacer?

- Explorar un **mapa interactivo minimalista**.
- Ver lugares clave como la Casa Matusita, el Hotel Bolívar, o Las 5 Esquinas marcados en el mapa.
- Hacer clic en los puntos de interés y **leer sus historias** (en popup o modal).
- Usar la plataforma desde el navegador, sin necesidad de registrarse ni instalar nada.

---

## 🧱 Tecnologías usadas

- [Astro](https://astro.build) — Framework principal del sitio.
- [Leaflet.js](https://leafletjs.com) — Mapa interactivo y marcadores.
- [Bun](https://bun.sh) — Runtime y gestor de paquetes ultrarrápido.
- Tile layer base: [CartoDB Positron](https://carto.com/help/building-maps/basemap-list/)

---

## 🚀 Cómo ejecutar localmente

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tuusuario/lima-revelada.git
   cd lima-revelada

   ```

2. Instala las dependencias:

   ```bash
   bun install

   ```

3. Ejecuta el servidor de desarrollo:

   ```bash
    bunx run dev

   ```

4. Abre tu navegador y ve a `http://localhost:4321`.

## 📁 Estructura del proyecto (parcial)

```plaintext
lima-revelada/
├── src/
│   ├── components/        # Componentes reutilizables
│   ├── pages/             # Páginas del sitio
│   │   └── Layout.astro    # Diseño base de las páginas
│   ├── styles/            # Archivos CSS globales
│   └── data/              # Datos de los puntos de interés
├── public/                # Archivos estáticos (favicon, imágenes)
├── package.json           # Dependencias y scripts
└── bun.lockb              # Lockfile de Bun
```

## 📄 Licencia

Todo el contenido y código fuente de este proyecto está licenciado bajo:
Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0)

'''Puedes usarlo, modificarlo y compartirlo libremente para fines no comerciales, siempre que otorgues crédito al autor original.

Para colaboraciones o permisos comerciales, contáctame:
📧 [denildenilsonperu@gmail.com]

## ✨ Autor

Desarrollado por DenilDenilson
Proyecto hecho con amor por las calles de Lima.
