import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Necklaces from "./pages/Products/Necklaces";
import Earrings from "./pages/Products/Earrings";
import Bracelets from "./pages/Products/Bracelets";
import Rings from "./pages/Products/Rings";
import Charms from "./pages/Products/Charms";
import ProductDetail from "./pages/Products/ProductDetail";
import OrderBag from "./pages/OrderBag/OrderBag";
import LoginPage from "./components/login-register/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/necklaces" element={<Necklaces />} />
        <Route path="products/earrings" element={<Earrings />} />
        <Route path="products/bracelets" element={<Bracelets />} />
        <Route path="products/rings" element={<Rings />} />
        <Route path="products/charms" element={<Charms />} />

        <Route path="products/:productId" element={<ProductDetail />} />

        <Route path="/" element={<About />} />
        <Route path="/" element={<Contact />} />

        <Route path="/orderbag" element={<OrderBag />} />

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
