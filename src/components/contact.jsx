import React from "react";
import "../style/contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact">
        <img className = 'contact_back' src="./images/contact_fon.png" alt="" />
        <p>Наши контакты</p>
        <div className="container">
            <div className="row">
              <div className="col-lg-6 col-12 pb-3">
                  <div className="contact_box">
                    <p>Задать вопрос</p>
                    <p>
                      Остались вопросы? Наши эксперты ответят вам в ближайшее рабочее
                      время!
                    </p>
                    <textarea
                      name=""
                      id=""
                      cols="54"
                      rows="5"
                      placeholder="Ваш вопросы"
                    ></textarea>
                    <br />
                    <input type="number" placeholder="Телефон" />
                    <br />
                    <button>Отправить вопрос</button>
                  </div>
              </div>
              <div className="col-lg-6 col-12 mt-lg-0 pb-5">
                  <div className="contact_box2">
                    <p>Мы на связи</p>
                    <div className="contact_contact">
                      <img src="./images/map.png" alt="" />
                      <p>Украина, г. Одесса ул. Комитетская, 24Б </p>
                    </div>
                    <div className="contact_contact">
                      <img src="./images/message.png" alt="" />
                      <p>Эл.почта: odessadomd@gmail.com </p>
                    </div>
                    <div className="contact_messanger">
                      <button>
                        <img src="./images/phone.png" alt="" />
                        Viber
                      </button>
                      <button>
                        <img src="./images/telegram.png" alt="" />
                        Telegram
                      </button>
                    </div>
                    <div className="contact_contact2">
                      <img src="./images/call.png" alt="" />
                      <div>
                          <b>
                            +38 (098) 271-50-35 <span></span>
                          </b>
                          <p>Мы на связи</p>
                      </div>
                    </div>
                    <button className="contact_but">Презвонить мне</button>
                  </div>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}
