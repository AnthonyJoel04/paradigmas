// Validar correo electrónico
function validarCorreo(correo) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(String(correo).trim());
} 
// Expresión regular simple para validar correo
function validarContrasena(contrasena) {
  const s = String(contrasena);
  return s.length >= 8 && /[A-Z]/.test(s) && /[a-z]/.test(s) && /\d/.test(s) && /[^A-Za-z0-9]/.test(s);
}
// Mínimo 8 caracteres, al menos una mayúscula, una minúscula, un número y un carácter especial
function validarEdad(edad) {
  const n = Number(edad);
  return Number.isInteger(n) && n >= 0 && n <= 120;
}
// Extra: Validar objeto producto
function validarProducto(producto) {
  const requeridos = ["id", "nombre", "precio", "categoria", "stock"];
  const tieneCampos = requeridos.every((k) => Object.prototype.hasOwnProperty.call(producto, k));
  if (!tieneCampos) return false;
  return typeof producto.precio === "number" && producto.precio > 0 &&
         Number.isFinite(producto.stock) && producto.stock >= 0 &&
         typeof producto.id === "string" && producto.id &&
         typeof producto.nombre === "string" && producto.nombre &&
         typeof producto.categoria === "string" && producto.categoria;
}

// Pruebas
console.log("\n=== EJERCICIO 3 ===");
console.log("Correo válido:", validarCorreo("user@test.com"));
console.log("Contraseña válida:", validarContrasena("Fx!2024abc"));
console.log("Edad válida (23):", validarEdad(23));

// Extra
const prodValido = { id: "PR-001", nombre: "Producto 1", precio: 19.99, categoria: "General", stock: 10 };
const prodInvalido = { id: "PR-002", nombre: "", precio: -5, categoria: "General" };
console.log("Producto válido:", validarProducto(prodValido));
console.log("Producto inválido:", validarProducto(prodInvalido));
module.exports = { validarCorreo, validarContrasena, validarEdad, validarProducto };