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