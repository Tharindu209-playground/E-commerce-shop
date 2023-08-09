import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './modules/Product';
import Products from './modules/Products';
import { Routes ,Route } from 'react-router-dom'
import CategoryProducts from './modules/CategoryProduct';
import Cart from './modules/Cart';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        {/* <Route path="/products" element={<Products/>} /> */}
        <Route path = "/" element = {<Products/>}/>
        <Route path = "/products/:id" element = {<Product/>}/>
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        <Route path="cart" element={<Cart/>} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
