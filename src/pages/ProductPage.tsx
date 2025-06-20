import { useNavigate, useParams } from "react-router-dom";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Product Page</h1>
      <h3>Product: {slug} </h3>
      <button onClick={() => navigate("/")}>Menuju ke Dashboard</button>
    </div>
  );
};

export default ProductPage;
