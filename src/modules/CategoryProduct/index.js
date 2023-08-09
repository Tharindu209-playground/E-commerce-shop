import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import ProductCard from '../../components/ProductCard'

const CategoryProducts = () => {
    const { name } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products/category/${name}`)
        const data = await response.json()
        console.log(data)
        setProducts(data.products)
      }
      fetchProducts()
    }, [name])
  
    if (products?.length === 0) return <div>Loading.....</div>
  
    return (
      <>
      <Link to={'/'} className="absolute bottom-128 start-20 font-semibold text-blue-600 text-sm mt-10">
    <svg className="fill-current mr-2 text-blue-600 w-4" viewBox="0 0 448 512">
    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
    Back
  </Link>
      <div className="flex flex-col text-center w-full mb-4 mt-8">
      <h2 className="text-lg text-blue-500 tracking-widest font-medium title-font mb-1 uppercase">{name}</h2>
      <ProductCard products={products} />
      </div>
      </>  
    )
  }
  
export default CategoryProducts;
