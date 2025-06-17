import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <button>
        <Link to="/product">Pindah Product Page</Link>
      </button>
    </div>
  );
};

export default HomePage;
