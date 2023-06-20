import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

// import {  } from "./home";
const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
