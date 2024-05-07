import React, { useEffect } from "react";
import style from "../homepage/CarPark.module.css";
import vector from "../../../image/Vector.svg";
import auto from "../../../image/auto.svg";
import auto1 from "../../../image/auto1.svg";
import auto3 from "../../../image/auto2.svg";
import calendar from "../../../image/Calendar.svg";
import gearbox from "../../../image/Gearbox.svg";
import fuel from "../../../image/fuel.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuto } from "../../../Features/autoSlice";
function CarPark() {

const auto  = useSelector((state)=> state.autoSlice.auto)

const dispatch = useDispatch()

useEffect(()=>{
  dispatch(fetchAuto())
})

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
            <button title="поиск машины" className={style.searchbutton}>Поиск</button>
            <button className={style.reset}>Сбросить</button>
          </div>
        </div>
        <div className={style.auto}>
          {auto.map((item)=>{
            return (
          <div key={item.id} className={style.autopos}>
            <img src={item.image} alt="" />
            <div className={style.autoname}>
              <span className={style.name}> {item.brand.title} {item.model}</span>
              <span className={style.rating}> {item.rating} ★</span>
            </div>
            <div className={style.autoconfig}>
              <div className={style.config}>
                <img src={calendar} alt="" />
                <span>{item.year}</span>
              </div>
              <div className={style.config}>
                <img src={gearbox} alt="" />
                <span>{item.gearBox}</span>
              </div>
              <div className={style.config}>
                <img src={fuel} alt="" />
                <span>{item.fuel}</span>
              </div>
            </div>
            <div className={style.priceblock}>
              <span className={style.price}>от {item.price} AED</span>
              <span className={style.day}> / cутки</span>
            </div>
          </div>

            )
          })}
         
        </div>
      </div>
    </>
  );
}

export default CarPark;
