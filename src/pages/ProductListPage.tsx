import { useSearchParams } from "react-router-dom";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleParams = (sortValue: string, nameValue: string) => {
    setSearchParams({
      sort: sortValue,
      name: nameValue,
    });
  };

  return (
    <>
      <h1>Product List Page</h1>
      <ul style={{ listStyleType: "none" }}>
        <li>Sort: {searchParams.get("sort")}</li>
        <li>Name: {searchParams.get("name")}</li>
      </ul>

      <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
        <button onClick={() => handleParams("asc", "Product A")}>
          Set Sort Ascending
        </button>
        <button onClick={() => handleParams("desc", "Product B")}>
          Set Sort Descending
        </button>
        <button onClick={() => handleParams("", "")}>Clear Params</button>
      </div>
    </>
  );
};

export default ProductListPage;
