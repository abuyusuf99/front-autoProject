import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrand } from "../../../Features/autoSlice";
import style from "../brands/Brand.module.css";
function Brand() {
  const brands = useSelector((state) => state.autoSlice.brands);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrand());
  }, []);

  return (
    <div className={style.brands}>
      {brands.map((item) => {
        return (
          <div key={item.id}>
            <div className={style.imageBrand}>
              <img src={item.image} alt="" />
              <div>
                <span>{item.title}</span>
                </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Brand;
