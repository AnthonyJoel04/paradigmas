const IVA = 0.19;

const conPrecioConImpuesto = (arr, impuesto = IVA) =>
  arr.map((p) => ({ ...p, precioConImpuesto: +(p.precio * (1 + impuesto)).toFixed(2) }));

const conEstado = (arr) =>
  arr.map((p) => {
    let estado = "Bajo";
    if (p.stock >= 50) estado = "Alto";
    else if (p.stock >= 20) estado = "Medio";
    return { ...p, estado };
  });

const resumenInventarioPorCategoria = (arr) =>
  arr.reduce((acc, p) => {
    const cat = p.categoria;
    acc[cat] ||= { productos: 0, unidades: 0, valorTotal: 0 };
    acc[cat].productos += 1;
    acc[cat].unidades += p.stock;
    acc[cat].valorTotal += p.precio * p.stock;
    return acc;
  }, {});

module.exports = { conPrecioConImpuesto, conEstado, resumenInventarioPorCategoria };
