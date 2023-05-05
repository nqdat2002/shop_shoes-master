import Link from "next/link";
import React from "react";
import Layout from "../../src/Components/Layout";

const index = () => {
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
                  Đăng nhập
                </Link>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col ">
          <div className="text-2xl font-semibold">Đăng nhập tài khoản</div>

          <div className="flex flex-wrap mt-5">
            <div className="md:basis-6/12 basis-full mt-2">
              <div className="text-gray-600 text-sm">
                Nếu bạn đã có tài khoản, đăng nhập tại đây.
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
                    Mật khẩu <span className="text-red-600">*</span>
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
              </div>
            </div>
            <div className="md:basis-6/12 basis-full mt-2">
              <div className="text-gray-600 text-sm">
                Bạn quên mật khẩu? Nhập địa chỉ email để lấy lại mật khẩu qua
                email.
              </div>
              <div>
                <div>
                  Email <span className="text-red-600">*</span>
                </div>
                <div>
                  <input
                    type="email"
                    className="border border-gray-400 py-2 px-2.5  w-full md:w-4/5 rounded-sm"
                    placeholder="Nhập ở đây..."
                    required
                  />
                </div>
              </div>
              <div>
                <button className="bg-black px-8 text-sm rounded-sm py-2 text-white hover:bg-slate-900 mt-2">
                  Lấy lại mật khẩu
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5">
          <button className="bg-black px-8 text-sm rounded-sm py-2 text-white hover:bg-slate-900 ml-2">
            Đăng nhập
          </button>
          <button className="bg-white px-8 text-sm rounded-sm py-2 text-black hover:text-red-600 underline ">
            <Link href={"/register"}>Đăng ký</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default index;
