const filtrarPorRangoPrecio = (arr, minimo = 0, maximo = Infinity) =>
  arr.filter((p) => p.precio >= minimo && p.precio <= maximo);

const agruparPor = (arr, clave) =>
  arr.reduce((acc, item) => {
    const k = item[clave];
    acc[k] ||= [];
    acc[k].push(item);
    return acc;
  }, {});

const buscarPorMarca = (arr, marca) =>
  arr.filter((p) => p.marca?.toLowerCase() === String(marca).toLowerCase());

const estadisticasPorCategoria = (arr) =>
  Object.entries(agruparPor(arr, "categoria")).reduce((acc, [cat, items]) => {
    const cantidad = items.length;
    const precioPromedio = items.reduce((s, p) => s + p.precio, 0) / cantidad;
    const valorInventario = items.reduce((s, p) => s + p.precio * p.stock, 0);
    acc[cat] = { cantidad, precioPromedio, valorInventario };
    return acc;
  }, {});

module.exports = { filtrarPorRangoPrecio, agruparPor, buscarPorMarca, estadisticasPorCategoria };