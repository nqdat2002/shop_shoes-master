import "../styles/globals.css";
import type { AppProps } from "next/app";
import ProductProvider from "../src/Context/Product";
import Head from "next/head";
import Navbar from "../src/Components/Navbar";
import Footer from "../src/Components/Footer";
import ScrollTopButton from "../src/Components/ScrollTopButton";
import { useEffect, useState } from "react";
import CartProvider from "../src/Context/Cart";
import UserProvider from "../src/Context/User";
// import { ConfigProvider } from "antd";

export default function App({ Component, pageProps }: AppProps) {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.scrollY;

      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <Head>
            <title>Shop TUSHOES</title>
            <link
              rel="icon"
              type="image/x-icon"
              href="https://bizweb.dktcdn.net/100/336/177/themes/693093/assets/logo.png?1663899591926"
            ></link>
          </Head>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
          {visible && <ScrollTopButton />}
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  );
}
