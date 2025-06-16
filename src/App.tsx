import { Route, Routes } from "react-router";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import LikeCounter from "./components/LikeCounter";
import MahasiswaList from "./components/MahasiswaList";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Header title="Data Mahasiswa" />
      <MahasiswaList />
      <Header title="Counter Apps" />
      <Counter />
      <Header title="Like and Dislike" />
      <LikeCounter />

      <Routes>
        <Route path="/home" element={<HomePage />} />

        {/* Dynamic Path */}
        <Route path="/product/:slug" element={<ProductPage />} />

        <Route path="/product/" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
