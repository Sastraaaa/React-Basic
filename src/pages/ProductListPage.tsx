import { useSearchParams } from "react-router-dom";

const ProductListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortValueChange = (sortValue: string, namevalue: string) => {
    searchParams.set("sort", sortValue);
    searchParams.set("name", namevalue);

    setSearchParams(searchParams);
  };
  return (
    <div>
      <h1>Product List page</h1>
      <ul style={{ textAlign: "start" }}>
        <li>Sort: {searchParams.get("sort")}</li>
        <li>Name: {searchParams.get("name")}</li>
      </ul>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        <button onClick={() => handleSortValueChange("Desc", "Kaos oblong")}>
          Sort Desc
        </button>
        <button onClick={() => handleSortValueChange("Price", "Hoodie epep")}>
          Sort Price
        </button>
        <button
          onClick={() => handleSortValueChange("Most Popular", "Kaos Alucard")}
        >
          Sort Popular
        </button>
      </div>
    </div>
  );
};

export default ProductListPage;
