"use client";
import { useRef } from "react";

function ScrollExample() {
  // Cria uma referência para o elemento que você quer rolar até
  const sectionRef = useRef<HTMLDivElement>(null);

  // Função para rolar até a seção
  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Página de Exemplo</h1>

      {/* Botão que aciona o scroll */}
      <button 
        onClick={handleScroll} 
        style={{ padding: "10px 20px", cursor: "pointer" }}
      >
        Ir para a Seção Específica
      </button>

      {/* Espaçamento para simular uma página longa */}
      <div style={{ height: "100vh", background: "#f0f0f0" }}>
        <p>Role ou clique no botão para ir direto para a seção.</p>
      </div>

      {/* Seção de destino */}
      <div
        ref={sectionRef}
        style={{
          height: "300px",
          backgroundColor: "#007bff",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>🚀 Você chegou aqui!</h2>
      </div>
    </div>
  );
}

export default ScrollExample;
