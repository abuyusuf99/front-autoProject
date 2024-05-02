import React from "react";
import logo from "../../assets/logo/easyrent.svg";
import vector from "../../assets/logo/Vector.svg";
import style from './Header.module.css'

function Header() {
  return (
    <>
      <div className={style.header}>
        <div className={style.logo}>
          <img src={logo} alt="" />
          <p>Аренда премиум автомобилей</p>
        </div>
        <div className={style.logo2}>
          <h4>8 800 100 50 50</h4>
          <input placeholder="обратный звонок" type="text" />
          <img src={vector} alt="" />
        </div>
      </div>
    </>
  );
}

export default Header;
