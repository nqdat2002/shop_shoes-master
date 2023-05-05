import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import CartItem from "../../src/Components/CartItem";
import Layout from "../../src/Components/Layout";
import { CartContext } from "../../src/Context/Cart";
import * as address from "../../address.json";

const index = () => {
  const { cartState } = useContext(CartContext);
  const router = useRouter();

  const [selectedOptionProvinces, setSelectedOptionProvinces] =
    useState<number>(-1);
  const [selectedOptionDistricts, setSelectedOptionDistricts] =
    useState<number>(-1);

  return (
    <Layout>
      <div className="px-14">
        <nav className="flex ml-3 my-3" aria-label="Breadcrumb">
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
                  href={"/checkout"}
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 "
                >
                  Thanh toán
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col ">
          <div className="text-2xl font-semibold">Thông tin nhận hàng</div>

          <div className="flex flex-wrap mt-5">
            <div className="md:basis-6/12 basis-full mt-2">
              <div className="text-gray-600 text-sm">
                Nếu bạn đã có tài khoản, đăng nhập{" "}
                <Link href={"/login"} className="text-black underline ">
                  tại đây.
                </Link>
              </div>
              <div>
                <div>
                  Email <span className="text-red-600">*</span>
                </div>
                <div>
                  <input
                    type="text"
                    className="border border-gray-400 py-2 px-2.5  w-full md:w-4/5 rounded-sm"
                    placeholder="Nhập ở đây..."
                    required
                  />
                </div>
                <div className="mt-2">
                  <div>
                    Họ và tên <span className="text-red-600">*</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="border border-gray-400 py-2 px-2.5  w-full md:w-4/5 rounded-sm"
                      placeholder="Nhập ở đây..."
                      required
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div>
                    Số điện thoại <span className="text-red-600">*</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      className="border border-gray-400 py-2 px-2.5  w-full md:w-4/5 rounded-sm"
                      placeholder="Nhập ở đây..."
                      required
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div>
                    Địa chỉ <span className="text-red-600">*</span>
                  </div>
                  <div>
                    <input
                      type="password"
                      className="border border-gray-400 py-2 px-2.5  w-full md:w-4/5 rounded-sm"
                      placeholder="Nhập ở đây..."
                      required
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <div>
                    Tỉnh thành <span className="text-red-600">*</span>
                  </div>
                  <div>
                    <select
                      id="provinces"
                      value={selectedOptionProvinces}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSelectedOptionProvinces(+e.target.value)
                      }
                      className="border w-full md:w-4/5 py-2 px-2.5 border-gray-400 text-gray-900 rounded-sm "
                    >
                      <option value={-1}>Chọn tỉnh thành</option>
                      {address.provinces.map((value) => (
                        <option value={value.id} key={value.id}>
                          {value.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-2">
                  <div>
                    Quận huyện <span className="text-red-600">*</span>
                  </div>
                  <div>
                    <select
                      id="districts"
                      value={selectedOptionDistricts}
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                        setSelectedOptionDistricts(+e.target.value)
                      }
                      className="border w-full md:w-4/5 py-2 px-2.5 border-gray-400 text-gray-900 rounded-sm "
                    >
                      <option value={-1}>Chọn quận/huyện</option>
                      {address.districts
                        .filter(
                          (value) =>
                            value.province_id === selectedOptionProvinces
                        )
                        .map((value) => (
                          <option value={value.id} key={value.id}>
                            {value.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="mt-2">
                  <div>Ghi chú</div>
                  <div>
                    <input
                      type="password"
                      className="border border-gray-400 py-2 px-2.5  w-full md:w-4/5 rounded-sm"
                      placeholder="Nhập ở đây..."
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:basis-6/12 basis-full mt-2">
              <div className="text-gray-600 text-sm">Sản phẩm đã chọn</div>
              <ul className="bg-white shadow  -left-60 rounded text-black p-5 group-hover:block z-30 md:max-h-[600px] ">
                {cartState.data.length === 0 ? (
                  <div className="text-center p-3">Giỏ hàng trống</div>
                ) : (
                  <>
                    <ul className="overflow-y-auto md:max-h-[400px]">
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
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex mt-5 justify-end">
          <button className="bg-white px-8 text-sm rounded-sm py-2 text-black hover:text-red-600 underline ">
            <Link href={"/"}>Quay về trang chủ</Link>
          </button>
          <button className="bg-black px-8 text-sm rounded-sm py-2 text-white hover:bg-slate-900 ml-2">
            Thanh toán
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default index;
