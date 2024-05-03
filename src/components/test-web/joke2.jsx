import { useState } from "react";

export default function FetchData({ url }) {
  const [data, setData] = useState(null);

  async function fetchHandle() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      console.log(data.joke);
      console.log(data.jokes);
      setData(data);
    } catch (e) {
      console.log(e.message);
    }
  }

  useState(() => {
    fetchHandle();
  }, [url]);

  return (
    <div>
      {data && data.jokes ? (
        data.jokes.map((items) => (
          <div>
            {items.joke}
            <br />
          </div>
        ))
      ) : (
        <div>{data.joke}</div>
      )}
    </div>
  );
}
