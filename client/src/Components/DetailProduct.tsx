import Link from "next/link";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { CartContext } from "../Context/Cart";
import { ProductContext } from "../Context/Product";
import Loading from "./Loading";
import OtherProducts from "./OtherProducts";

const DetailProduct: React.FC<{ id: string }> = ({ id }) => {
  const [indexSize, setIndexSize] = useState<number>(36);

  const { productState } = useContext(ProductContext);
  const { addProducts } = useContext(CartContext);

  if (productState.isLoading) {
    return <Loading />;
  }

  const value = productState.data.find((value) => value._id === id);

  if (!value) {
    return <h1>Không tìm thấy sản phẩm</h1>;
  }

  const {
    productName,
    href,
    _id,
    price,
    oldPrice,
    saleFlash,
    img,
    description,
    size,
  } = value;

  return (
    <>
      <Helmet>
        <title>{productName}</title>
      </Helmet>
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
                  href={{ pathname: href, query: { id: _id } }}
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 "
                >
                  {productName}
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-wrap">
          <div className="md:basis-1/2 basis-full flex justify-center items-center">
            <img src={img} alt={`img-${productName}`} className="w-4/5" />
          </div>

          <div className="md:basis-1/2 basis-full">
            <div className="flex flex-col justify-center items-center">
              <div className="text-2xl font-semibold">{productName}</div>
              <div>
                <div className="mt-4 md:mt-3 font-bold text-xs md:text-sm flex justify-center items-center ">
                  <p className="text-red-600 text-lg">
                    {price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <span className="mx-1">{`    -    `}</span>
                  <p className="line-through text-gray-700 text-lg">
                    {oldPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </div>
              </div>
              <div className="mt-10 text-gray-800">
                {description?.split("- ").map((value, index) => {
                  if (index === 0) return null;
                  return <div key={value}>- {value}</div>;
                })}
              </div>
              <div className="flex justify-center items-center flex-col mt-10">
                <div>Kích thước</div>
                <div>
                  {size
                    .filter((value) => value % 1 === 0)
                    .map((value, index) => (
                      <button
                        key={index}
                        className={`p-2.5 border text-xs  ${
                          indexSize === value
                            ? "border-black"
                            : "border-gray-200"
                        } mt-5 ml-2 bg-white text-black rounded-sm `}
                        onClick={() => setIndexSize(value)}
                      >
                        {value}
                      </button>
                    ))}
                </div>
              </div>
              <div className="flex justify-around mt-10 w-full">
                <button
                  className="hover:bg-black bg-white px-8 text-sm rounded-sm py-2 text-black hover:text-white border border-black "
                  onClick={() => addProducts({ ...value, size: [indexSize] })}
                >
                  Thêm vào giỏ hàng
                </button>
                <button className="bg-black px-8 text-sm rounded-sm py-2 text-white hover:bg-slate-900">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <OtherProducts />
    </>
  );
};

export default DetailProduct;
