import axios from "axios";
import { useState } from "react";
import type { ResponsePostData } from "../data";

const newPost: ResponsePostData = {
  title: "ingfokan",
  body: "cukurkuk",
};

const PostData = () => {
  const [data, setData] = useState("");
  const postData = async () => {
    setData("Post Data To Server...");
    try {
      const response = await axios.post<ResponsePostData>(
        "https://jsonplaceholder.typicode.com/posts",
        newPost,
        {
          headers: {
            "Content-Type": "application/json; charset=UTF-8",
          },
        }
      );
      setData(`Data: ${JSON.stringify(response.data, null, 2)}`);
    } catch (error) {
      setData(`Failed Post Data: ${error}`);
    }
  };
  return (
    <div>
      <h1>Post Data</h1>
      <p>{data}</p>
      <button onClick={() => postData()}>Post Data</button>
    </div>
  );
};

export default PostData;
