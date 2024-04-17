import React from "react";
import "./Combos.css";
import cesta_1 from "../../assets/cesta-doces-1.jpeg";
import cesta_2 from "../../assets/cesta-doces-2.jpeg";
import cesta_3 from "../../assets/cesta-pães-1.jpeg";
import cesta_4 from "../../assets/cesta-pães-2.jpeg";
import seta from "../../assets/seta.png";

function Combos() {
  return (
    <div className="combos">
      <div className="gallery">
        <img
          src={cesta_1}
          alt=""
        />
        <img
          src={cesta_2}
          alt=""
        />
        <img
          src={cesta_3}
          alt=""
        />
        <img
          src={cesta_4}
          alt=""
        />
      </div>
      <button className="btn dark-btn">
        Veja outras opções
        <img
          src={seta}
          alt=""
        />
      </button>
    </div>
  );
}

export default Combos;
