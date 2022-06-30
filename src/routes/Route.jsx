import { useState, useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { TokenContext,CartContext } from "../utils/context";
import Homepage from "../pages/Homepage";
import Login from "../pages/auth/Login";
import Detailbook from "../pages/Detailbook";
import Signup from "../pages/auth/Signup";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Fail from "../components/Failed";
import Profile from "../pages/Profile";
import CreateProduct from "../pages/CreateProduct";
import ProductList from "../pages/ProductList";
import Histories from "../pages/History";

const Router = () => {
    const [token, setToken] = useState(null);
    const jwtToken = useMemo(() => ({ token, setToken }), [token]);
    
    useEffect(() => {
        const getToken = localStorage.getItem("token") || "0";
        setToken(getToken);
    }, [token]);

    if (token) {
        return (
        <TokenContext.Provider value={jwtToken}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />}></Route>
                    <Route path="/:category" element={<Homepage />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/signup" element={<Signup />}></Route>
                    <Route path="/detail/:book_id" element={<Detailbook />}></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                    <Route path="/checkout" element={<Checkout />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/createproduct" element={<CreateProduct />}></Route>
                    <Route path="/productlist" element={<ProductList />}></Route>
                    <Route path="/histories" element={<Histories />}></Route>
                    <Route path="*" element={<Fail />}></Route>
                </Routes>
            </BrowserRouter>
        </TokenContext.Provider>
        )
    }
}

export default Router