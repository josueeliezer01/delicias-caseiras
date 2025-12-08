import React from "react";
import "./Contato.css";
import msg_icon from "../../assets/msg_icon.png";
import mail_icon from "../../assets/mail_icon.png";
import phone_icon from "../../assets/phone_icon.png";
import location_icon from "../../assets/location_icon.png";
import seta from "../../assets/seta.png";

function Contato() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Enviando pedido...");
    const formData = new FormData(event.target);

    formData.append("access_key", "54f119c1-8bca-4fb2-ac46-1318545fef20");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "Pedido enviado com sucesso!\nJá vamos entrar em contato com você\nMUITO OBRIGADO!"
      );
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contato">
      <div className="contatc-col">
        <h3>
          Nos mande uma mensagem
          <img
            src={msg_icon}
            alt=""
          />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi error
          cum, corporis adipisci eaque voluptatibus doloribus recusandae
          deleniti natus placeat possimus, tempora nulla at eum. Voluptatibus
          magni earum iure sit.
        </p>
        <ul>
          <li>
            <img
              src={mail_icon}
              alt=""
            />
            eliezercasstilho@gmail.com
          </li>
          <li>
            <img
              src={phone_icon}
              alt=""
            />
            +351-915-907-925
          </li>
          <li>
            <img
              src={location_icon}
              alt=""
            />
            Rua Pernambuco, 498, Mauá
            <br />
            São Paulo, Brasil
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            placeholder="Insira seu nome"
            required
          />
          <label>Telefone</label>
          <input
            type="tel"
            name="telefone"
            placeholder="Insira seu telefone"
            required
          />
          <label>Pedido</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Escreva o seu pedido"
            required></textarea>
          <button
            type="submit"
            className="btn dark-btn">
            Enviar{" "}
            <img
              src={seta}
              alt=""
            />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}

export default Contato;
