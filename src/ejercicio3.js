// 1) Verifica formato de email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(String(email).trim());
}

// 2) Verifica fortaleza de contraseña
function validatePassword(password) {
  const s = String(password);
  return (
    s.length >= 8 &&
    /[A-Z]/.test(s) &&
    /[a-z]/.test(s) &&
    /\d/.test(s) &&
    /[^A-Za-z0-9]/.test(s)
  );
}

// 3) Verifica edad válida
function validateAge(age) {
  const n = Number(age);
  return Number.isInteger(n) && n >= 0 && n <= 120;
}

// 4) Valida objeto producto completo
function validateProduct(product) {
  const requeridos = ["id", "nombre", "precio", "categoria", "stock"];
  const tieneCampos = requeridos.every((k) =>
    Object.prototype.hasOwnProperty.call(product, k)
  );
  if (!tieneCampos) return false;

  return (
    typeof product.precio === "number" &&
    product.precio > 0 &&
    Number.isFinite(product.stock) &&
    product.stock >= 0 &&
    typeof product.id === "string" &&
    product.id &&
    typeof product.nombre === "string" &&
    product.nombre &&
    typeof product.categoria === "string" &&
    product.categoria
  );
}
if (require.main === module) {
  console.log("\n=== EJERCICIO 3 ===");

  // 1) Validar emails
  console.log("\n1) Validar email:");
  const emails = ["user@test.com", "bademail@", "correo@dominio.co"];
  console.table(emails.map((e) => ({ email: e, valido: validateEmail(e) })));
  
  // Validar contraseñas
  console.log("\n2) Validar contraseña:");
  const passwords = ["Fx!2024abc", "simple123.", "WeakPw2", "Strong1!"];
  console.table(passwords.map((p) => ({ password: p, valido: validatePassword(p) })));

   // Validar edades
  console.log("\n3) Validar edad:");
  const edades = [23, -5, 150, 20];
  console.table(edades.map((edad) => ({ edad, valido: validateAge(edad) })));

    // Validar producto
  console.log("\n4) Validar producto:");
  const productos = [
    { id: "Tablet", nombre: "Producto 1", precio: 19.99, categoria: "General", stock: 10 },
    { id: "Teclado", nombre: "Producto 2", precio: -5, categoria: "General" , stock: 5 },
  ];
  console.table(productos.map((p) => ({
    id: p.id,
    nombre: p.nombre,
    categoria: p.categoria,
    precio: p.precio,
    stock: p.stock ?? "-",
    valido: validateProduct(p),
  })));
}

// Exportar funciones para pruebas unitarias
module.exports = {
  validateEmail,
  validatePassword,
  validateAge,
  validateProduct,
};
