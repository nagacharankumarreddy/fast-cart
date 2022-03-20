import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, category, image, price } = product;
    return (
      <div className="column four wide" key={id}>
        <Link to={`/product/${id}`}>
        <div className="ui link card">
          <div className="image">
            <img src={image} alt={title} height="200px"/>
          </div>
          <div className="content">
            <div className="header">{title}</div>
            <div className="meta price">${price}</div>
            <div className="meta">{category}</div>
          </div>
        </div>
        </Link>
        
      </div>
        
    );
  });
  return <>{renderList}</>;
};
export default ProductComponent;
