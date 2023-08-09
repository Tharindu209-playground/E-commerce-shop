/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ products = [] }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 pl-36">
          {products.map((product) => {
            const {id,title,price,category,thumbnail} = product
            return (
              <Link to = {`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 ms-1 w-full border border-opacity-50 mb-5 cursor-pointer hover:bg-blue-500 rounded-lg">
                <a className="block relative h-48 rounded-lg">
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={thumbnail}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-white text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-emerald-50 title-font text-lg font-medium">
                   {title}
                  </h2>
                  <p className="text-pink-600 mt-1 text-md font-semibold">${price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
