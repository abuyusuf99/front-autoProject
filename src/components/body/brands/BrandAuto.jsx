import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAutoByBrand } from "../../../Features/autoSlice";
import style from "./Brand.module.css";
import calendar from "../../../image/Calendar.svg";
import gearbox from "../../../image/Gearbox.svg";
import fuel from "../../../image/fuel.svg";

function BrandAuto() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const auto = useSelector((state) => state.autoSlice.auto);

  useEffect(() => {
    dispatch(fetchAutoByBrand(id));
  }, []);
  return (
    <div className={style.auto}>
      {auto.map((item) => {
        return (
         
            <div key={item.id} className={style.autopos}>
              <img src={item.image} alt="" />
              <div className={style.autoname}>
                <span className={style.name}>
                  {" "}
                  {item.brand.title} {item.model}
                </span>
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
                <span className={style.day}> / cутки k</span>
                <span className={style.day}> / cутки</span>
              </div>
            </div>
          
        );
      })}
    </div>
  );
}

export default BrandAuto;
