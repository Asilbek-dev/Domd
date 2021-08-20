import React from "react";
import "../style/house.css";

const card = [
  {
    img: "./images/image_1.png",
  },
  {
    img: "./images/image_2.png",
  },
  {
    img: "./images/image_3.png",
  },
  {
    img: "./images/image_4.png",
  },
  {
    img: "./images/image_5.png",
  },
  {
    img: "./images/image_6.png",
  },
];
export default function House() {
  return (
    <main id="house">
      <div className="container">
        <div className="row">
          <div className="col-12 house_theme px-5">
            <p>
              <span>Посмотрите на готовые дома</span> с комплексом отделки и
              прокладки коммуникаций.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap w-100 house_cards">
          {card.map(({ img }) => (
            <div className="house_card">
              <img src={img} alt="" />
            </div>
          ))}
      </div>
      
    </main>
  );
}
