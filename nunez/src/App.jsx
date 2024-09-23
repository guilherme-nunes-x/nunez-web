import React, { Fragment } from "react";
import "./styles/Global.scss";
import Header from "./components/Header/";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Banner />
      <Home />
      <Footer />
    </Fragment>
  );
}
