import React from "react";
import "./About.css";
import about_img from "../../assets/about.jpg";
import play_icon from "../../assets/play.png";

function About({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={about_img}
          alt=""
          className="about-img"
        />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>Sobre Nós</h3>
        <h2>Uma oportunidade de se apaixonar por delícias culinárias</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          aliquid quae porro? Deserunt hic iure, ipsum quia blanditiis animi,
          expedita, quisquam quis ea est numquam saepe atque distinctio ullam
          fugit!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          aliquid quae porro? Deserunt hic iure, ipsum quia blanditiis animi,
          expedita, quisquam quis ea est numquam saepe atque distinctio ullam
          fugit!
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
          aliquid quae porro? Deserunt hic iure, ipsum quia blanditiis animi,
          expedita, quisquam quis ea est numquam saepe atque distinctio ullam
          fugit!
        </p>
      </div>
    </div>
  );
}

export default About;
