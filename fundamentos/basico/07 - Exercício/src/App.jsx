import React from "react";
import Home from "./sections/Home";
import Produtos from "./sections/Produtos";
import Header from "./components/Header";

function App() {
  const { pathname } = window.location;

  let Component;
  if (pathname === "/produtos") {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <>
      <div>
        <Header />
        <Component />
      </div>
    </>
  );
}

export default App;
