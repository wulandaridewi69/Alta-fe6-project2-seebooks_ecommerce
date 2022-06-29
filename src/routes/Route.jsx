import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Login from "../pages/auth/Login";
import Detailbook from "../pages/Detailbook";
import Signup from "../pages/auth/Signup";

const Router = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/:category" element={<Homepage />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/detail/:book_id" element={<Detailbook />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router