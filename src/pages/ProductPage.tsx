import { Link, useParams } from "react-router-dom";

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div>
      <h1>Product Page</h1>
      <h3>Product: {slug} </h3>
      <button>
        <Link to="/home">Pindah Home Page</Link>
      </button>
    </div>
  );
};

export default ProductPage;
