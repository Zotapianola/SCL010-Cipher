#Eye-P:
## Un paso más allá para la protección de la Propiedad Intelectual

**Eye-P** es una herramienta de codificación y decodificación de mensajes, orientada a trabajadores y directivos de empresas de desarrollo de videojuegos, que trabajan con una propiedad intelectual delicada, con requerimientos especiales de confidencialidad.

**IP** ("Intelectual Property") es el término que se usa a nivel internacional para hablar de material original, perteneciente a una empresa, grupo o persona.  En el mundo de los videojuegos se usa además para referirse a franquicias, personajes o universos creativos  (nuevos o antiguos).

Durante el proceso de desarrollo de un video juego, cualquier tipo de información transmitida o filtrada a inversionistas, público general o prensa puede afectar las ventas y desempeño del producto final en el mercado debido a la expectativa de la gente.

Aquí es donde entra Eye-P.  Es una web app fácil de usar que complementa el uso de los NDA (Non-Disclosure Agreements) a la hora de proteger información particular.

Para utilizarla, solo se debe ingresar a su página (https://zotapianola.github.io/SCL010-Cipher/src/index.html), ingresar el código numérico en la sección superior derecha y luego poner el mensaje a encriptar/decriptar en el cuadro del centro.  Es necesario poner OJO en que la página esté en el modo adecuado (Code/Encode) antes de proceder.

Como se trata de una aplicación web para empresas internacionales o con equipos internacionales, se optó por utilizar el INGLÉS como lenguaje de trabajo.

#### Las instrucciones de uso están visibles al momento de ingresar a la web app y cada vez que los campos de clave (#KEY) y texto estén vacíos, para facilitar la mejor comprensión de la aplicación. Finalmente, tras codificar o decodificar, el usuario puede copiar manualmente el texto o hacerlo con el botón "Copy text" que selecciona y copia todo a portapapeles. Esto permitirá pegar el texto en cualquier aplicación de texto o sistema de mensajería con facilidad.


### USUARIOS
|  Usuarios: miembros de una empresa de videojuegos que trabaja con información confidencial y propiedad intelectual de otras empresas. |
| ------------ |
|Objetivos de los usuarios: proteger información confidencial de proyectos utilizando esta herramienta digital de encriptación/decriptación de mensajes con el fin de utilizar en su mensajería interna.   |
|Problemas que resuelve la aplicación: se complementa con los sistemas actuales de protección de información confidencial de las empresas de videojuego. Facilita el cumplimiento de los términos establecidos en el NDA.   |

## Proceso de desarrollo UX

- Se identificó el problema a solucionar
	El deseo y la dificultad de proteger información confidencial pertinente a propiedad intelectual que genera alta expectativa

	- "Red Dead Redemption 2 Leak Cost Gaming Site £1 Million After Settlement"
	  https://screenrant.com/red-dead-redemption-2-leak/
	- "No Man's Leak: The Polarizing Effects of Game Leaks"
	  https://blackshellmedia.com/2016/08/12/no-mans-leak-polarizing-effects-game-leaks/
	- Assessing The Impact Of Leaks In The Games Industry
	  https://www.gamerevolution.com/features/13950-assessing-the-impact-of-leaks-in-the-games-industry
---
- Se generó un sistema de encriptación/decriptación de mensajes
	Se trabajó con un sistema de cifrado/descifrado en JS6, enlazándolo a una página HTML cosa de generar una página web.
---

- Se identificaron los perfiles de usuarios potenciales
	Empresas internacionales de videojuegos que trabajen con propiedad intelectual que genera gran expectativa.
---

- Se crearon primeros bocetos/sketches de posible interfaz

[![WireFrame](https://zotapianola.github.io/SCL010-Cipher/img/WireFrame.jpg "WireFrame")](https://zotapianola.github.io/SCL010-Cipher/img/WireFrame.jpg "WireFrame")

En el boceto, se desea mostrar un TEXTarea con la configuración deseada de elementos. Se desea tener un ícono de un "ojo" para acentuar el efecto de transición entre CODE y DECODE, además de reforzar el nombre de la marca.

Se muestra abajo que la transición espera que el ojo "se cierre". Además, se anotan colores tentativos como referencia.

---
Se hace un primer mockup y se busca feedback inicial sobre paleta de colores y estilo. Se repite el comentario que alude a temas "egipcios", que aunque refuerza la sensación de "encriptación/encriptación" por referencia/asociación cultural a los jeroglíficos, se escapa un poco del estilo deseado.

[![MockUp](https://zotapianola.github.io/SCL010-Cipher/img/mockup.png "MockUp")](https://zotapianola.github.io/SCL010-Cipher/img/mockup.png "MockUp")

---

- Luego de investigar una paleta de colores más adecuada, se probó el primer prototipo
Tras una primera prueba con equipo de trabajo, se descubre que la interfaz no es suficientemente intuitiva así que se agregan instrucciones en los placeholder de textarea e input.

El segundo protitpo muestra transición de colores, placeholders, distribución y el nuevo cambio de interfaz de español a inglés para ajustarse al usuario.

[![Prototype - Code](https://zotapianola.github.io/SCL010-Cipher/img/prototype1.png "Prototype - Code")](https://zotapianola.github.io/SCL010-Cipher/img/prototype1.png "Prototype - Code")

[![Prototype - Decode](https://zotapianola.github.io/SCL010-Cipher/img/prototype2.png "Prototype - Decode")](https://zotapianola.github.io/SCL010-Cipher/img/prototype2.png "Prototype - Decode")

Esta segunda versión se prueba con un usuario target (desarrollador en una empresa polaca de desarrollo de videojuegos)

El feedback entregado es el siguiente:
	- No hay suficientes señales que indiquen a usuario qué está haciendo mal
	- No es tan claro que la llave/clave a usar ( #KEY ) debe ser solo numérica
	- La paleta de colores es confusa y no convence
	- Hay problemas para mostrar los elementos de la página correctamente (el usuario adjunta una imagen de cómo se ve en su computador)
	- Actualmente exiten aplicaciones similares de mayor complejidad, como por ejemplo la PGA encryption

[![User image](https://zotapianola.github.io/SCL010-Cipher/img/user.png "User image")](https://zotapianola.github.io/SCL010-Cipher/img/user.png "User image")

---
### Conclusiones

Es fundamental mejorar las interacciones del usuario con la aplicación, sobre todo para darle feedback sobre cuándo ejecuta incorrectamente las acciones requeridas para codificar/decodificar.

La segunda prioridad sería visual:
- Redefinir la paleta de colores tras encuestas con usuarios target
- Corregir errores de display para que la aplicación sea compatible con todo tipo de dispositivos y pantallas

Por último, es importante repensar la aplicación:
- Debemos analizar las capacidades competitivas de la app respecto a otras soluciones disponibles en el mercado, que atacan el mismo problema
