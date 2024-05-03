import React from "react";
import style from "../homepage/Homepage.module.css";
import { Link } from "react-router-dom";
import vector from "../../../image/Vector.svg";
import rusFlag from '../../../assets/logo/emojione_flag-for-russia.svg'
import engFlag from '../../../assets/logo/Group.svg'
function Homepage() {
  return (
    <>
      <div className={style.homepage}>
        <div className={style.menu}>
          <Link to="">
            <span>Автопарк</span>
          </Link>
          <Link className={style.brand} to="">
            <span>Бренды</span> <img src={vector} alt="" />{" "}
          </Link>
          <Link to="">
            <span>Инвестиции</span>{" "}
          </Link>
          <Link to="">
            <span>Услуги</span>{" "}
          </Link>
          <Link to="">
            {" "}
            <span>Акции</span>
          </Link>
          <Link to="">
            <span>Журнал</span>{" "}
          </Link>
          <Link to="">
            {" "}
            <span>О нас</span>
          </Link>
          <Link to="">
            {" "}
            <span>Отзывы</span>
          </Link>
          <Link to="">
            {" "}
            <span>Контакты</span>
          </Link>
        </div>
        <div className={style.language}>
        <img src={rusFlag} alt="" />
            <span>  Русский</span>
            <img src={engFlag} alt="" />
            <span> English</span>
        </div>
      </div>
    </>
  );
}

export default Homepage;
