import React, { useState } from "react";
import "../style/company.css";

export default function Company() {
  const [count] = useState(15);
  const [count1] = useState(15);
  const [count2] = useState(53);
  const card = [
    {
      number: count,
      text: "лет опыта в стоительстве",
    },
    {
      number: count1,
      text: "специалистов в штате",
    },
    {
      number: count2,
      text: "построенных домов",
    },
  ];
  return (
    <main id="company">
      <div className="container">
        <div className="row">
          {card.map(({ number, text }) => (
            <div className="col-lg-3 col-md-4 col-6">
              <div className="company_card mt-4">
                <p>{number}</p>
                <p>{text}</p>
              </div>
            </div>
          ))}
          <div className="col-lg-3 col-md-4 col-6">
            <div className="company_card">
                <img src="./images/yotubecom.png" alt="" />
              <p>
                Наши <span>ВИДЕО</span> об отделке и устройстве смотрите на
                канале DOM-D
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
