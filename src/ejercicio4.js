const filtrarPorRangoPrecio = (arr, minimo = 0, maximo = Infinity) =>
  arr.filter((p) => p.precio >= minimo && p.precio <= maximo);

const agruparPor = (arr, clave) =>
  arr.reduce((acc, item) => {
    const k = item[clave];
    acc[k] = acc[k] || [];
    acc[k].push(item);
    return acc;
  }, {});

const buscarPorMarca = (arr, marca) => {
  const buscada = String(marca || "").toLowerCase();
  return arr.filter((p) => (p.marca ? p.marca.toLowerCase() : "") === buscada);
};

const estadisticasPorCategoria = (arr) =>
  Object.entries(agruparPor(arr, "categoria")).reduce((acc, [cat, items]) => {
    const cantidad = items.length;
    const total = items.reduce((s, p) => s + Number(p.precio || 0), 0);
    const promedio = cantidad ? total / cantidad : 0;
    acc[cat] = {
      cantidad,
      promedio: Number(promedio.toFixed(2)),
      total: Number(total.toFixed(2)),
    };
    return acc;
  }, {});

module.exports = {
  filtrarPorRangoPrecio,
  agruparPor,
  buscarPorMarca,
  estadisticasPorCategoria,
};

if (require.main === module) {
  const productos = [
    { id: 1, marca: "Sony",    categoria: "audio",    precio: 100, stock: 5 },
    { id: 2, marca: "Sony",    categoria: "video",    precio: 300, stock: 2 },
    { id: 3, marca: "LG",      categoria: "video",    precio: 250, stock: 4 },
    { id: 4, marca: "Samsung", categoria: "audio",    precio: 150, stock: 3 },
    { id: 5, marca: "Lenovo",  categoria: "computo",  precio: 500, stock: 1 },
    { id: 6, marca: "LG",      categoria: "audio",    precio: 120, stock: 6 },
  ];

  const MIN = 100;
  const MAX = 300;
  const MARCA_BUSCADA = "sony";

  const filtrados = filtrarPorRangoPrecio(productos, MIN, MAX);
  console.log(`1) Filtrar por rango de precio [${MIN}, ${MAX}] (${filtrados.length})`);
  console.table(
    filtrados.map(({ id, marca: Marca, categoria: Categoria, precio: Precio, stock: Stock }) => ({
      id, Marca, Categoria, Precio, Stock
    }))
  );

  const grupos = agruparPor(productos, "categoria");
  console.log("\n2) Agrupar por categoría:");
  Object.keys(grupos).forEach((cat) => {
    console.log(`  - ${cat} (${grupos[cat].length})`);
  });

  const porMarca = buscarPorMarca(productos, MARCA_BUSCADA);
  console.log(`\n3) Buscar por marca = "${MARCA_BUSCADA}" (${porMarca.length})`);
  console.table(
    porMarca.map(({ id, marca: Marca, categoria: Categoria, precio: Precio, stock: Stock }) => ({
      id, Marca, Categoria, Precio, Stock
    }))
  );

  console.log("\n4) Estadísticas por categoría (promedio, total, cantidad):");
  console.table(estadisticasPorCategoria(productos));
}