import { Menu, Space } from "antd";
import React, { useState } from "react";
import "../style/navbar.css";

const { SubMenu } = Menu;


export default function Navbar() {
  const [count, setcount] = useState(false);
  const buttonClick = () => {
    setcount(!count);
  };

  const handleClick = (e) => {
    console.log("click ", e);
  };


  return (
    <>
      <div className="navbar d-flex" id="navbar">
        <div>
          <i
            className={count ? "fas fa-times " : "fas fa-bars "}
            onClick={buttonClick}
          ></i>
        </div>
        <div className="navbar_logo">
          <img src="./images/logo.jpg" alt="" />
          <div className="navbar_text">
            <p>Строительство деревянных домов</p>
            <b>
              за <span>45</span> дней
            </b>
          </div>
        </div>
        <div className="navbar_two">
          <p>Нажмите, чтобы начать общение</p>
          <div className="navbar_messanger">
            <button>
              <img src="./images/phone.png" alt="" />
              <p>Viber</p>
            </button>
            <button>
              <img src="./images/telegram.png" alt="" />
              <p>Telegram</p>
            </button>
          </div>
        </div>
        <div className="navbar_right">
          <div className="navbar_number">
            <img src="./images/phone.jpg" alt="" />
            <p>+38 (098) 271-50-35</p>
          </div>
          <button>Презвонить мне</button>
        </div>
      </div>
      <div className= {count ? "navbar_menu1 navbar_menu" : "navbar_menu2 navbar_menu"}>
        <img src="./images/logo-menu.png" alt="" />
        <div className="navbar_menu_button">
            <button>Презвонить мне</button>
        </div>
        <Menu
        onClick={handleClick}
        style={{ width: 256,cursor: "pointer" }}
        mode="inline">
          <SubMenu key="sub1" title="Виды строительства">
            <Menu.Item key="1">
                <Space direction="vertical">
                  <a href = '#'>- Каркасные дома</a>
                  <a href = '#'>- Дома из клеёного бруса</a>
                  <a href = '#'>- Фахверковые дома</a>
                  <a href = '#'>- Дома из брёвен</a>
                  <a href = '#'>- Беседки</a>
                  <a href = '#'>- Ремонт и отделка</a>
                </Space>
            </Menu.Item>
          </SubMenu>
        </Menu>
        <p>Наши работы</p>
        <p>Отзывы клиентов</p>
        <p>Партнеры </p>
        <p>Контакты</p>
      </div>
    </>
  );
}
