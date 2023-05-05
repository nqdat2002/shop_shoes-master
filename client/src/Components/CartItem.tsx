import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "../Context/Cart";
import { CartType } from "../Models/CartModel";
import { ProductType } from "../Models/ProductModel";

const CartItem: React.FC<{ value: CartType }> = ({ value }) => {
  const { deleteProducts, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { productName, href, _id, price, oldPrice, saleFlash, img } =
    value.product;

  return (
    <div className="max-w-full bg-white flex  items-center h-36 relative">
      <Link
        href={{ pathname: href, query: { id: _id } }}
        className="w-24 overflow-hidden "
      >
        <img
          className="rounded-t-lg hover:scale-110 transition duration-300 ease-in-out"
          src={img}
          alt={productName}
        />
      </Link>
      <div className=" h-10 flex flex-col w-full justify-center text-center p-5 relative">
        <Link
          href={`/${_id}`}
          className="mb-2 text-sm md:text-sm  tracking-tight text-black "
        >
          {productName} - {value.size}
        </Link>
        <div className="mt-4 md:mt-3 font-semibold text-xs md:text-sm flex justify-center items-center ">
          <p className="">
            {price.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </p>
        </div>
        <div className="flex justify-center items-center mt-2">
          <button
            className="border border-gray-200  w-5"
            onClick={() =>
              decreaseAmount({ ...value.product, size: [value.size] })
            }
          >
            -
          </button>
          <button className="border border-gray-200 w-5">{value.amount}</button>
          <button
            className="border border-gray-200  w-5"
            onClick={() =>
              increaseAmount({ ...value.product, size: [value.size] })
            }
          >
            +
          </button>
        </div>
        <div className="absolute top-0 right-0">
          <svg
            className="h-5 w-5 text-black cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() =>
              deleteProducts({ ...value.product, size: [value.size] })
            }
          >
            {" "}
            <path stroke="none" d="M0 0h24v24H0z" />{" "}
            <line x1="4" y1="7" x2="20" y2="7" />{" "}
            <line x1="10" y1="11" x2="10" y2="17" />{" "}
            <line x1="14" y1="11" x2="14" y2="17" />{" "}
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />{" "}
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
