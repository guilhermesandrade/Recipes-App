import { Link } from "react-router-dom";

function MealList({ meals }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          style={{
            width: "250px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)"; // Aumenta o item
            e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)"; // Sombra mais forte
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)"; // Retorna ao tamanho original
            e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)"; // Sombra normal
          }}
        >
          <Link
            to={`/meal/${meal.idMeal}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{ width: "100%", height: "200px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h3 style={{ fontSize: "18px" }}>{meal.strMeal}</h3>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MealList;
