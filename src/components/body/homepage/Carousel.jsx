import React from "react";
import style from "../homepage/Homepage.module.css";
import carousel from "../../../image/carusel.jpg";
import { Carousel, CarouselItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Carusel() {
  return (
    <div className={style.rodCarusel}>
      <div className={style.carusel}>
        <Carousel>
          <CarouselItem>
            <img className="d-block w-100" src={carousel} alt="First slide" />
          </CarouselItem>
          <CarouselItem className={style.carusel}>
            <img className="d-block w-100" src={carousel} alt="Second slide" />
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  );
}

export default Carusel;
