import React from "react";
import "../style/header.css";

const card = [
  {
    title: "Демонтаж работы",
  },
  {
    title: "Бетонные работы",
  },
  {
    title: "Возведение стен",
  },
  {
    title: "Кровельные работы",
  },
  {
    title: "Отделка фасадов",
  },
  {
    title: "Инженерные работы",
  },
];
export default function Header() {
  return (
    <main id="header">
      <img src="./images/home.png" alt="" />
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-8 col-md-6 col-sm-12 header_text py-lg-5">
            <b>
              Сделаем ваш <span>Дом</span>
            </b>
            <h4>готовым к комфортному проживанию</h4>
            <p>
              Строительство деревянных домов «под ключ»: коттеджи, беседки,
              бани, дома из клееного бруса
            </p>
            <div className="row">
              {card.map(({ title }) => (
                <div className="col-lg-4 col-6 p-lg-3 p-2">
                  <div className="card text-center">{title}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 py-lg-5 py-md-5 mt-lg-4 mt-md-4 px-lg-5 px-md-5 mt-2">
            <div className="header_card d-block">
                <b>Заказать расчет</b>
                <p>Оказываем услуги комплексно, совмещая отдельные виды работ</p>
                <img src="./images/book.png" alt="" />
                <button>Заказать расчет</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
