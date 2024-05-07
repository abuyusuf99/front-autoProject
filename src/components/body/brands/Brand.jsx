import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../brands/Brand.module.css";
import { fetchBrand } from "../../../Features/brandSlice";
import { Link } from "react-router-dom";
import { fetchAutoByBrand } from "../../../Features/autoSlice";
function Brand() {
  const brands = useSelector((state) => state.brandSlice.brand);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrand());
  }, []);

  function handleClick(id){
    dispatch(fetchAutoByBrand(id))
  }

  return (
    <div className={style.brands}>
      {brands.map((item) => {
        return (
          <div >
            <Link 
            key={item.id}
            to={`/auto/brand/${item._id}`}
            onClick={() => handleClick(item._id)}
             className={style.imageBrand}>
              <img src={item.image} alt="" />
              <div>
                <span>{item.title}</span>
                </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Brand;
