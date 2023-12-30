import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  selectIsLoading,
  selectProducts,
} from "../redux/productSlice";

const Portfolio = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading)

  return (
    <section id='portfolio' className='section'>
      {!products ? (
        <p>No products found.</p>
      ) : (
        <>
          {products?.map((product) => {
            return (
              <div key={product._id}>
                <h1>Name: {product.name}</h1>
                <p>Discription: {product.description}</p>
                <p>Prints: {product.prints.length}</p>
                {product.prints.map((print) => {
                  return(
                  <p key={print._id}>-- Print sice {print.size} for ${print.price}</p>
                  )
                })}
                <br /> 
              </div>
            );
          })}
        </>
      )}
    </section>
  );
};

export default Portfolio;
