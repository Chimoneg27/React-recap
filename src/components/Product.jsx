import React, {useState} from 'react';
import '.././App.css';
import Card from './Card';

const Products = ({products}) => {

  return (
    <>
      {products.map((product) => (
        <Card product={product} key={product.id}></Card>  
      ))}
    </>
  )
}

export default Products
