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

const Router = () => {
    const [token, setToken] = useState(null);
    const [cart, setCart] = useState([]);
    const shopCart = useMemo(() => ({ cart, setCart }), [cart]);
    const jwtToken = useMemo(() => ({ token, setToken }), [token]);
    
    useEffect(() => {
        let getCart = []
        if (localStorage.getItem("cart")) {
            getCart = JSON.parse(localStorage.getItem('cart'))
        }
        setCart(getCart);
        console.log(cart)
    }, []);
    
    useEffect(() => {
        const getToken = localStorage.getItem("token") || "0";
        setToken(getToken);
    }, [token]);

    if (token) {
        return (
        <TokenContext.Provider value={jwtToken}>
            <CartContext.Provider value={shopCart}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/login" element={<Login />}></Route>
                        <Route path="/signup" element={<Signup />}></Route>
                        <Route path="/" element={<Homepage />}></Route>
                        <Route path="/:category" element={<Homepage />}></Route>
                        <Route path="/detail/:book_id" element={<Detailbook />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/checkout" element={<Checkout />}></Route>
                        <Route path="*" element={<Fail />}></Route>
                    </Routes>
                </BrowserRouter>
            </CartContext.Provider>    
        </TokenContext.Provider>
        )
    }
}

export default Router