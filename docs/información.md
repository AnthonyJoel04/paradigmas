# Explicación de las Soluciones

Este documento explica de manera sencilla cómo se resolvió cada ejercicio y las decisiones tomadas en el código.

---

## Ejercicio 1: Estudiantes
- Se trabajó con un arreglo de estudiantes con nombre, edad, curso y nota.
- Se usaron funciones con **filter**, **map** y **reduce** para:
  - Filtrar estudiantes de JavaScript con nota > 80.
  - Calcular el promedio de todas las notas.
  - Listar solo los nombres de estudiantes mayores de 20 años.
  - Encontrar al estudiante con la nota más alta.
- Esto permite practicar filtrado de datos y agregación.

## Ejercicio 2: Productos Orientado a objetos
- Se definió una clase `Producto` para representar los productos.
- Se implementaron métodos estáticos:
  - `valorTotalInventario` → suma precio * stock de todos los productos.
  - `aplicarDescuentoPorCategoria` → aplica descuentos según categoría definida en un objeto de reglas.
- Se trabajó con **Programación Orientada a Objetos**, creando instancias y usando métodos de clase.

## Ejercicio 3: Validaciones
- Se implementaron funciones independientes (**paradigma procedural**) para validar distintos datos:
  - `validateEmail` → revisa formato de correo con expresión regular.
  - `validatePassword` → revisa que tenga mínimo 8 caracteres, mayúscula, minúscula, número y símbolo.
  - `validateAge` → asegura que sea un número entero entre 0 y 120.
  - `validateProduct` → revisa que el objeto producto tenga todos los campos y valores válidos.
- Se usaron **regex**, condiciones y comprobación de propiedades.

## Ejercicio 4: Operaciones con productos
- Se implementaron funciones que trabajan sobre un array de productos:
  - `filtrarPorRangoPrecio` → devuelve productos dentro de un rango dado.
  - `agruparPor` → agrupa productos por una clave (ej: categoría).
  - `buscarPorMarca` → busca productos de una marca específica.
  - `estadisticasPorCategoria` → calcula cantidad, promedio de precio y total por categoría.
- Se usaron **filter**, **reduce** y **Object.entries** para transformar los datos.

## Ejercicio 5: Inventario con transformaciones
- Se aplicaron transformaciones sobre los productos con **map** y **reduce**:
  - `addPriceWithTax` → agrega un nuevo campo con el precio + IVA (19%).
  - `addStatus` → asigna un estado según el stock (`Alto`, `Medio`, `Bajo`).
  - `inventorySummaryByCategory` → resume el inventario (cantidad de productos, unidades y valor total) por categoría.
- Se reforzó el uso de funciones puras para transformar arreglos.

## Conclusión
- Cada ejercicio resolvió un problema específico aplicando distintas técnicas de JavaScript con los paradigmas indicados en clase.
- Se practicaron conceptos de **arrays, objetos, funciones, programación orientada a objetos y validaciones**.
- La salida en consola se presenta en tablas para facilitar la comprensión de resultados.