import React from 'react';
import Navbar from '../components/Navbar';
import AddProductForm from '../components/AddProductForm';
import Product from '../components/Product';


function Home({products, setProducts}) {
  return (
    <>
    <Navbar></Navbar>
    <h1 className="main-title my-5 text-sky-500 text-5xl hover:text-sky-700">Welcome To My React App</h1>
    <div className="card-container grid  grid-cols-4  gap-4">
    <AddProductForm products={products} setProducts={setProducts}></AddProductForm>
    <Product products={products}></Product>
    </div>
    </>
    
  )
}

export default Home
