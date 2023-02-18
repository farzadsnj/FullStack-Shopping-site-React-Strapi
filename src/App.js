import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails.jsx";
import CheckOut from "./scenes/checkout/CheckOut.jsx";
import Confirmation from "./scenes/checkout/Confirmation.jsx";
import Navbar from "./scenes/global/Navbar";

const ScrollToTop = () => {
  const { pathName } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathName]);
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
