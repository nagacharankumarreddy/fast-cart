import React, { Component } from "react";
import { useSelector } from "react-redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, category, image, price } = product;
    return (
      <div className="card" style={{width:"250px"}} key={id}>
        <img className="card-img-top" src={image} alt={title} height="200px" width="200px"/>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{category}</p>
          <a href="#" className="btn btn-primary">
            click here
          </a>
        </div>
      </div>
        
    );
  });
  return <>{renderList}</>;
};
export default ProductComponent;
