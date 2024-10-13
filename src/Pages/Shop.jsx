import React, { useEffect, useState } from "react";


function Shop() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState("");
  
  console.log(products);
  useEffect(() => {
    ourStore();
  }, []);
  const ourStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const obData = await response.json();
    setProducts(obData);
    setFilterProducts(obData);
  };
  const handleCategoryChange = (category) => {
    setCategories(category);
    if (category) {
      setFilterProducts(products.filter((product) => product.category === category));
    } else {
      setFilterProducts(products);
    }
  };
  return (
    <div className="container">
        <div className="filter-btns">
        <button onClick={() => handleCategoryChange("")}>All</button>
        <button onClick={() => handleCategoryChange("electronics")}>Electronics</button>
        <button onClick={() => handleCategoryChange("jewelery")}>Jewelery</button>
        <button onClick={() => handleCategoryChange("men's clothing")}>Men's Clothing</button>
        <button onClick={() => handleCategoryChange("women's clothing")}>Women's Clothing</button>
      </div>
      {filterProducts.map((values) => {
        return (
          <>
            <div className="store-data">
            <img src={values.image} alt="" />
              <div className="content">
                <h3>{values.title}</h3>
                <h5>Price: {values.price}$</h5>
                <h6>Category: {values.category}</h6>
                <div>
                <button className="Buybtn">Add to Cart</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Shop;
