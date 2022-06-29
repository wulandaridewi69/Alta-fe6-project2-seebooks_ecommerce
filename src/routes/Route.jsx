import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Detailbook from "../pages/Detailbook";
import Checkout from "../pages/Checkout";
import Profile from "../pages/Profile";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/:category" element={<Homepage />}></Route>
                <Route path="/detail/:book_id" element={<Detailbook />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router