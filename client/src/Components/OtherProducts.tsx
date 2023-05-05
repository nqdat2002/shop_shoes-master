import Link from "next/link";
import React, { useContext, useMemo } from "react";
import { ProductContext } from "../Context/Product";
import Loading from "./Loading";
import Product from "./Product";

const OtherProducts = () => {
  const { productState } = useContext(ProductContext);
  if (productState.isLoading) {
    return <Loading />;
  }
  const suffleArray = useMemo(
    () =>
      (() => {
        const array = productState.data;
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      })(),
    []
  );
  return (
    <>
      <div className="text-center mt-10 flex justify-center flex-col items-center">
        <div className="text-lg font-bold text-gray-800">
          <Link href={"/san-pham-noi-bat"}>SẢN PHẨM KHÁC</Link>
        </div>
        <hr className="my-6 h-[2px] bg-gray-300 border-0 w-1/6 " />
      </div>
      <div className="flex flex-wrap">
        {suffleArray.map((value, index) => {
          if (index >= 12) {
            return null;
          }
          return (
            <div className="basis-6/12 md:basis-3/12" key={index}>
              <Product value={value} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OtherProducts;
