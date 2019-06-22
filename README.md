#### Eye-P: Un paso más allá para la protección de la Propiedad Intelectual

`Eye-P` es una herramienta de **codificación y decodificación de mensajes**, orientada a trabajadores y directivos de empresas independientes de desarrollo de video juegos de mediano tamaño, a punto de dar un salto importante al trabajar con una propiedad intelectual delicada, con requerimientos especiales de confidencialidad.

_IP_ ("Intelectual Property") es el término que se usa a nivel internacional para hablar de material original, perteneciente a una empresa, grupo o persona.  En el mundo de los video juegos se usa además para referirse a franquicias, personajes o universos creativos  (nuevos o antiguos).

Durante el proceso de desarrollo de un video juego, cualquier tipo de información transmitida o filtrada a inversionistas, público general o prensa puede afectar las ventas y desempeño del producto final en el mercado debido a la expectativa de la gente.

Cuando una empresa de mediano tamaño firma un contrato para trabajar con una IP querida y conocida, no solo debe cuidarse de no divulgar información confidencial del proyecto al público, sino que además firma contratos de no divulgación de información (NDA: Non-Disclosure Agreements) que les prohíben dar detalles relevantes de este mismo. Entendiendo lo anterior, cualquier tipo de filtración casual puede poner en jaque no solo las ventas del proyecto, sino que además podría poner en jaque los planes de crecimiento de la empresa.

Los NDA dependen de la capacidad de cada involucrado en el proyecto de guardar silencio. Debido a la gran cantidad de involucrados, esto se vuelve difícil mientras más tiempo y personas trabajen en la organización.

Si esta información debe ser protegida a toda costa ¿por qué no dar un paso más allá y encriptar las comunicaciones internas con los equipos de trabajo involucrados?

---

Usuarios: miembros de una empresa de videojuegos que trabaja con información confidencial y propiedad intelectual de otras empresas.

Objetivos de los usuarios: proteger información confidencial de proyectos utilizando esta herramienta digital de encriptación/decriptación de mensajes con el fin de utilizar en su mensajería interna.

Problemas que resuelve la aplicación: se complementa con los sistemas actuales de protección de información confidencial de las empresas de videojuego. Facilita el cumplimiento de los términos establecidos en el NDA.

---
Proceso de diseño UX
- Ideación
1. Se identificó el problema a solucionar
(agregar artículos sobre filtraciones de info en videojuegos y cómo afectan las ventas)
2. Se generó un sistema de encriptación/decriptación de mensajes
3. Se identificaron los perfiles de usuarios potenciales

- Prototipado (sketching)
4. Se crearon primeros bocetos/sketches de posible interfaz
5. Tras una primera ronda de feedbacks con personas cercanas, se simplificó la aplicación y se creó el primer wireframe sin colores
6. Luego de investigar la paleta de colores más adecuada, se probó el primer mockup

- Testeo e Iteración
7. Tras recibir feedback de pares del mockup, se hizo correcciones y se procedió a crear el primero prototipo corrigiendo errores por ejemplo de interactividad y legibilidad del producto que obstaculizaban la correcta interpretación de sus funciones
8. El producto fue probado por 2 usuarios target para dar últimos detalles de la aplicación
9. La aplicación fue aprobada y subida

#### Scripts / Archivos

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.

  -----
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/cipher.js`: acá debes implementar el objeto cipher, el cual debe estar
  _exportado_ en el objeto global (`window`). Este objeto (`cipher`) debe
  contener dos métodos:
  - `cipher.encode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la derecha en el alfabeto y `string` el mensaje (texto)
    que queremos cifrar.
  - `cipher.decode(offset, string)`: `offset` es el número de posiciones que
    queremos mover a la izquierda en el alfabeto y `string` el mensaje
    (texto) que queremos descifrar.
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `cipher.encode()`
  o `cipher.decode()` según sea necesario y actualizar el resultado en la UI.
* `test/cipher.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `cipher.encode()` y `cipher.decode()`.

## Parte opcional o “Hacker edition”

Las secciones llamadas “Hacker Edition” son opcionales. Si **terminaste** con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.

***

## Pistas sobre cómo comenzar a trabajar en el proyecto

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
   condiciones, algo como [Atom](https://atom.io/) o
   [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   que es un programita que interpreta líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
   aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te
   darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :rocket:

## Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)


Desarrollo Front-end:

* [Valores](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/01-values-variables-and-types)
* [Tipos](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/01-values-variables-and-types)
* [Variables](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/01-basics/02-variables)
* [Control de flujo](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/02-flow-control/00-opening)
* [Tests unitarios](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/11-testing/00-opening)
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:
- [GitHub y GitHub Pages](https://guides.github.com/)
- [Guía de Scrum](https://www.scrumguides.org/docs/scrumguide/v1/scrum-guide-es.pdf): solamente para comenzar a entender cómo organizar tu trabajo.

## Checklist
Esta sección está  para ayudarte a llevar un control de lo que vas completando.

### Parte Obligatoria
* [x ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.
