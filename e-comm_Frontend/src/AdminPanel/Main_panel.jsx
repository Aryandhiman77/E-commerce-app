import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ContentWrapper from "./ContentWrapper";
import Preloader from "./Preloader";

const Main_panel = () => {
  return (
    <>
        <Preloader />
        <Header />
        <Sidebar />
        <ContentWrapper />
        <Footer />
    </>
  );
};

export default Main_panel;
