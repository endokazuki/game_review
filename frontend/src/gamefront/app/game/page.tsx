"use client";
import { FC } from "react";

type Post = {
  created_at: ReactNode;
  id: number;
  title: string;
};

// pages/index.tsx
import { useState } from "react";

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/games/search?title=${query}`
      );
      const data = await response.json();
      console.log(data);

      if (Array.isArray(data)) {
        const titles = data.map((item: any) => item.title);
        setResults(titles);
      } else {
        setResults([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Search Page</h1>

      <div className="flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 mr-2"
          placeholder="Enter your search query"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="mt-4">
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index} className="text-gray-800">
                {result}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-800">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
