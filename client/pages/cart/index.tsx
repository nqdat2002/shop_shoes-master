import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import CartItem from "../../src/Components/CartItem";
import { CartContext } from "../../src/Context/Cart";
import { ProductContext } from "../../src/Context/Product";

const index = () => {
  const { productState } = useContext(ProductContext);
  const { cartState } = useContext(CartContext);
  const router = useRouter();

  // console.log(cartState);

  return (
    <div className="container mx-auto">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="/"
              className="inline-flex items-center text-sm font-medium text-black hover:text-gray-900 "
            >
              <svg
                className="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              Trang chủ
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <Link
                href="/cart"
                className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 "
              >
                Cart
              </Link>
            </div>
          </li>
        </ol>
      </nav>
      <div className="hidden text-center mt-10 flex justify-center flex-col items-center">
        <div className="text-lg font-bold text-gray-800">
          <Link href={"/cart"}>GIỎ HÀNG CỦA BẠN</Link>
        </div>
        <hr className="my-6 h-[2px] bg-gray-300 border-0 w-1/6 " />
      </div>
      {cartState.data.length === 0 ? (
        <div className="text-center p-24">Giỏ hàng trống</div>
      ) : (
        <>
          <ul className=" bg-white shadow  -left-60 rounded text-black p-5  group-hover:block z-30 ">
            <ul className="overflow-y-auto md:max-h-[600px]">
              {cartState.data.map((value, index) => (
                <div key={index}>
                  <CartItem value={value} />
                  <hr className="my-1 h-[1px] bg-gray-300 border-0 w-full" />
                </div>
              ))}
            </ul>

            <div className="flex justify-between my-3">
              <p>Tổng công:</p>
              <p className="font-semibold">
                {cartState.data
                  .reduce((value, cartItem) => {
                    return value + cartItem.product.price * cartItem.amount;
                  }, 0)
                  .toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
              </p>
            </div>
            <hr className="my-3 h-[2px] bg-gray-300 border-0 w-full " />
            <div className="flex justify-end">
              <button
                onClick={() => router.push("/checkout")}
                className="hover:bg-black bg-white px-8 text-sm rounded-sm py-2 text-black hover:text-white border border-black "
              >
                Thanh toán
              </button>
            </div>
          </ul>
        </>
      )}
    </div>
  );
};

export default index;
