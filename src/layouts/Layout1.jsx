import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Layout1 = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout1;
