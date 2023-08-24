import './App.css';
import CartContextProvider from './context/CartContextProvider';
import {Routes, Route, Navigate} from "react-router-dom";
import ProductContextProvider from './context/ProductContextProvider';
import Store from "./Components/Store";
import ProductDetail from './Components/ProductDetail';
import NavBar from './Components/shared/NavBar';
import ShopCart from './Components/ShopCart';
 
function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <NavBar/>
        <Routes>
         <Route path="/products" element={<Store/>} />
         <Route path="/" element={<Store/>} />
         <Route path="/cart" element={<ShopCart/>} />
         <Route path="/products/:id" element={<ProductDetail/>} />
         <Route path="/*"  element={<Navigate to="/product/"/>}  />

        </Routes>
      </CartContextProvider>
     </ProductContextProvider>
  );
}

export default App;
