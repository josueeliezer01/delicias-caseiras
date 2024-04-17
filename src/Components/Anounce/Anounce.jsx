import React from "react";
import "./Anounce.css";
import seta from "../../assets/seta.png";

function Anounce() {
  return (
    <div className="anounce container">
      <div className="anounce-text">
        <h1>Uma doce novidade!</h1>
        <p>
          Diversos doces e salgados, sempre fresquinhos e a sua espera,
          aceitamos encomendas para toda a região do ABC Paulista, não perca
          tempo de aproveitar essas maravilhas, temos certeza que vai se tornar
          mais um fã
        </p>
        <button className="btn">
          Confira já as opções
          <img
            src={seta}
            alt="seta"
          />
        </button>
      </div>
    </div>
  );
}

export default Anounce;
