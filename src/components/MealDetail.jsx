import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals[0]));
  }, [id]);

  if (!meal) return <p style={{ textAlign: "center" }}>Carregando...</p>;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        padding: "20px",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {meal.strMeal}
      </h2>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        style={{ width: "100%", borderRadius: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Categoria:</strong> {meal.strCategory}
        </p>
        <p>
          <strong>Origem:</strong> {meal.strArea}
        </p>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <div>
        <h3>Instruções</h3>
        <p style={{ textAlign: "justify" }}>{meal.strInstructions}</p>
      </div>
    </div>
  );
}

export default MealDetail;
