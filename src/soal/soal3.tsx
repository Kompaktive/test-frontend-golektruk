import { useEffect, useState } from "react";

export default function Soal3() {
  /**
   * ! APA PENYEBAB ERROR ?
   */

  return <SeachComponent />;
}

function SeachComponent() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/photos/${search.id}`
      );
      const data = await response.json();

      setResults(data);
    }

    if (search) fetchData();
  }, [search]);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}
