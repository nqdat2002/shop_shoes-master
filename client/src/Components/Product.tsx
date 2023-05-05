import Link from "next/link";
import React from "react";
import { ProductType } from "../Models/ProductModel";

const Product: React.FC<{ value: ProductType }> = ({ value }) => {
  const { productName, href, _id, price, oldPrice, saleFlash } = value;
  // console.log(value);

  return (
    <div className="max-w-full bg-white flex  items-center justify-center flex-col h-72 relative">
      <Link
        href={{ pathname: href, query: { id: _id } }}
        // as={`${href}`}
        passHref
        className="w-60 overflow-hidden "
      >
        <img
          className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
          src={value?.img}
          alt={productName}
        />
      </Link>
      <div className=" h-16 flex justify-center text-center p-5">
        <Link
          href={`/${_id}`}
          className="mb-4 text-sm md:text-base font-bold tracking-tight text-black "
        >
          {productName}
        </Link>
      </div>
      <div>
        <div className="mt-4 md:mt-3 font-bold text-xs md:text-sm flex justify-center items-center ">
          <p className="text-red-600">
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
          <span className="mx-1">{`    -    `}</span>
          <p className="line-through text-gray-700 ">
            {oldPrice.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>
      </div>

      <div className="absolute top-5 right-10 w-8">
        <img
          src="https://bizweb.dktcdn.net/100/336/177/themes/693093/assets/icon-sale.png"
          alt="decor"
          className="relative"
        />
        <span className="absolute text-xs md:text-xs font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          {saleFlash.replaceAll(" ", "")}
        </span>
      </div>
    </div>
  );
};

export default Product;
