import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useMemo } from "react";
import { arrayBuffer } from "stream/consumers";
import Layout from "../../src/Components/Layout";
import Product from "../../src/Components/Product";
import { ProductContext } from "../../src/Context/Product";

const index = () => {
  const {
    query: { s, f },
  } = useRouter();

  const { productState } = useContext(ProductContext);
  if (productState.isLoading) {
    return (
      <div
        aria-label="Loading..."
        role="status"
        className="flex w-screen h-screen justify-center items-center"
      >
        <svg className="h-12 w-12 animate-spin" viewBox="3 3 18 18">
          <path
            className="fill-gray-100"
            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
          ></path>
          <path
            className="fill-gray-800"
            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
          ></path>
        </svg>
      </div>
    );
  }
  const dataRender = (() => {
    let arr = [];
    if (f === "all") {
      for (let i = 0; i < productState.data.length; i++) {
        if (
          productState.data[i].productName
            .toLowerCase()
            .search((s as string).toLowerCase()) !== -1
        ) {
          arr.push(productState.data[i]);
        }
      }
    } else {
      for (let i = 0; i < productState.data.length; i++) {
        if (
          productState.data[i].productName
            .toLowerCase()
            .search((s as string).toLowerCase()) !== -1 &&
          productState.data[i].productName
            .toLowerCase()
            .search((f as string).toLowerCase()) !== -1
        ) {
          arr.push(productState.data[i]);
        }
      }
    }
    return arr;
  })();

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
                  href={"/register"}
                  className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 "
                >
                  Tìm kiêm
                </Link>
              </div>
            </li>
          </ol>
        </nav>
      </div>
      {dataRender.length === 0 ? (
        <div className="text-center mt-10 flex justify-center flex-col items-center">
          <div className="text-lg font-bold text-gray-800">
            <Link href={"/san-pham-noi-bat"}>
              KHÔNG TÌM THẤY SẢN PHẨM PHÙ HỢP VỚI TỪ KHÓA '{s}'
            </Link>
          </div>
          <hr className="my-6 h-[2px] bg-gray-300 border-0 w-1/6 " />
        </div>
      ) : (
        <>
          <div className="text-center mt-10 flex justify-center flex-col items-center">
            <div className="text-lg font-bold text-gray-800">
              <Link href={"/san-pham-noi-bat"}>
                SẢN PHẨM TÌM VỚI TỪ KHÓA '{s}'
              </Link>
            </div>
            <hr className="my-6 h-[2px] bg-gray-300 border-0 w-1/6 " />
          </div>
          <div className="flex flex-wrap">
            {dataRender.map((value, index) => {
              if (index >= 20) {
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
      )}
    </Layout>
  );
};

export default index;
