import React from "react";
import "../style/service.css";

const card = [
  {
    title: "Каркасные дома",
    img: "./images/каркас 1.png",
  },
  {
    title: "Дома из клеёного",
    img: "./images/каркас 2.png",
  },
  {
    title: "Дома из брёвен",
    img: "./images/каркас 3.png",
  },
  {
    title: "Фахверковые дома",
    img: "./images/каркас 4.png",
  },
  {
    title: "Беседки",
    img: "./images/каркас 5.png",
  },
  {
    title: "Ремонт и отделка",
    img: "./images/каркас 6.png",
  },
];
export default function Service() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 service_theme text-center ">
            <p>
              Оказываем услуги комплексно,{" "}
              <span>совмещая отдельные виды работ</span>
            </p>
          </div>
        </div>
        <div className="row">
          {card.map(({ title,img }) => (
            <div className="col-lg-4 col-md-6 col-sm-12 p-lg-3 p-md-2 p-sm-1">
              <div className="box">
                <p>{title}</p>
                <div className="cricle"></div>
                <button>
                  Подробнее
                  <span>
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </button>
                <img src={img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
