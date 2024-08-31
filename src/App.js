import "./App.scss";
import "./components/Header/Header.scss";
import "./components/ProductCard/ProductCard.scss";
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import { categories } from "./helper/data";
import { products } from "./helper/data";
import { useState } from "react";

function App() {
  
  const [data, setData] = useState(products);
  const handleThing = (par2) => {
   
    const filteredData =
      par2 === "all"
        ? products
        : products.filter((item) => item.category === par2);
    setData(filteredData);
  };

  return (
    <div>
      <Header handleThing={handleThing} categories={categories} />
      <ProductCard products={data} />
    </div>
  );
}

export default App;
