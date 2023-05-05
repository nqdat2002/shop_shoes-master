import Link from "next/link";
import React, { Suspense, useContext } from "react";
import Layout from "../src/Components/Layout";
import { ProductContext } from "../src/Context/Product";

const Product = React.lazy(() => import("../src/Components/Product"));
// import Product from "../src/Components/Product";
// import { Image, Spin } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";

// const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default function Home() {
  const { productState } = useContext(ProductContext);
  // if (productState.isLoading) {
  //   return (
  //     <div
  //       aria-label="Loading..."
  //       role="status"
  //       className="flex w-screen h-screen justify-center items-center"
  //     >
  //       <svg className="h-12 w-12 animate-spin" viewBox="3 3 18 18">
  //         <path
  //           className="fill-gray-100"
  //           d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
  //         ></path>
  //         <path
  //           className="fill-gray-800"
  //           d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
  //         ></path>
  //       </svg>
  //     </div>
  //     // <div className="flex justify-center items-center h-screen">
  //     //   <div className="relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
  //     //     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white"></div>
  //     //   </div>
  //     // </div>
  //   );
  // }
  // console.log(productState.data);

  return (
    <>
      <div>
        <img
          src="https://bizweb.dktcdn.net/100/336/177/themes/693093/assets/slider_1.jpg?1663899591926"
          alt="shop"
          className="mx-auto"
        />
      </div>
      <Layout>
        <div className="text-center mt-10 flex justify-center flex-col items-center">
          <div className="text-lg font-bold text-gray-800">
            <Link href={"/san-pham-noi-bat"}>SẢN PHẨM NỔI BẬT</Link>
          </div>
          <hr className="my-6 h-[2px] bg-gray-300 border-0 w-1/6 " />
        </div>
        <div className="flex flex-wrap">
          {productState.data.map((value, index) => {
            if (index >= 20) {
              return null;
            }
            return (
              <div className="basis-6/12 md:basis-3/12" key={index}>
                <Suspense
                  fallback={
                    <div
                      aria-label="Loading..."
                      role="status"
                      className="flex w-full h-full justify-center items-center"
                    >
                      <svg
                        className="h-12 w-12 animate-spin"
                        viewBox="3 3 18 18"
                      >
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
                  }
                >
                  <Product value={value} />
                </Suspense>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10 flex justify-center flex-col items-center">
          <div className="text-lg font-bold text-gray-800">
            <Link href={"/san-pham-sales"}>SẢN PHẨM SALES</Link>
          </div>
          <hr className="my-6 h-[2px] bg-gray-300 border-0 w-1/6 " />
        </div>
        <div className="flex flex-wrap">
          {productState.data.map((value, index) => {
            if (index < 20) {
              return null;
            }
            return (
              <div className="basis-6/12 md:basis-3/12" key={index}>
                <Suspense
                  fallback={
                    <div
                      aria-label="Loading..."
                      role="status"
                      className="flex w-full h-full justify-center items-center"
                    >
                      <svg
                        className="h-12 w-12 animate-spin"
                        viewBox="3 3 18 18"
                      >
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
                  }
                >
                  <Product value={value} />
                </Suspense>
              </div>
            );
          })}
        </div>
        {/* <Product value={productState.data[0]} /> */}
      </Layout>
    </>
  );
}
