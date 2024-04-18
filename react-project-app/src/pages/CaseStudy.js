import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { Faqs } from "../Faqs";
import { Weather } from "../Weather";
function Casestudy() {
  return (
    <>
      <Header />
      <Weather />
      <Faqs />
      <Footer />
    </>
  );
}
export { Casestudy };
