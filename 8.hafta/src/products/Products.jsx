import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";

function Products() {
  const [last10Products, setLast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((res) => setLast10Products(res));
  });
  return (
    <>
      <h1 className="my-4">Ürünler</h1>
      <div className="row row-cols-sm-3">
        {last10Products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
