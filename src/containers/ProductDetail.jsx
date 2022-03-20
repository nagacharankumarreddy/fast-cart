import axios from "axios";
import React, { useEffect } from "react";
import {
  removeSelectedProduct,
  selectedProduct,
} from "../redux/actions/productActions";
// import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const fetchProductDetail = async () => {
    const res = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedProduct(res.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  const product = useSelector((state) => state.product);
  const { id, title, category, image, price, description, rating } = product;
  const per = 20;
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div className="spinner-border spinner-border-sm text-info" style={{width: "5rem", height: "5rem"}}>
        </div>
  
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <img
                src={image}
                alt={title}
                className="img-circle"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="col-sm-4"></div>

            <div className="col-sm-4">
              <h1>{category}</h1>
              <h3>{title}</h3>
              <h5>{description}</h5>
              <h5>Rating:</h5>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-info"
                  role="progressbar"
                  style={{ width: `${rating.rate*20}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
