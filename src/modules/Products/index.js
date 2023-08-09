import React, { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import Categories from '../../components/Categories';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(9);
    const [totalProducts, setTotalProducts] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
       const fetchProducts = async () => {
        const response = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage - 1) * productsPerPage}`);
        const data = await response.json();
        setProducts(data.products);
        setTotalProducts(data.total);
       };
       fetchProducts();
    }, [currentPage, productsPerPage]);

    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

    const handleSearch = async () => {
      if (searchQuery.trim() === '') {
          return;
      }

      const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
      const data = await response.json();
      setProducts(data.products);
      setTotalProducts(data.total);
      setCurrentPage(1); 
  };
   return (
    <>
    <div className="flex items-center justify-center mt-4">
       <input type="text" placeholder="Search products" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-64 px-4 py-2 border rounded-l-lg focus:outline-none" />
       <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none"> Search </button>
    </div>
    <div className='my-5 w-full flex flex-col space-y-3 md:flex-row md:space-x-5 md:space-y-0'>
         <div className='md:w-1/20 lg:w-4/10 px-4 py-10'>
           <Categories />
         </div>
         <div className="md:w-5/10 lg:w-8/12 px-10 py-3">
           <h2 className="flex justify-center text-xs text-blue-500 tracking-widest font-medium title-font mb-2">PRODUCTS</h2>
           <h1 className="flex justify-center sm:text-3xl text-2xl font-medium title-font text-white">ALL PRODUCTS</h1>
         {products.length > 0 ? (
           <>
             <ProductCard products={products} />
             <div className="flex justify-center mt-4">
               {pageNumbers.map((pageNumber) => (
                 <button
                   key={pageNumber}
                   onClick={() => setCurrentPage(pageNumber)}
                   className={`px-3 py-2 mx-1 mb-6 bg-blue-300 justify-center hover:bg-blue-300 text-white rounded-lg ${currentPage === pageNumber ? 'bg-blue-700' : ''}`}
                 >
                   {pageNumber}
                 </button>
               ))}
             </div>
           </>
         ) : (
           <div>Loading.....</div>
         )}
         </div>
    </div></>
    );
};

export default Products;
