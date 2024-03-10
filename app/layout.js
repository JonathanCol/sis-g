import "./globals.css";

import Header from "./components/Header/Header";
import Footer from "../app/components/Footer/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer/>
    </>
  );
}
