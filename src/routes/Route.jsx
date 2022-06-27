import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import Detailbook from "../pages/Detailbook";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/:category" element={<Homepage />}></Route>
                <Route path="/detail/:book_id" element={<Detailbook />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router