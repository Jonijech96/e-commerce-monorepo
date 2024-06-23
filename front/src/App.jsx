import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Purchases from "./pages/Purchases";
import NavBar from "./components/NavBar";
import LoadingScreen from "./components/LoadingScreen";
import { useSelector } from "react-redux";
import ProtectedRoutes from "./components/ProtectedRoutes";
import DrawerCart from "./components/DrawerCart";
import SignUp from "./pages/SignUp";

function App() {
  const [count, setCount] = useState(0);

  const isLoading = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <div className="drawer">
        <input
          id="cart-drawer"
          type="checkbox"
          className="drawer-toggle"
          // checked={inputCheck}
          // onChange={(e) => {
          //   setInputCheck(e.target.checked);
          //   console.log(inputCheck);
          // }}
        />
        <div className="drawer-content">
          <div className="flex flex-col min-h-screen justify-between mx-auto">
            <NavBar />
            {isLoading && <LoadingScreen />}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route element={<ProtectedRoutes />}>
                <Route path="/purchases" element={<Purchases />} />
              </Route>
            </Routes>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
              <div>
                <p>Copyright © 2022 - All right reserved by Jonathan Chorolque</p>
              </div>
            </footer>
          </div>
        </div>
        <DrawerCart />
      </div>
    </HashRouter>
  );
}

export default App;
