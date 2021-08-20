import React from "react";
import '../style/today.css'

export default function Today() {
  return (
    <>
      <div className="container py-lg-5 py-3">
        <div className="row">
          <div className="col-12 today_theme text-center">
            <p>Приступим cегодня</p>
            <p>Напишите нам, чтобы получить персональное предложение</p>
          </div>
          <div className="video_card mt-3">
          <div className="video_card_left">
            <p>Cтроительство дома, не покажешь картинкой</p>
            <p>За каждым домом стоит целая история, смотри полезные  презентации у нас на канале. </p>
            <button>Заказать расчет</button>
          </div>
          <div className="video_card_right">
            <img src="./images/Слой 1.png" alt="" />
            <div className="video_box">
              <img src="./images/karkas 8.png" alt="" />
              <div className="video_box_play">
                <i className = "fas fa-play icon"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
