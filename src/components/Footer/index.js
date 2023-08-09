import React, { useEffect, useState } from 'react';

const Footer = () => {
  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <footer className="bg-gray-100 py-6">
      <div className="container mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-5">
          {/* Description Column */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-2">
            <img width="64" height="64" src="https://img.icons8.com/arcade/64/79.png" alt="79"/>
              <span className="ml-3 text-xl">Eleven7Nine</span>
            </div>
            
          </div>
        </div>
        <p className="text-sm text-gray-500 text-right">This is the Another JS Assignmet for 2nd Semester</p>
      </div>
    </footer>
  );  
};
export default Footer;
