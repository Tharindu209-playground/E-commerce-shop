import React, { useEffect, useState } from 'react';
import FeatureCard from '../FeatureCard';

const Categories = () => {
    const [price, setPrice] = useState([])
    useEffect(() => {
      const fetchCategories = async () => {
        const response = await fetch('https://dummyjson.com/products?select=id,price')
        const data = await response.json()
        console.log(data, 'data')
        setPrice(data.products)
      }
      fetchCategories()
    }, [])
  
    if (price.length === 0) return <div>Loading.....</div>
  
    return (
        <FeatureCard cards={price}/>
    )
  }
export default Categories;
