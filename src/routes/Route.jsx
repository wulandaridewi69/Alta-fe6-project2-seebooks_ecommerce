import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/:category" element={<Homepage />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router