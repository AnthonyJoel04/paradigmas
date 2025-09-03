const estudiantes = [
  { id: 1, nombre: "Ana", edad: 22, curso: "JavaScript", nota: 92 },
  { id: 2, nombre: "Luis", edad: 19, curso: "Python", nota: 78 },
  { id: 3, nombre: "Sara", edad: 24, curso: "JavaScript", nota: 84 },
  { id: 4, nombre: "Mateo", edad: 21, curso: "Java", nota: 88 },
  { id: 5, nombre: "Val", edad: 18, curso: "JavaScript", nota: 67 },
  { id: 6, nombre: "Leo", edad: 27, curso: "JavaScript", nota: 99 },
];

const obtenerEstudiantesJsMayor80 = (arr) =>
  arr.filter((e) => e.curso === "JavaScript" && e.nota > 80);

const obtenerPromedioNotas = (arr) =>
  arr.reduce((acc, e) => acc + e.nota, 0) / (arr.length || 1);

const obtenerNombresMayoresQue = (arr, edadMinima = 21) =>
  arr.filter((e) => e.edad > edadMinima).map((e) => e.nombre);

const obtenerMejorEstudiante = (arr) =>
  arr.reduce((mejor, e) => (e.nota > (mejor?.nota ?? -Infinity) ? e : mejor), null);

console.log("\n=== EJERCICIO 1 ===");
console.table(obtenerEstudiantesJsMayor80(estudiantes));
console.log("Promedio notas:", obtenerPromedioNotas(estudiantes).toFixed(2));
console.table(obtenerNombresMayoresQue(estudiantes, 20));
console.log("Mejor estudiante:", obtenerMejorEstudiante(estudiantes));

module.exports = {
  estudiantes,
  obtenerEstudiantesJsMayor80,
  obtenerPromedioNotas,
  obtenerNombresMayoresQue,
  obtenerMejorEstudiante,
};