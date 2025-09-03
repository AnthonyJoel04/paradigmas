const productosBase = [
  { id: "PR-MOUSE-001",     nombre: "Ratón inalámbrico",   marca: "Logi",     categoria: "Periféricos",  precio: 25.99,  stock: 40 },
  { id: "PR-TECLADO-001",   nombre: "Teclado mecánico RGB",marca: "Logi",     categoria: "Periféricos",  precio: 79.99,  stock: 30 },
  { id: "PR-PANTALLA-001",  nombre: "Pantalla LED 24\"",   marca: "Viewit",   categoria: "Pantallas",    precio: 159.99, stock: 12 },
  { id: "PR-LAPTOP-001",    nombre: "Portátil 14\" NovaBook", marca: "Nova",  categoria: "Computadores", precio: 850.00, stock: 7 },
  { id: "PR-USB-001",       nombre: "Hub USB-C multipuerto", marca: "Nova",   categoria: "Accesorios",   precio: 35.00,  stock: 60 },
];

class Producto {
  constructor({ id, nombre, precio, categoria, stock, marca }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = Number(precio);
    this.categoria = categoria;
    this.stock = Number(stock);
    this.marca = (marca != null) ? marca : null;
  }

  actualizarStock(delta) {
    const siguiente = this.stock + Number(delta);
    this.stock = Math.max(0, siguiente);
    return this.stock;
  }

  // aplica % descuento al precio de esta instancia y devuelve una nueva instancia
  calcularDescuento(porcentaje) {
    const p = Math.min(Math.max(Number(porcentaje), 0), 100);
    const conDescuento = +(this.precio * (1 - p / 100)).toFixed(2);
    return new Producto({ ...this, precio: conDescuento });
  }

  // Método estático: valor total del inventario
  static valorTotalInventario(lista) {
    return lista.reduce((acc, pr) => acc + pr.precio * pr.stock, 0);
  }

  // Método estático: aplicar descuento por categoría
  static aplicarDescuentoPorCategoria(lista, reglas) {
    return lista.map((p) => {
      const porcentaje = reglas[p.categoria] != null ? reglas[p.categoria] : 0;
      return new Producto(p).calcularDescuento(porcentaje);
    });
  }
}
if (require.main === module) {
  const productos = productosBase.map((p) => new Producto(p));

  console.log("\n=== EJERCICIO 2 ===");

  console.log("\n 1. Productos iniciales (5):");
  console.table(productos.map(({ id, nombre, categoria, precio, stock }) => ({
    id, nombre, categoria, precio, stock
  })));

  // Valor total del inventario
  console.log("\n2) Valor total del inventario:");
  console.log("$", Producto.valorTotalInventario(productos).toFixed(2));

  console.log("\nMetodo utilizado: Producto.valorTotalInventario(listaDeProductos)");

    // Reglas de descuento por categoría
  const reglasDescuento = { "Periféricos": 10, "Computadores": 5 };
  console.log("\n3) Aplicar descuento por categoría (Periféricos 10%, Computadores 5%):");
  const productosConDescuento = Producto.aplicarDescuentoPorCategoria(productos, reglasDescuento);
  console.table(productosConDescuento.map(({ id, nombre, categoria, precio, stock }) => ({
    id, nombre, categoria, precio, stock
  })));
  console.log("\nMetodo utilizado: Producto.aplicarDescuentoPorCategoria(listaDeProductos, reglasDescuento)");

  console.log("\nNuevo valor total del inventario (con descuentos):");
  console.log("$", Producto.valorTotalInventario(productosConDescuento).toFixed(2));
}

module.exports = { productosBase, Producto };
