import { Link } from "react-router-dom";
import logo from "../../assets/logo/easyrent.svg";
import vector from "../../assets/logo/Vector1.svg";
import style from './Header.module.css'
import rusFlag from '../../assets/logo/rusFlag.svg'
import engFlag from '../../assets/logo/Group.svg'
import vector1 from "../../image/Vector.svg"

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
      <div>
      <div className={style.homepage}>
        <div className={style.menu}>
          <Link to="">
            <span>Автопарк</span>
          </Link>
          <Link className={style.brand} to="brand">
            <span>Бренды</span> <img src={vector1} alt="" />{" "}
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
          <span> Русский</span>
          <img src={engFlag} alt="" />
          <span> English</span>
        </div>
      </div>
      </div>
    </>
  );
}

export default Header;
