import React from "react";
import style from "../homepage/CarPark.module.css";
import vector from "../../../image/Vector.svg";
import auto from "../../../image/auto.svg";
import auto1 from "../../../image/auto1.svg";
import auto3 from "../../../image/auto2.svg";
function CarPark() {
  return (
    <>
      <div className={style.CarPark}>
        <h1>Наш автопарк</h1>
        <div className={style.park}>
          <div className={style.sort}>
            <div>
              <button>
                Марка <img src={vector} alt="" />
              </button>
            </div>
            <div>
              <button>
                Модель <img src={vector} alt="" />
              </button>
            </div>
            <div>
              <button>
                Кузов <img src={vector} alt="" />
              </button>
            </div>
            <div>
              <button>
                Цена <img src={vector} alt="" />
              </button>
            </div>
            <div>
              <button>
                Сроки <img src={vector} alt="" />
              </button>
            </div>
            <div>
              <button>
                Сортировка <img src={vector} alt="" />
              </button>
            </div>
          </div>
          <div className={style.search}>
            <button className={style.searchbutton}>Поиск</button>
            <button className={style.reset}>Сбросить</button>
          </div>
        </div>
        <div className={style.auto}>
          <div className={style.autopos}>
            <img src={auto} alt="" />
          </div>
          <div className={style.autopos}>
            <img src={auto1} alt="" />
          </div>
          <div className={style.autopos}>
            <img src={auto3} alt="" />
          </div>
          <div className={style.autopos}>
            <img src={auto} alt="" />
          </div>
          <div className={style.autopos}>
            <img src={auto1} alt="" />
          </div>
          <div className={style.autopos}>
            <img src={auto3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default CarPark;
