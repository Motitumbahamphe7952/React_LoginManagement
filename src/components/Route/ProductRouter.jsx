import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateProduct from '../product/CreateProduct'
import ReadAllProduct from '../product/ReadAllProduct'
import ProductDetails from '../product/ProductDetails'
import UpdateProduct from '../product/UpdateProduct'

const ProductRouter = () => {
  return (
    <Routes>
    <Route path="/create" element={<CreateProduct></CreateProduct>}></Route>
    <Route path="/" element={<ReadAllProduct></ReadAllProduct>}></Route>
    <Route path="/:id" element={<ProductDetails></ProductDetails>}></Route>
    <Route path="/update/:id" element={<UpdateProduct></UpdateProduct>}></Route>
  </Routes>
  )
}

export default ProductRouter