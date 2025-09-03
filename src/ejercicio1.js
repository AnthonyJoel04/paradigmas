const estudiantes = [
  { id: 1, nombre: "Ana",   edad: 22, curso: "JavaScript", nota: 92 },
  { id: 2, nombre: "Luis",  edad: 19, curso: "Python",     nota: 78 },
  { id: 3, nombre: "Sara",  edad: 24, curso: "JavaScript", nota: 84 },
  { id: 4, nombre: "Mateo", edad: 21, curso: "Java",       nota: 88 },
  { id: 5, nombre: "Val",   edad: 18, curso: "JavaScript", nota: 67 },
  { id: 6, nombre: "Leo",   edad: 27, curso: "JavaScript", nota: 99 },
];

const estudiantesJsMayor80 = (arr) =>
  arr.filter((e) => e.curso === "JavaScript" && e.nota > 80);

const promedioNotas = (arr) =>
  arr.reduce((suma, e) => suma + e.nota, 0) / (arr.length || 1);

const nombresMayores20 = (arr) =>
  arr.filter((e) => e.edad > 20).map((e) => e.nombre);

const mejorEstudiante = (arr) =>
  arr.reduce((mejor, e) => (e.nota > mejor.nota ? e : mejor), arr[0]);

if (require.main === module) {
  console.log("\n=== EJERCICIO 1 ===");

  console.log("\n1) Estudiantes de JavaScript con nota > 80:");
  console.table(estudiantesJsMayor80(estudiantes));

  console.log("\n2) Promedio de notas de todos los estudiantes:");
  console.log(promedioNotas(estudiantes).toFixed(2));

  console.log("\n3) Nombres de estudiantes mayores de 20 años:");
  console.table(nombresMayores20(estudiantes));

  console.log("\n4) Estudiante con la nota más alta:");
  console.table([mejorEstudiante(estudiantes)]);
}

module.exports = {
  estudiantes,
  estudiantesJsMayor80,
  promedioNotas,
  nombresMayores20,
  mejorEstudiante,
};