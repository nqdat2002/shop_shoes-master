import React, { useContext, useState } from "react";
import { MainMenu } from "./dataMenu";
import Link from "next/link";
import { ProductContext } from "../Context/Product";
import CartItem from "./CartItem";
import { dataSearch } from "./dataSearch";
import { useRouter } from "next/router";
import { CartContext } from "../Context/Cart";

const Navbar = () => {
  const [activeSearch, setActiveSearch] = useState<number>(0);
  const [searchText, setSearchText] = useState<string>("");

  const router = useRouter();
  const { productState } = useContext(ProductContext);
  const { cartState } = useContext(CartContext);
  console.log(cartState);

  return (
    <>
      <div className="container mx-auto font-roboto ">
        <div className="flex justify-between w-full items-center py-4 px-14">
          <div>
            <Link href={"/"}>
              <img
                src="https://bizweb.dktcdn.net/100/336/177/themes/693093/assets/logo.png?1663899591926"
                alt="logo"
                className="w-36"
              />
            </Link>
          </div>

          <div className="w-96">
            <div className="flex">
              <div className="group inline-block relative">
                <button className="z-10 h-full inline-flex items-center pl-2.5 pr-4 py-1 font-medium text-xs text-gray-900 border border-gray-300 rounded-l-lg  hover:bg-gray-50">
                  {dataSearch[activeSearch].label}
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <ul className="absolute bg-white shadow rounded hidden text-black pt-1 md:w-[200px] md:h-[400px] overflow-x-auto group-hover:block  z-30">
                  {dataSearch.map((value, index) => {
                    return (
                      <li
                        className="hover:text-white hover:bg-black font-normal text-sm  py-2 pl-4 block cursor-pointer"
                        key={index}
                        onClick={() => setActiveSearch(index)}
                      >
                        {value.label}
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="relative w-full">
                <input
                  type="text"
                  id="search-dropdown"
                  className="block p-2.5 w-full z-20 text-sm text-gray-900  rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 "
                  placeholder="Tìm kiêm..."
                  name="searchText"
                  value={searchText}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchText(e.target.value)
                  }
                />
                <button
                  className="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-600 bg-transparent rounded-r-lg hover:text-gray-500 "
                  onClick={() => {
                    if (searchText) {
                      router.push({
                        pathname: "/search",
                        query: {
                          s: searchText,
                          f: dataSearch[activeSearch].key,
                        },
                      });
                    }
                  }}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-x-3">
            <div className="">
              <div className="group inline-block relative">
                <Link
                  href={"/account"}
                  className="font-normal text-gray-200 inline-flex items-center text-sm hover:text-white"
                >
                  <span className="text-black flex items-center">
                    <svg
                      className="h-6 w-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>{" "}
                    Tài khoản
                  </span>
                </Link>
                <ul className="absolute bg-white shadow rounded hidden text-black pt-1 md:w-[200px] group-hover:block z-30">
                  <li className="hover:text-red-600 font-normal text-sm  py-2 pl-4 block  ">
                    <Link
                      href="/register"
                      className="flex items-center gap-x-1"
                    >
                      <svg
                        className="h-6 w-6 "
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />{" "}
                        <circle cx="8.5" cy="7" r="4" />{" "}
                        <line x1="20" y1="8" x2="20" y2="14" />{" "}
                        <line x1="23" y1="11" x2="17" y2="11" />
                      </svg>
                      Đăng ký
                    </Link>
                  </li>
                  <li className="hover:text-red-600 font-normal text-sm  py-2 pl-4 block  ">
                    <Link href="/login" className="flex items-center gap-x-1">
                      <svg
                        className="h-6 w-6 "
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {" "}
                        <path stroke="none" d="M0 0h24v24H0z" />{" "}
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{" "}
                        <path d="M20 12h-13l3 -3m0 6l-3 -3" />
                      </svg>
                      Đăng nhập
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="group inline-block relative">
                <Link
                  href={"/cart"}
                  className="font-normal text-gray-200 inline-flex items-center text-sm hover:text-white"
                >
                  <span className="text-black flex items-center">
                    <svg
                      className="h-6 w-6 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Giỏ hàng (
                    {cartState.data.reduce((value, obj) => {
                      return (value += obj.amount);
                    }, 0)}
                    )
                  </span>
                </Link>
                <ul className="absolute bg-white shadow  -left-60 rounded hidden text-black p-5 md:w-[400px] group-hover:block z-30 md:max-h-[600px] ">
                  {cartState.data.length === 0 ? (
                    <div className="text-center p-3">Giỏ hàng trống</div>
                  ) : (
                    <>
                      <ul className="overflow-y-auto md:max-h-[300px]">
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
                              return (
                                value + cartItem.product.price * cartItem.amount
                              );
                            }, 0)
                            .toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                        </p>
                      </div>
                      <hr className="my-3 h-[2px] bg-gray-300 border-0 w-full " />
                      <div className="flex justify-around">
                        <button
                          onClick={() => router.push("/cart")}
                          className="bg-black px-8 text-sm rounded-sm py-2 text-white hover:bg-slate-900"
                        >
                          Giỏ hàng
                        </button>
                        <button
                          onClick={() => router.push("/checkout")}
                          className="hover:bg-black bg-white px-8 text-sm rounded-sm py-2 text-black hover:text-white border border-black "
                        >
                          Thanh toán
                        </button>
                      </div>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black h-14 w-full  text-white sticky top-0 flex items-center z-20">
        <div className="flex flex-wrap justify-around w-full text-white container mx-auto px-20">
          {MainMenu.map((value, index) => {
            const { label, link, items } = value;
            return (
              <div className="" key={index}>
                <div className="group inline-block relative">
                  <Link
                    href={link}
                    className="font-normal text-gray-200 inline-flex items-center text-sm hover:text-white"
                  >
                    <span className="">{label.toUpperCase()}</span>
                  </Link>
                  {items.length > 0 && (
                    <ul className="absolute bg-white shadow rounded hidden text-black pt-1 md:w-[200px] group-hover:block ">
                      {items.map((value, index) => {
                        return (
                          <li
                            className="hover:text-red-600 font-normal text-sm  py-2 pl-4 block "
                            key={index}
                          >
                            {value.label}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}

          {/* <div className="">
            <div className="group inline-block relative">
              <Link href={"/"} className="font-medium inline-flex items-center">
                <span className="">Dropdown</span>
              </Link>
              <ul className="absolute bg-white shadow rounded hidden text-black pt-1 md:w-[169px] group-hover:block ">
                <li className="">
                  <Link
                    href="/"
                    className="  hover:text-red-600 font-normal  px-2 py-2 pl-3 block"
                  >
                    One
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/"
                    className=" hover:text-red-600 font-normal  px-2 py-2 pl-3 block"
                  >
                    Two
                  </Link>
                </li>
                <li className="">
                  <Link
                    href="/"
                    className="  hover:text-red-600 font-normal  px-2 py-2 pl-3 block"
                  >
                    Three is the magic number
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
