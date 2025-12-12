# Aplicación de Consola de Películas en TypeScript

## Descripción

Aplicación simple de consola desarrollada en TypeScript que enumera géneros de películas, países productores y muestra ejemplos de películas. Este proyecto demuestra el uso de TypeScript, específicamente enumeraciones (enums) e interfaces.

## Características

-   Enumera géneros cinematográficos disponibles
-   Enumera países productores de películas
-   Muestra ejemplos de películas con sus datos
-   Código bien documentado y estructurado
-   Totalmente escrito en TypeScript

## Requisitos Previos

-   Node.js (versión 12 o superior)
-   TypeScript Compiler (tsc)

## Instalación

1. Clona o descarga este repositorio
2. Navega al directorio del proyecto:
    ```bash
    cd peliculas-app
    ```
3. Instala TypeScript globalmente (si no lo tienes):
    ```bash
    npm install -g typescript
    ```

## Estructura del Proyecto

```
peliculas-app/
├── app.ts          # Código fuente principal en TypeScript
├── app.js          # Archivo JavaScript compilado
└── README.md       # Este archivo
```

## Compilación y Ejecución

### Compilar el código TypeScript:

```bash
tsc app.ts
```

### Ejecutar la aplicación:

```bash
node app.js
```

### Alternativa (compilar y ejecutar en un solo paso):

```bash
tsc app.ts && node app.js
```

## Salida Esperada

La aplicación mostrará en consola:

1. **Géneros de Películas Disponibles**: Lista numerada de géneros cinematográficos
2. **Países Productores de Películas**: Lista numerada de países
3. **Ejemplos de Películas**: Películas de ejemplo con sus detalles (título, género, país, año, etc.)

Ejemplo de salida:

```
============================================
= APLICACIÓN DE PELÍCULAS EN TYPESCRIPT =
============================================

----------------------------------------
- GÉNEROS DE PELÍCULAS DISPONIBLES -
----------------------------------------
Estos son los géneros cinematográficos soportados por el sistema:

  01. Acción
  02. Aventura
  03. Comedia
  ... (más géneros)

Total: 10 géneros disponibles

----------------------------------------
- PAÍSES PRODUCTORES DE PELÍCULAS -
----------------------------------------
Estos son los países reconocidos como productores cinematográficos:

  01. Estados Unidos
  02. México
  03. España
  ... (más países)

Total: 10 países disponibles

--------------------------------
- EJEMPLOS DE PELÍCULAS -
--------------------------------
A continuación se muestran películas de ejemplo con sus datos:

PELÍCULA #1
  Título:    El Padrino
  Género:    Drama
  País:      Estados Unidos
  Año:       1972
  Duración:  175 min (2h 55m)
  Director:  Francis Ford Coppola
...
```

## Estructura del Código

### Enumeraciones (Enums)

1. **GeneroPelicula**: Define 10 géneros cinematográficos
2. **PaisPelicula**: Define 10 países productores de cine

### Interfaces

-   **Pelicula**: Define la estructura de datos para una película

### Funciones

1. **obtenerValoresEnum()**: Extrae valores de enumeraciones TypeScript
2. **formatearTitulo()**: Formatea texto para mostrar como título
3. **mostrarSeparador()**: Muestra líneas separadoras en consola
4. **main()**: Función principal que coordina la ejecución

### Datos de Ejemplo

-   5 películas de ejemplo que cubren diferentes géneros y países

## Tecnologías Utilizadas

-   **TypeScript**: Lenguaje de programación tipado
-   **Node.js**: Entorno de ejecución JavaScript
-   **TypeScript Compiler (tsc)**: Compilador de TypeScript a JavaScript

## Propósito Educativo

Este proyecto está diseñado para:

-   Demostrar el uso de TypeScript en aplicaciones de consola
-   Mostrar el uso de enumeraciones (enums) e interfaces
-   Servir como ejemplo de código bien documentado
-   Proporcionar una base para proyectos más complejos

## Personalización

Puedes modificar el archivo `app.ts` para:

-   Agregar más géneros o países
-   Cambiar las películas de ejemplo
-   Añadir nuevas funcionalidades
-   Modificar el formato de salida

## Solución de Problemas

### Error "Property 'values' does not exist on type 'ObjectConstructor'"

Si encuentras este error al compilar, es porque estás usando una versión antigua de TypeScript. La función `obtenerValoresEnum` en nuestro código soluciona este problema de compatibilidad.

### El código no se compila

Asegúrate de tener TypeScript instalado correctamente:

```bash
tsc --version
```

### No veo la salida esperada

Verifica que estás ejecutando el archivo JavaScript compilado:

```bash
node app.js
```

## Autor

Andres Luna C.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una rama para tu característica
3. Realiza tus cambios
4. Envía un pull request

### Notas importantes:

1. **Compatibilidad**: La función `obtenerValoresEnum` asegura compatibilidad con versiones antiguas de JavaScript/TypeScript.

2. **Buenas prácticas**: El código sigue principios de código limpio y es fácil de entender y mantener.

3. **Extensibilidad**: La estructura modular permite agregar fácilmente nuevas funcionalidades.
