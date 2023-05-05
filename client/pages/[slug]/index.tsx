import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import DetailProduct from "../../src/Components/DetailProduct";
import Layout from "../../src/Components/Layout";
import Product from "../../src/Components/Product";
import { ProductContext } from "../../src/Context/Product";

enum SortbyDefault {
  ASC = "ASC",
  DESC = "DESC",
  NASC = "N-ASC",
  NDESC = "N-DESC",
  DEFAULT = "DEFAULT",
}
const dataSort = [
  { label: "Mặc định", key: SortbyDefault.DEFAULT },
  { label: "A --> Z", key: SortbyDefault.NASC },
  { label: "Z --> A", key: SortbyDefault.NDESC },
  { label: "Giá tăng dân", key: SortbyDefault.ASC },
  { label: "Giá giảm dần ", key: SortbyDefault.DESC },
];
type SortBy = {
  name: SortbyDefault;
  size: number[];
  sale: string[];
};

const index = () => {
  const [activeSearch, setActiveSearch] = useState<number>(0);
  const [sortBy, setSortBy] = useState<SortBy>({
    name: SortbyDefault.DEFAULT,
    size: [],
    sale: [],
  });

  const {
    query: { id, slug },
  } = useRouter();
  // console.log(id);
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

  let dataRender;
  if (sortBy?.name === SortbyDefault.NASC) {
    dataRender = productState.data.sort((value1, value2) =>
      value1.productName.localeCompare(value2.productName)
    );
  } else if (sortBy?.name === SortbyDefault.NDESC) {
    dataRender = productState.data
      .sort((value1, value2) =>
        value1.productName.localeCompare(value2.productName)
      )
      .reverse();
  } else if (sortBy?.name === SortbyDefault.ASC) {
    dataRender = productState.data.sort(
      (value1, value2) => value1.price - value2.price
    );
  } else if (sortBy?.name === SortbyDefault.DESC) {
    dataRender = productState.data
      .sort((value1, value2) => value1.price - value2.price)
      .reverse();
  } else {
    dataRender = productState.data;
  }

  //   if(sortBy.size.length){
  // dataRender= dataRender.map((value)=>{
  //   value.size.filter
  // })
  //   }
  return (
    <Layout>
      {id ? (
        <DetailProduct id={id as string} />
      ) : (
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
                    {slug}
                  </Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className="flex">
            <div className="basis-full md:basis-3/12">
              <div className="mt-10 flex flex-col ">
                <div className="text-lg font-bold text-gray-800">
                  <Link href={"/"}>THEO SIZE GIÀY</Link>
                </div>
                <hr className="my-3 h-[2px] bg-black border-0 w-2/6 " />
              </div>
              <div className="flex flex-wrap ">
                {[36, 37, 38, 39, 40, 41, 42, 43, 44, 45].map(
                  (value, index) => {
                    return (
                      <div className="flex items-center mb-4 w-1/2" key={index}>
                        <input
                          id="default-checkbox"
                          type="checkbox"
                          value=""
                          className="w-4 h-4  rounded border-gray-300 accent-black"
                        />
                        <label
                          htmlFor="default-checkbox"
                          className="ml-2 text-sm text-gray-600 font-medium"
                        >
                          {value}
                        </label>
                      </div>
                    );
                  }
                )}
              </div>
              <div className="mt-10 flex flex-col ">
                <div className="text-lg font-bold text-gray-800">
                  <Link href={"/"}>THEO THỂ LOẠI</Link>
                </div>
                <hr className="my-3 h-[2px] bg-black border-0 w-2/6 " />
              </div>
              <div className="mt-10 flex flex-col ">
                <div className="text-lg font-bold text-gray-800">
                  <Link href={"/"}>THEO MÃ GIẢM GIÁ</Link>
                </div>
                <hr className="my-3 h-[2px] bg-black border-0 w-2/6 " />
              </div>
              <div className="flex flex-wrap">
                {[10, 15, 20, 30, 35, 40, 50, 60].map((value, index) => {
                  return (
                    <div className="flex items-center mb-4 w-1/2" key={index}>
                      <input
                        id="default-checkbox"
                        type="checkbox"
                        value=""
                        className="w-4 h-4  rounded border-gray-300 accent-black"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          if (e.target.checked) {
                            setSortBy({
                              ...sortBy,
                              size: [...sortBy.size, value],
                            });
                          } else {
                            const arrSize = sortBy.size.filter(
                              (a) => a !== value
                            );
                            setSortBy({ ...sortBy, size: arrSize });
                          }
                        }}
                      />
                      <label
                        htmlFor="default-checkbox"
                        className="ml-2 text-sm text-gray-600 font-medium"
                      >
                        Giảm {value}%
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="basis-full md:basis-9/12">
              <div className="mt-10 flex justify-between">
                <div className="text-sm text-gray-800">
                  <Link href={"/"}>Hiển thị 12 số sản phẩm</Link>
                </div>
                <div className="flex">
                  <div className="mr-2">Sắp xếp:</div>
                  <div className="group inline-block relative">
                    <button className="z-10 h-full inline-flex items-center pl-2.5 pr-4 py-1 font-medium text-xs text-gray-900 border border-gray-300 rounded-sm  hover:bg-gray-50">
                      {dataSort[activeSearch].label}
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
                    <ul className="absolute bg-white shadow rounded hidden text-black pt-1 md:w-[150px]  overflow-x-auto group-hover:block  z-30">
                      {dataSort.map((value, index) => {
                        return (
                          <li
                            className="hover:text-white hover:bg-black font-normal text-sm  py-2 pl-4 block cursor-pointer"
                            key={index}
                            onClick={() => {
                              setActiveSearch(index);
                              setSortBy({
                                ...sortBy,
                                name: dataSort[index].key,
                              });
                            }}
                          >
                            {value.label}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              <hr className="my-3 h-[2px] bg-gray-300 border-0 w-full " />
              <div className="flex flex-wrap">
                {dataRender.map((value, index) => {
                  return (
                    <div className="basis-6/12 md:basis-4/12" key={index}>
                      <Product value={value} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* <Product value={productState.data[0]} /> */}
        </div>
      )}
    </Layout>
  );
};

export default index;
