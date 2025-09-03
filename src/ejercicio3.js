function validarCorreo(correo) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(String(correo).trim());
}
function validarContrasena(contrasena) {
  const s = String(contrasena);
  return s.length >= 8 && /[A-Z]/.test(s) && /[a-z]/.test(s) && /\d/.test(s) && /[^A-Za-z0-9]/.test(s);
}
function validarEdad(edad) {
  const n = Number(edad);
  return Number.isInteger(n) && n >= 0 && n <= 120;
}
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

console.log("\n=== EJERCICIO 3 ===");
console.log("Correo válido:", validarCorreo("user@test.com"));
console.log("Contraseña válida:", validarContrasena("Fx!2024abc"));
console.log("Edad válida (23):", validarEdad(23));

module.exports = { validarCorreo, validarContrasena, validarEdad, validarProducto };
