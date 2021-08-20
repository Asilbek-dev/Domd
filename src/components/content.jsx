import React from "react";
import "../style/content.css";

const card = [
  {
    img: "./images/wallet 1.png",
    title: "Не поднимаем стоимость",
    text: "Фиксируем стоимость работ в договоре",
  },
  {
    img: "./images/wallet 1.png",
    title: "Поэтапная оплата",
    text: "Оплата каждого вида работ разбита на 2 части (50% аванс 50% по завершению)",
  },
  {
    img: "./images/wallet 1.png",
    title: "Соблюдаем сроки",
    text: "Несем ответственность за соблюдение сроков.",
  },
  {
    img: "./images/wallet 1.png",
    title: "Экологичность",
    text: "Дом строится из натуральных материалов",
  },
  {
    img: "./images/wallet 1.png",
    title: "Самостоятельно",
    text: "Закупаем и доставляем на объект, качественные материалы и расходники",
  },
  {
    img: "./images/wallet 1.png",
    title: "Проводим уборку",
    text: "В процессе работ и вывозим мусор после завершения работ.",
  },
];
export default function Content() {
  return (
    <main id = 'content'>
      <div className="container">
        <div className="row">
          <div className="col-12 content_theme text-center">
            <p>
              Заботимся о Вашем <span>спокойствии</span>
            </p>
          </div>
        </div>
        <div className="row">
          {card.map(({ img, title, text }) => (
            <div className="col-lg-4 col-md-6 col-sm-12 p-3">
              <div className="content_box d-flex p-2">
                <div className="box_image">
                  <img src={img} alt="" />
                </div>
                <div className="box_text">
                  <p>{title}</p>
                  <p>
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
