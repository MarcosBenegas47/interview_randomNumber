# Ruleta de Números Aleatorios


---
**🎯objetivos**
### Enunciado del Examen:

1. **Objetivo**: Desarrollar un servidor API utilizando **NestJS** que responda con un número aleatorio entre 1 y 100 cuando se haga una solicitud a una ruta determinada. :white_check_mark:
2. **Requisitos**:
- Implementar una ruta HTTP **POST** que al recibir una solicitud genere un número aleatorio entre 1 y 100. :white_check_mark:

- La respuesta debe ser un JSON con la siguiente estructura: `{ "value": <número> }`. :white_check_mark:

- La API debe implementar un **middleware** para registrar el timestamp (marca de tiempo) de cada solicitud. :white_check_mark:

- Crear un **frontend mínimo** en **React** que tenga un botón para realizar una solicitud a esta ruta, y muestre el número aleatorio recibido en pantalla. :white_check_mark:
3. **Extras**:

- Si el candidato tiene conocimientos de Docker, se puede agregar un `Dockerfile` para contenerizar la aplicación. :x:

- Se valorará el uso de buenas prácticas en la estructura del código y manejo de errores. :x:

### Instrucciones adicionales:

- Temporiza la prueba desde que inicies hasta que la termines, y toma nota del tiempo total que te llevó completarla.

- Una vez finalizada, sube el código a un repositorio público en GitHub y envía el enlace junto con el tiempo total que te tomó.

### Opcional:
- Agrega una animación de una **ruleta** con 100 números, donde se detenga en el número aleatorio generado. Esta animación debe estar en el :x:
  
- **frontend**.

- Si decides no hacer la ruleta y solo mostrar el número aleatorio, de ser posible, también implementa una animación en el **frontend** que lo presente de manera visualmente atractiva. :white_check_mark:

---
## Requisitos

- Node.js v14
- npm o yarn
---
### Instrucciones de instalación 
```bash
npm install
npm run dev
#o
yarn dev
```
---
#### ⏱️ Duracion de la prueba

Tiempo total: 1 hora y 40 minutos

### Observaciones
El timestamp se muestra en la consola cuando se realiza una solicitud y además se especifica el método utilizado.
