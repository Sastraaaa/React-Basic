import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={() => navigate("/")}>Pindah ke Dashboard</button>
    </div>
  );
};

export default HomePage;
