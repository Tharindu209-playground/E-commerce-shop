import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
      <header className="text-gray-600 body-font shadow-lg">
        <div className="flex">
          <Link to={'/'}  className="flex-auto w-40 title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
          <path fill="#E8EAF6" d="M42 39L6 39 6 23 24 6 42 23z"></path>
          <path fill="#C5CAE9" d="M39 21L34 16 34 9 39 9zM6 39H42V44H6z"></path>
          <path fill="#B71C1C" d="M24 4.3L4 22.9 6 25.1 24 8.4 42 25.1 44 22.9z"></path>
          <path fill="#D84315" d="M18 28H30V44H18z"></path><path fill="#01579B" d="M21 17H27V23H21z"></path>
          <path fill="#FF8A65" d="M27.5,35.5c-0.3,0-0.5,0.2-0.5,0.5v2c0,0.3,0.2,0.5,0.5,0.5S28,38.3,28,38v-2C28,35.7,27.8,35.5,27.5,35.5z"></path>
          </svg>
          <span className='font-bold'>Home</span>
          </Link>
          <h1 className="flex-auto text-6xl text-[#50d71e] font-mono font-extrabold text-cyan-800"> Eleven<span>7️⃣</span>Nine</h1>
          <Link to={'/cart'} className="flex-initial inline-flex items-center text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-700 rounded text-base mt-4 md:mt-0">
          <img width="40" height="40" src="https://img.icons8.com/plasticine/100/shopping-cart.png" alt="shopping-cart"/>
          <span className='font-bold'>Cart</span>
        </Link>
        
        </div>
      </header>
    )
}
export default Header;
