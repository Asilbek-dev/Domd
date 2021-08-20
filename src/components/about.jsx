import React from "react";
import "../style/about.css";

export default function About() {
  return (
    <main id="about">
      <img className = 'back_img' src="./images/image00.png" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <button className="but">
              Смотреть все
              <span>
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </button>
          </div>
          <div className="col-12 person_about_theme">
            <p>
              Готовы <span> начать строить дом</span> с надежной компанией?
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-12 people_image">
            <img src="./images/people.png" alt="" />
            <div className="image_text">
              <p>Здравствуйте, меня зовут Ярослав Доля. </p>
              <p>
                Я руководитель компании <span>DOM-D</span>
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 phrases">
            <div className="phrase">
              <div className="tru_icon">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
              <p>
                Мы не просто <span>предоставляем</span> услуги мы отвечаем за
                весь комплекс работ от проектирования до гарантийного
                обслуживания.
              </p>
            </div>
            <div className="phrase">
              <div className="tru_icon">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
              <p>
                Наша команда стремится к полной <span>прозрачности</span> в
                работе, поэтому мы с удовольствием показываем каждый процесс
                строительства, без прикрас.
              </p>
            </div>
            <div className="phrase">
              <div className="tru_icon">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
              <p>
                Мы <span>знаем все</span> о строительстве деревянных домов и
                строительных работах
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 phrases">
            <div className="phrase">
              <div className="tru_icon">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
              <p>
                Вы не <span>рискуете</span> своими деньгами, нервами и временем.
                Мы берем на себя полную материальную ответственность по договору
                за дом, работы, сроки выполнения каждого этапа работы
              </p>
            </div>
            <div className="phrase">
              <div className="tru_icon">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
              <p>
                Мы <span>гарантируем</span> Ваше минимальное вовлечение в рутину
                строительства, беря на себя весь комплекс строительных работ
              </p>
            </div>
            <div className="phrase">
              <div className="tru_icon">
                <div className="line1"></div>
                <div className="line2"></div>
              </div>
              <p>
                <span>Проектируем</span> и строим авторские дома из дерева и
                клееного бруса
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
