import React, { useRef } from "react";
import "./Depoimentos.css";
import next_icon from "../../assets/next_icon.png";
import back_icon from "../../assets/back_icon.png";
import user_1 from "../../assets/user_1.jpg";
import user_2 from "../../assets/user_2.jpg";

function Depoimentos() {
  const slider = useRef();

  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="depoimentos">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={slideForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src={user_1}
                  alt=""
                />
                <div>
                  <h3>William Castilho</h3>
                  <span>São Paulo, BR</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                minus consequatur accusamus quaerat vero officia, alias nam ex
                quisquam praesentium possimus itaque nesciunt quas asperiores
                debitis molestiae doloremque nihil iusto!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src={user_2}
                  alt=""
                />
                <div>
                  <h3>Josué Eliezer</h3>
                  <span>Viseu, PT</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                minus consequatur accusamus quaerat vero officia, alias nam ex
                quisquam praesentium possimus itaque nesciunt quas asperiores
                debitis molestiae doloremque nihil iusto!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src={user_1}
                  alt=""
                />
                <div>
                  <h3>William Castilho</h3>
                  <span>São Paulo, BR</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                minus consequatur accusamus quaerat vero officia, alias nam ex
                quisquam praesentium possimus itaque nesciunt quas asperiores
                debitis molestiae doloremque nihil iusto!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img
                  src={user_2}
                  alt=""
                />
                <div>
                  <h3>Josué Eliezer</h3>
                  <span>Viseu, PT</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                minus consequatur accusamus quaerat vero officia, alias nam ex
                quisquam praesentium possimus itaque nesciunt quas asperiores
                debitis molestiae doloremque nihil iusto!
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Depoimentos;
