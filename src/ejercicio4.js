// === funciones ===
const filtrarPorRangoPrecio = (arr, minimo = 0, maximo = Infinity) =>
  arr.filter((p) => p.precio >= minimo && p.precio <= maximo);

const agruparPor = (arr, clave) =>
  arr.reduce((acc, item) => {
    const k = item[clave];
    acc[k] = acc[k] || [];   // antes: acc[k] ||= []
    acc[k].push(item);
    return acc;
  }, {});

const buscarPorMarca = (arr, marca) =>
  arr.filter(
    (p) => (p.marca ? p.marca.toLowerCase() : "") === String(marca).toLowerCase()
  ); // antes: p.marca?.toLowerCase()

const estadisticasPorCategoria = (arr) =>
  Object.entries(agruparPor(arr, "categoria")).reduce((acc, [cat, items]) => {
    const cantidad = items.length;
    const precioPromedio =
      cantidad > 0 ? items.reduce((s, p) => s + p.precio, 0) / cantidad : 0;
    const valorInventario = items.reduce((s, p) => s + p.precio * p.stock, 0);
    acc[cat] = { cantidad, precioPromedio, valorInventario };
    return acc;
  }, {});

// exporta
module.exports = {
  filtrarPorRangoPrecio,
  agruparPor,
  buscarPorMarca,
  estadisticasPorCategoria,
};

// === pruebas si corres este archivo directamente ===
if (require.main === module) {
  const productos = [
    { marca: "Sony", categoria: "audio", precio: 100, stock: 5 },
    { marca: "Sony", categoria: "video", precio: 300, stock: 2 },
    { marca: "LG", categoria: "video", precio: 250, stock: 4 },
    { marca: "Samsung", categoria: "audio", precio: 150, stock: 3 },
    { marca: "Lenovo", categoria: "computo", precio: 500, stock: 1 },
  ];

  console.log("\n▶ Estadísticas por categoría:");
  console.table(estadisticasPorCategoria(productos)); // <-- AQUÍ la tabla bonita 😎
}
