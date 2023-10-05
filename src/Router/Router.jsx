import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";

const Router = () => {
    return (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<AboutUs />} />
        </Routes>
    );
}

export default Router;
