"use client";

import axios from "axios";
import React, { useState } from "react";

interface Person {
  name: string;
  age?: number;
}

interface ApiResponse {
  bio: Person[];
}

const Day3: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ApiResponse | null>(null);

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await axios.get("/api/prac");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderData = (data: ApiResponse)=> {
    if (!data.bio || data.bio.length === 0) {
      return <p>No data available</p>;
    }

    return (
      <div>
        <h2>Bio Information:</h2>
        <ul>
          {data.bio.map((person, index) => (
            <li key={index}>
              <strong>Name:</strong> {person.name}
              {person.age !== undefined && <span>, <strong>Age:</strong> {person.age}</span>}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="p-4 text-sm flex flex-col items-center justify-center">
      <h1>Day 3</h1>
      <button onClick={fetchData} className="my-4 px-4 py-2 bg-blue-500 text-white rounded">
        Fetch Data
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data ? renderData(data) : <p>No data fetched yet</p>
      )}
    </div>
  );
};

export default Day3;