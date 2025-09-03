const IVA = 0.19;

// Añadir priceWithTax (precio con IVA)
const addPriceWithTax = (arr, tax = IVA) =>
  arr.map((p) => ({
    ...p,
    priceWithTax: Number((p.precio * (1 + tax)).toFixed(2)),
  }));

  // Añadir status según stock
const addStatus = (arr) =>
  arr.map((p) => {
    let status = "Bajo";
    if (p.stock >= 50) status = "Medio";
    else if (p.stock >= 20) status = "Alto";
    return { ...p, status };
  });

 // Resumen de inventario por categoría
const inventorySummaryByCategory = (arr) =>
  arr.reduce((acc, p) => {
    const cat = p.categoria;
    acc[cat] = acc[cat] || { products: 0, units: 0, totalValue: 0 };
    acc[cat].products += 1;
    acc[cat].units += Number(p.stock || 0);
    acc[cat].totalValue += Number(p.precio || 0) * Number(p.stock || 0);
    return acc;
  }, {});

module.exports = {
  addPriceWithTax,
  addStatus,
  inventorySummaryByCategory,
};

if (require.main === module) {
  const products = [
    { id: 1, marca: "Sony", categoria: "audio", precio: 100, stock: 5 },
    { id: 2, marca: "Sony", categoria: "video", precio: 300, stock: 55 },
    { id: 3, marca: "LG", categoria: "video", precio: 250, stock: 22 },
    { id: 4, marca: "Samsung", categoria: "audio", precio: 150, stock: 12 },
    { id: 5, marca: "Lenovo", categoria: "computadores", precio: 500, stock: 1 },
    { id: 6, marca: "Asus", categoria: "perifericos", precio: 120, stock: 60 },
  ];

  // Extraer datos con nuevas propiedades
  const withTax = addPriceWithTax(products);
  const withStatus = addStatus(withTax);
  const summary = inventorySummaryByCategory(products);

  // Mostrar resultados por consola con IVA 19%
  console.log("1) Con PriceWithTax (19%):");
  console.table(
    withTax.map(({ id, marca, categoria, precio, priceWithTax, stock }) => ({
      id, marca, categoria, precio, priceWithTax, stock,
    }))
  );
//Mostrar el resultado de addStatus
  console.log("\n2) Con status (Alto/Medio/Bajo):");
  console.table(
    withStatus.map(({ id, marca, categoria, precio, priceWithTax, stock, status }) => ({
      id, marca, categoria, precio, priceWithTax, stock, status,
    }))
  );

 //Mostrar el resultado de inventorySummaryByCategory
  console.log("\n3) Resumen de inventario por categoría:");
  console.table(summary);
}