import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MealDetail from "./components/MealDetail";
import About from "./pages/About";
import logo from "./assets/icons8-livro-de-receitas-100.png";

function App() {
  return (
    <Router>
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        {/* HEADER */}
        <header
          style={{
            backgroundColor: "#FF7F50",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            color: "white",
            fontFamily: "'Playwrite RO',  cursive",
            fontWeight: "700",
            fontSize: "40px",
            letterSpacing: "1px",

            boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
          }}
        >
          {/* Logo (se quiser depois colocar a imagem, só trocar a tag abaixo) */}
          <div style={{ fontSize: "10px" }}>
            <img src={logo} />
          </div>
          <div>Delicious Recipes</div>
        </header>

        {/* NAVBAR */}
        {/* NAVBAR */}
        <nav
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            backgroundColor: "#ffe5d9",
            padding: "15px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              backgroundColor: "#FF7F50",
              color: "white",
              borderRadius: "8px",
              transition: "background-color 0.3s ease", // Transição suave para a cor de fundo
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FF6A40"; // Cor mais escura ao passar o mouse
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FF7F50"; // Cor original ao sair
            }}
          >
            Home
          </Link>

          <Link
            to="/about"
            style={{
              textDecoration: "none",
              padding: "10px 20px",
              backgroundColor: "#FF7F50",
              color: "white",
              borderRadius: "8px",
              transition: "background-color 0.3s ease", // Transição suave para a cor de fundo
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#FF6A40"; // Cor mais escura ao passar o mouse
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#FF7F50"; // Cor original ao sair
            }}
          >
            Sobre
          </Link>
        </nav>

        {/* CONTEÚDO PRINCIPAL */}
        <div style={{ flex: "1", padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/meal/:id" element={<MealDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <footer
          style={{
            backgroundColor: "#FF7F50",
            color: "white",
            textAlign: "center",
            padding: "15px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "14px",
          }}
        >
          © 2025 - Delicious Recipes. Projeto desenvolvido para a disciplina de
          Desenvolvimento Mobile. <br />
          Feito usando React e TheMealDB API.
        </footer>
      </div>
    </Router>
  );
}

export default App;
