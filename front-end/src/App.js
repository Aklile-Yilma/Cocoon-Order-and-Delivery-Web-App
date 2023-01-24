import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product/ProductDetail";
import Header from "./components/header/Header";
import Menu from "./components/menu/Menu";
import Cart from "./components/cart/Cart";
import Login from "./components/auth/Login";
import Home from "./components/Home";
import SignUp from "./components/auth/SignUp";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/logIn" element={<Login />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/food:id" element={<ProductDetail />}></Route>

          {/* <Route path="/about" element={<About />}></Route> */}
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
