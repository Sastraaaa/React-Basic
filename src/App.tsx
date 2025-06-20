import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";
import Dashboard from "./components/Dashboard";
import ProductListPage from "./pages/ProductListPage";
import FormPage from "./pages/FormPage";
import RHFPage from "./pages/RHFPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/home" element={<HomePage />} />

        {/* Search Params */}
        <Route path="/product-list" element={<ProductListPage />} />

        {/* Dynamic Path */}
        <Route path="/product/:slug" element={<ProductPage />} />
        {/*  */}

        <Route path="/product" element={<ProductPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/RHF" element={<RHFPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
