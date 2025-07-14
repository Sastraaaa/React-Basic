import Counter from "./Counter";
import Header from "./Header";
import MahasiswaList from "./MahasiswaList";
import LikeCounter from "./LikeCounter";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Header title="Data Mahasiswa" />
      <MahasiswaList />
      <Header title="Counter Apps" />
      <Counter />
      <Header title="Like and Dislike" />
      <LikeCounter />

      <div className="route-button">
        <button style={{ margin: "10px" }} onClick={() => navigate("/home")}>
          Menuju ke Home
        </button>
        <button
          style={{ margin: "10px" }}
          onClick={() => navigate("/product-list")}
        >
          Menuju ke Product List
        </button>

        <button onClick={() => navigate("/api-page")}>
          Menuju ke Api Page
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
