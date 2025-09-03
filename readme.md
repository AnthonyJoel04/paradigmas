# Proyecto de Paradigmas

Este trabajo contiene **5 ejercicios** implementados en JavaScript, cada uno resolviendo problemas distintos de **manejo de arrays, objetos, validaciones y lógica de negocio según los 4 PARADIGMAS:**

Cada archivo se puede ejecutar de forma independiente y muestra resultados en la terminal con console.table para mejor visualización.

## Ejercicio 1: Estudiantes (Funcional)
Archivo: `ejercicio1.js`

- Se definió un arreglo de estudiantes con nombre, edad, curso y nota.
- Funciones implementadas:
  1. `estudiantesJsMayor80` → filtra estudiantes de **JavaScript** con nota > 80.
  2. `promedioNotas` → calcula el promedio de todas las notas.
  3. `nombresMayores20` → lista nombres de estudiantes con edad > 20.
  4. `mejorEstudiante` → encuentra al estudiante con la nota más alta.
- La salida muestra tablas con los resultados de cada consulta.

## Ejercicio 2: Productos (Orientado a objetos)
Archivo: `ejercicio2.js`

- Se crearon 5 productos iniciales representados con la clase `Producto`.
- Métodos principales:
  1. `Producto.valorTotalInventario(lista)` → devuelve el valor total del inventario.
  2. `Producto.aplicarDescuentoPorCategoria(lista, reglas)` → aplica descuentos según la categoría.
- Se imprimen:
  - Lista de productos inicial.
  - Valor total del inventario.
  - Productos con descuento aplicado y nuevo valor total.

## Ejercicio 3: Validaciones (Procedural)
Archivo: `ejercicio3.js`

- Se implementaron funciones de validación:
  1. `validateEmail` → revisa formato correcto de un correo.
  2. `validatePassword` → revisa fortaleza de contraseña (mínimo 8 caracteres, mayúscula, minúscula, número y símbolo).
  3. `validateAge` → valida edad entre 0 y 120 años.
  4. `validateProduct` → valida que un producto tenga campos obligatorios y valores correctos.
- La salida muestra tablas con ejemplos de entradas válidas e inválidas.

## Ejercicio 4: Operaciones con productos (Funcional)
Archivo: `ejercicio4.js`
 
- Funciones implementadas:
  1. `filtrarPorRangoPrecio` → devuelve productos dentro de un rango de precio.
  2. `agruparPor` → agrupa productos por una propiedad (ej: categoría).
  3. `buscarPorMarca` → busca productos de una marca específica.
  4. `estadisticasPorCategoria` → genera estadísticas por categoría (cantidad, promedio, total).
- Imprime:
  - Productos filtrados por rango.
  - Grupos por categoría.
  - Resultados de búsqueda por marca.
  - Tabla de estadísticas.

## Ejercicio 5: Inventario con impuestos y estado (Funcional)
Archivo: `ejercicio5.js`

- Funciones principales:
  1. `addPriceWithTax` → agrega precio con impuesto (IVA 19% por defecto).
  2. `addStatus` → agrega un estado según stock (`Alto`, `Medio`, `Bajo`).
  3. `inventorySummaryByCategory` → genera un resumen de inventario por categoría.
- Muestra:
  - Tabla de productos con impuesto.
  - Tabla con estado de stock.
  - Resumen de inventario agrupado por categoría.

## Cómo ejecutar
En el archivo `package.json`, se definieron scripts para poder ejecutar cada uno y también de manera individual:

```json
"scripts": {
  "start": "node selectExercise.js",
  "start_cod_1": "node src/ejercicio1.js",
  "start_cod_2": "node src/ejercicio2.js",
  "start_cod_3": "node src/ejercicio3.js",
  "start_cod_4": "node src/ejercicio4.js",
  "start_cod_5": "node src/ejercicio5.js"
}