import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "../brands/Brand.module.css";
import { fetchBrand } from "../../../Features/brandSlice";
function Brand() {
  const brands = useSelector((state) => state.brandSlice.brand);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBrand());
  }, []);
  return (
    <div className={style.brands}>
      {brands.map((item) => {
      console.log(brands);

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
