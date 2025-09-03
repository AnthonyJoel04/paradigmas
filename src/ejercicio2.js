const productos = [
  { id: "PR-MOUSE-001", nombre: "Ratón inalámbrico", marca: "Logi", categoria: "Periféricos", precio: 25.99, stock: 40 },
  { id: "PR-TECLADO-001", nombre: "Teclado mecánico RGB", marca: "Logi", categoria: "Periféricos", precio: 79.99, stock: 30 },
  { id: "PR-PANTALLA-001", nombre: "Pantalla LED 24\"", marca: "Viewit", categoria: "Pantallas", precio: 159.99, stock: 12 },
  { id: "PR-LAPTOP-001", nombre: "Portátil 14\" NovaBook", marca: "Nova", categoria: "Computadores", precio: 850.0, stock: 7 },
  { id: "PR-USB-001", nombre: "Hub USB-C multipuerto", marca: "Nova", categoria: "Accesorios", precio: 35.0, stock: 60 },
  { id: "PR-SSD-001", nombre: "SSD 1TB NVMe", marca: "FastMem", categoria: "Almacenamiento", precio: 95.9, stock: 20 },
  { id: "PR-AURICULARES-001", nombre: "Auriculares gamer", marca: "SoundMax", categoria: "Periféricos", precio: 59.99, stock: 25 },
];

class Producto {
  constructor({ id, nombre, precio, categoria, stock, marca }) {
    this.id = id;
    this.nombre = nombre;
    this.precio = Number(precio);
    this.categoria = categoria;
    this.stock = Number(stock);
    this.marca = marca ?? null;
  }

    actualizarStock(delta) {
    const siguiente = this.stock + Number(delta);
    this.stock = Math.max(0, siguiente);
    return this.stock;
  }

  calcularDescuento(porcentaje) {
    const p = Math.min(Math.max(Number(porcentaje), 0), 100);
    const conDescuento = +(this.precio * (1 - p / 100)).toFixed(2);
    return { ...this, precio: conDescuento };
  }

  obtenerInfo() {
    return `${this.nombre} [${this.id}] • ${this.categoria} • $${this.precio.toFixed(2)} • stock: ${this.stock}`;
  }

  static obtenerValorTotal(lista) {
    return lista.reduce((acc, pr) => acc + pr.precio * pr.stock, 0);
  }

  static aplicarDescuentoPorCategoria(lista, reglas) {
    return lista.map((p) => {
      const porcentaje = reglas[p.categoria] ?? 0;
      return new Producto(new Producto(p).calcularDescuento(porcentaje));
    });
  }
}

const productosClase = productos.slice(0, 5).map((p) => new Producto(p));
console.log("\n=== EJERCICIO 2 ===");
console.table(productosClase.map((p) => ({ id: p.id, nombre: p.nombre, categoria: p.categoria, precio: p.precio, stock: p.stock })));
console.log("Valor inventario:", Producto.obtenerValorTotal(productosClase).toFixed(2));
console.log("Actualizar stock del primero:", productosClase[0].actualizarStock(-10));

const reglasDescuento = { "Periféricos": 10, "Computadores": 5 };
console.table(Producto.aplicarDescuentoPorCategoria(productosClase, reglasDescuento).map((p) => ({ id: p.id, nombre: p.nombre, precio: p.precio })));

module.exports = { productos, Producto };