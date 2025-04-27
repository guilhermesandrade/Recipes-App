import { useState, useEffect } from "react";
import MealList from "../components/MealList";

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((response) => response.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "28px",
          marginBottom: "30px",
          color: "#333",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        🥘 Receitas Incríveis
      </h2>

      <MealList meals={meals} />
    </div>
  );
}

export default Home;
