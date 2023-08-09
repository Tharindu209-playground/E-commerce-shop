import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice - originalPrice * (discountPercentage / 100);
}

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [product, setProduct] = useState({});
  console.log(id, "id", product);

  useEffect(() => {
    const fetchProduct = async () => {    
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleCart = (product, redirect) => {
    console.log(product)
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const isProductExist = cart.find(item => item.id === product.id)
    if(isProductExist) {
      const updatedCart = cart.map(item => {
        if(item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1
          }
        }
        return item
      })
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, {...product, quantity: 1}]))
    }
    alert('Product added to cart')
    if(redirect) {
      navigate('/cart')
    }
  }

  if(!Object.keys(product).length > 0) return <div>Loading.....</div>
  return (
    <section className=" static text-gray-600 body-font overflow-hidden">
    <Link to={'/'} className="absolute bottom-128 start-20 font-semibold text-blue-600 text-sm mt-10">
    <svg className="fill-current mr-2 text-blue-600 w-4" viewBox="0 0 448 512">
    <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
    Back
  </Link>
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product?.title}
            className="lg:w-1/2 w-full lg:h-auto max-h-[600px] h-64 object-contain object-center rounded"
            src={product?.thumbnail}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-large title-font text-blue-600 tracking-widest uppercase">
              {product?.category}
            </h2>
            <h1 className="text-emerald-50 text-4xl title-font font-medium mb-2">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-emerald-100 text-xl">
                  Brand : {product?.brand}
                </span>
              </span>
            </div>
            <p className="leading-relaxed mb-4 text-emerald-100">{product?.description}</p>
            <div className="flex items-center mt-4">
              <div className="flex items-center mr-6">
              <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/2266EE/rating.png" alt="rating"/>
                <p className="text-emerald-50 font-medium">
                    {
                        console.log(product)
                    }
                  {product?.rating?.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 text-blue-500 mr-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 13l4 4 8-8"></path>
                </svg>
                <p className="text-gray-600 font-medium">
                  Stock: {product?.stock}
                </p>
              </div>
            </div>

            <div className="flex items-center mt-2">
              {product?.discountPercentage > 0 ? (
                <>
                  <p className="text-xl font-medium text-emerald-50 line-through">
                    ${product?.price?.toFixed(2)}
                  </p>
                  <p className="text-xl ml-2 font-medium text-blue-600">
                    $
                    {calculateDiscountedPrice(
                      product?.price,
                      product?.discountPercentage
                    ).toFixed(2)}
                  </p>
                  <p className="text-sm ml-2 text-blue-600">
                    -{product?.discountPercentage?.toFixed(2)}% off
                  </p>
                </>
              ) : (
                <p className="text-xl font-medium text-gray-800">
                  ${product?.price?.toFixed(2)}
                </p>
              )}
            </div>

            <div className="mt-6">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                Images
              </h3>
              <div className="flex space-x-2">
                {product?.images?.map((image, index) => (
                  // eslint-disable-next-line jsx-a11y/img-redundant-alt
                  <img
                    key={index}
                    alt={`Image ${index + 1}`}
                    className="h-16 w-16 object-cover border border-gray-300"
                    src={image}
                  />
                ))}
              </div>
            </div>

            <div className="flex mt-6 items-start space-x-2">
              <button className="text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded" onClick={() => handleCart(product, true)}>
                Buy it now
              </button>
              <button className="text-slate-300 border border-blue-500 py-2 px-4 focus:outline-none hover:bg-blue-600 hover:text-white rounded" onClick={() => handleCart(product)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
