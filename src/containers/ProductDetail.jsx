import axios from "axios";
import React, { useEffect } from "react";
import { selectedProduct } from "../redux/actions/productActions";
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
  }, [productId]);
  const product = useSelector((state) => state.product);
  const { id, title, category, image, price,description } = product;

  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <img src={image} alt={title}  className="img-circle" style={{width:"100%",height:"auto"}}/>
            </div>
            <div class="col-sm-4">
              
            </div>
            
            <div class="col-sm-4">
              <h1>{title}</h1>
              <h5>{description}</h5>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
