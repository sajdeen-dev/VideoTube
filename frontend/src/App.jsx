import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => {
        setJokes(response.data);
        console.log("Jokes fetched successfully:", response);
      })
      .catch((error) => {
        console.log("Error fetching jokes:", error);
      });
  },  []);
  return (
    <>
      <h1>Jokes App</h1>
      <p>{jokes.length}</p>

      {jokes.map((joke, index) => {
        return (
          <div key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        );
      })}
    </>
  );
};

export default App;
