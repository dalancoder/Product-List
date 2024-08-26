
import "./App.scss";
import "./components/Header/Header.scss"
import "./components/ProductCard/ProductCard.scss"
import Header from "./components/Header/Header";
import ProductCard from "./components/ProductCard/ProductCard";
import {categories} from "./helper/data";
import {products} from "./helper/data";



function App() {
 console.log(products);
 
  return (

    <div >
    <Header categories={categories}/>
    <ProductCard products={products}/>
    </div>
  )
}

export default App;
