function About() {
  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        textAlign: "center",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Sobre o Projeto</h2>
      <img
        src="https://images.unsplash.com/photo-1546069901-eacef0df6022"
        alt="Culinária"
        style={{ width: "100%", borderRadius: "10px", marginBottom: "20px" }}
      />
      <p style={{ textAlign: "justify" }}>
        Este aplicativo foi desenvolvido para demonstrar habilidades em React,
        consumo de APIs externas e criação de rotas dinâmicas. Utilizamos a API
        pública <strong>TheMealDB</strong> para trazer receitas incríveis do
        mundo todo, com uma experiência moderna e minimalista para o usuário.
      </p>
    </div>
  );
}

export default About;
