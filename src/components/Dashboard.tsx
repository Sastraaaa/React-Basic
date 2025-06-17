import Counter from "./Counter";
import Header from "./Header";
import MahasiswaList from "./MahasiswaList";
import LikeCounter from "./LikeCounter";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <Header title="Data Mahasiswa" />
      <MahasiswaList />
      <Header title="Counter Apps" />
      <Counter />
      <Header title="Like and Dislike" />
      <LikeCounter />
      <button style={{ marginTop: "10px" }}>
        <Link to="/home">Menunju Home Page</Link>
      </button>
    </div>
  );
};

export default Dashboard;
