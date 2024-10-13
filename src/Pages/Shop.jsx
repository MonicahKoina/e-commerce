import React, { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../Context/Context";

function Shop() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  console.log(products);
  useEffect(() => {
    ourStore();
  }, []);

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);

  const ourStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const obData = await response.json();
    setProducts(obData);
    setFilterProducts(obData);
  };
  const handleCategoryChange = (category) => {
    if (category) {
      setFilterProducts(
        products.filter((product) => product.category === category)
      );
    } else {
      setFilterProducts(products);
    }
  };
  return (
    <div className="container">
        <div className="category-btns">
        <button onClick={() => handleCategoryChange("")}>All</button>
        <button onClick={() => handleCategoryChange("electronics")}>
          Electronics
        </button>
        <button onClick={() => handleCategoryChange("jewelery")}>
          Jewelery
        </button>
        <button onClick={() => handleCategoryChange("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => handleCategoryChange("women's clothing")}>
          Women's Clothing
        </button>
      </div>
      <div className="product">
      {filterProducts.map((values) => {
        return (
          <>
            <div key={values.id}className="store-data">
                <div className="content">
                <img src={values.image} alt="" />
                  <h3>{values.title}</h3>
                  <h5>Price: {values.price}$</h5>
                  <h6>Category: {values.category}</h6>
                  <div className="Buybtn">
                    <button className="cart-btn" onClick={()=>dispatch({type:"ADD", payload: values})}>Add to Cart</button>
                  </div>
              </div>
            </div>
          </>
        );
      })}

      </div>
    </div>
  );
}

export default Shop;
