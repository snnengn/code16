import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import Slider from "../components/Slider";

function Products() {
  const [last10Products, setLast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((res) => res.json())
      .then((res) => setLast10Products(res));
  });
  return (
    <>
    < Slider />
      <h3 className="my-4 border rounded bg-light py-2 text-center">Ürünler</h3>
      <div className="row row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
        {last10Products.map((product) => (
          <ProductCard key={product.id} item={product} />
        ))}
      </div>
    </>
  );
}

export default Products;
