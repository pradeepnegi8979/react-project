import React from "react";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";

import { Todo } from "../Todo";
function Home() {
  return (
    <>
      <Header />
      <Todo />

      <Footer />
    </>
  );
}
export { Home };
