import React from "react";
import "./Opcoes.css";
import cone from "../../assets/cone.jpg";
import pao from "../../assets/pao.jpg";
import mel from "../../assets/pao_de_mel.jpg";
import torta from "../../assets/torta.jpg";
import cone_icon from "../../assets/cone_icon.png";
import pao_icon from "../../assets/pao_icon.png";
import mel_icon from "../../assets/doce_icon.png.webp";
import torta_icon from "../../assets/torta_icon.png";


function Opcoes() {
  return (
    <div className="opcoes">
      <div className="opcao">
        <img
          src={mel}
          alt=""
        />
        <div className="caption">
          <img
            src={mel_icon}
            alt=""
          />
          <p>Pão de mel</p>
        </div>
      </div>
      <div className="opcao">
        <img
          src={cone}
          alt=""
        />
        <div className="caption">
          <img
            src={cone_icon}
            alt=""
          />
          <p>Cone trufado</p>
        </div>
      </div>
      <div className="opcao">
        <img
          src={pao}
          alt=""
        />
        <div className="caption">
          <img
            src={pao_icon}
            alt=""
          />
          <p>Pão Caseiro</p>
        </div>
      </div>
      <div className="opcao">
        <img
          src={torta}
          alt=""
        />
        <div className="caption">
          <img
            src={torta_icon}
            alt=""
          />
          <p>Torta</p>
        </div>
      </div>
    </div>
  );
}

export default Opcoes;
