import axios from "axios";
import { useState } from "react";
import type { ResponseGetData } from "../data";

const GetData = () => {
  const [data, setData] = useState("");
  const getData = async () => {
    try {
      setData("Getting Data From a Server...");
      const response = await axios.get<ResponseGetData>(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      setData(`Data: ${response.data.title}`);
    } catch (error) {
      if (error) {
        setData(`Failed Get data: ${error}`);
      }
    }
  };
  return (
    <div>
      <h1>Get Data</h1>
      <p>{data}</p>
      <button onClick={() => getData()}>Get data</button>
    </div>
  );
};

export default GetData;
