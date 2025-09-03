// ===== Reglas del ejercicio =====
// - Agrega campo "priceWithTax" (19% IVA por defecto)
// - Agrega campo "status" basado en stock: High (>=50), Medium (>=20), Low (<20)
// - Crea un resumen de inventario por categoría

const IVA = 0.19;

const addPriceWithTax = (arr, tax = IVA) =>
  arr.map((p) => ({
    ...p,
    priceWithTax: Number((p.precio * (1 + tax)).toFixed(2)),
  }));

const addStatus = (arr) =>
  arr.map((p) => {
    let status = "Bajo";
    if (p.stock >= 50) status = "Medio";
    else if (p.stock >= 20) status = "Alto";
    return { ...p, status };
  });

const inventorySummaryByCategory = (arr) =>
  arr.reduce((acc, p) => {
    const cat = p.categoria;
    acc[cat] = acc[cat] || { products: 0, units: 0, totalValue: 0 };
    acc[cat].products += 1;
    acc[cat].units += Number(p.stock || 0);
    acc[cat].totalValue += Number(p.precio || 0) * Number(p.stock || 0);
    return acc;
  }, {});

// exporta exactamente lo pedido (en inglés para que coincida con la consigna)
module.exports = {
  addPriceWithTax,
  addStatus,
  inventorySummaryByCategory,
};

// ===== Demo mínima (imprime resultados si lo ejecutas directo) =====
if (require.main === module) {
  const products = [
    { id: 1, marca: "Sony", categoria: "audio", precio: 100, stock: 5 },
    { id: 2, marca: "Sony", categoria: "video", precio: 300, stock: 55 },
    { id: 3, marca: "LG", categoria: "video", precio: 250, stock: 22 },
    { id: 4, marca: "Samsung", categoria: "audio", precio: 150, stock: 12 },
  ];

  const withTax = addPriceWithTax(products);
  const withStatus = addStatus(withTax);
  const summary = inventorySummaryByCategory(products);

  console.log("1) Con priceWithTax (19%):");
  console.table(
    withTax.map(({ id, marca, categoria, precio, priceWithTax, stock }) => ({
      id, marca, categoria, precio, priceWithTax, stock,
    }))
  );

  console.log("\n2) Con status (High/Medium/Low):");
  console.table(
    withStatus.map(({ id, marca, categoria, precio, priceWithTax, stock, status }) => ({
      id, marca, categoria, precio, priceWithTax, stock, status,
    }))
  );

  console.log("\n3) Resumen de inventario por categoría:");
  console.table(summary);
}