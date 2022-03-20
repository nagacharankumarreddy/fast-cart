import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";
const ProductListing = () => {
  const dispatch=useDispatch()
  const fetchProducts = async () => {
    const res = await axios
      .get("https://fakestoreapi.com/products")
      .catch((er) => {
        console.log(er);
      });
      dispatch(setProducts(res.data))
  };
  useEffect(()=>{
      fetchProducts();
  },[])
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};
export default ProductListing;
