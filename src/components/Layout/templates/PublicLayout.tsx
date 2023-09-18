import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./public-layout.module.scss";

const PublicLayout = () => {
  return (
    <div className={style["public-layout"]}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
