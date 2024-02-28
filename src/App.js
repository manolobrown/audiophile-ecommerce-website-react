import { Routes, Route } from "react-router-dom";
import Layout from "./routes/layout/layout.component";
import Home from "./routes/home/home.component";
import Category from "./routes/category/category.component";
import Product from "./routes/product/product.component";
import Checkout from "./routes/checkout/checkout.component";
import "./index.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/product/:slug" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
