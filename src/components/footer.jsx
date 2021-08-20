import React from "react";
import "../style/footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container footer_inside">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-12 mt-3  footer_logo">
              <img src="./images/logo.jpg" alt="" />
            </div>
            <div className="col-lg-6 col-md-4 col-12 mt-3 ">
                <div className="row">
                    <div className="col-lg-6 col-12 footer_text">
                      <b>Виды строительства</b>
                      <p>- Каркасные дома</p>
                      <p>- Дома из клеёного бруса</p>
                      <p>- Фахверковые дома </p>
                      <p>- Дома из брёвен </p>
                      <p>- Беседки </p>
                      <p>- Ремонт и отделка</p>
                    </div>
                    <div className="col-lg-6 mt-md-3 mt-lg-0 col-12 footer_menus">
                      <div className="footer_menu">
                        <p>Наши работы</p>
                      </div>
                      <div className="footer_menu">
                        <p>Отзывы клиентов</p>
                      </div>
                      <div className="footer_menu">
                        <p>Партнеры</p>
                      </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-4 col-12 mt-3  footer_contacts">
              <b>Контакты</b>
              <div className="footer_contact">
                <img src="./images/map.png" alt="" />
                <p>Украина, г. Одесса ул. Комитетская, 24Б </p>
              </div>
              <div className="footer_contact">
                <img src="./images/message.png" alt="" />
                <p>Эл.почта: odessadomd@gmail.com </p>
              </div>
              <div className="footer_contact">
                <img src="./images/call.png" alt="" />
                <p>+38 (098) 271-50-35 </p>
              </div>
              <div className="footer_messanger">
                <img src="./images/yotubecom.png" alt="" />
                <img src="./images/facebook.png" alt="" />
                <img src="./images/instagramm.svg" alt="" />
                <p> Свежие видео у нас на канале </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <a href="navbar">
            <i className="fas fa-upload"></i>
          </a>
        </div>
      </div>
    </>
  );
}
