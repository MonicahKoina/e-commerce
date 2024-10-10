import React, { useEffect, useState } from "react";
import "./Shop.css";
function Shop() {
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    ourStore();
  }, []);
  const ourStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const obData = await response.json();
    setProducts(obData);
  };
  return (
    <div className="container">
      {products.map((values) => {
        return (
          <>
            <div className="store-data">
            <img src={values.image} alt="" />
              <div className="content">
                <h3>{values.title}</h3>
                <h5>{values.price}$</h5>
                <p>{values.description}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Shop;
