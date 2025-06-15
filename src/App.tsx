import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import LikeCounter from "./components/LikeCounter";
import MahasiswaList from "./components/MahasiswaList";

function App() {
  return (
    <>
      <Header title="Data Mahasiswa" />
      <MahasiswaList />
      <Header title="Counter Apps" />
      <Counter />
      <Header title="Like and Dislike" />
      <LikeCounter />
    </>
  );
}

export default App;
