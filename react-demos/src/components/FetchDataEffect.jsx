import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("data not found ");
      }

      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    };
    getData();
  }, []);
  return (
    <div>
      <h1>FetchDataEffect</h1>
      <div>
        <ul>
          {data.length > 0
            ? data
                .filter((d) => d.id % 20 == 0)
                .map(({ title, id, userId, body }) => {
                  return (
                    <li key={id}>
                      <div>{title}</div>
                      <div>{userId}</div>
                      <div>{body}</div>
                    </li>
                  );
                })
            : "Loading ..."}
        </ul>
      </div>
    </div>
  );
};

export default FetchDataEffect;
