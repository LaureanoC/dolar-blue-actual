# Dólar blue hoy

Está página web consume una api que va indicando el valor actual del dolar blue, oficial, euro . . .

Una aplicación sencilla, también se puede consultar por fecha (como limite).

# Svelte y Vite

Seguí los pasos del siguiente video para desplegar la aplicación en github pages

https://www.youtube.com/watch?v=UX4gvort2TU&t=1106s


npm run build

Instalé el paquete de github pages
```
npm install gh-pages
```

Agregué el directorio base en vite.config.js

Ejecuto
```
npx gh-pages -d dist
```
o

En packages.json agregue en scripts "deploy": "gh-pages -d dist"

Por ultimo npm run deploy

