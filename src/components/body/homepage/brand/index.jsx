import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAutoByBrand } from "../../../../Features/autoSlice";
import { fetchBrand } from "../../../../Features/brandSlice";

function Brand() {
  const brand = useSelector((state) => state.brandSlice.brand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBrand());
  }, []);

  function handleClick(id) {
    dispatch(fetchAutoByBrand(id));
  }

  return (
    <div>
      {brand.map((item) => {
        return (
          <Link
            key={item._id}
            to={`/auto/brand/${item._id}`}
            onClick={() => handleClick(item._id)}
          >
            {item.img}
          </Link>
        );
      })}
    </div>
  );
}

export default Brand;
