import { useNavigate } from "react-router-dom";

const ApiPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Api Page</h1>
      <button onClick={() => navigate("/get-data")}>To Get Data</button>
      <button onClick={() => navigate("/post-data")}>To Post Data</button>
    </div>
  );
};

export default ApiPage;
