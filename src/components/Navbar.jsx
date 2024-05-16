import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isSideBarClose, setIsSideBarClose] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowMenu(false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return (
    <nav className="flex justify-between min-h-20 items-center px-4 md:px-16 sticky top-0 z-10 bg-white/70 backdrop-blur-md">
      <Link to={"/"}>
        <button className="flex items-center">
          <img
            src="/peakock-feather.png"
            width="50"
            height="50"
            alt="Peakcock feather"
          />
          <span className="font-bold text-3xl nav-heading">Naivaidyam</span>
        </button>
      </Link>
      <div className="md:hidden z-[100]">
        <button onClick={toggleMenu} className="">
          {showMenu ? (
            <IoMdClose className="text-2xl -mb-2" />
          ) : (
            <RxHamburgerMenu className="text-2xl -mb-2" />
          )}
        </button>
      </div>
      {showMenu && (
        <div
          className="fixed w-full min-h-screen inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMenu}
        ></div>
      )}
      <ul
        className={`flex gap-10 ${showMenu ? "fixed inset-y-0 right-0 h-screen bg-white z-50 space-y-5 pt-24 w-64 flex-col gap-3 items-start p-8" : "hidden md:flex"}`}
      >
        <NavItem label="Home" path="/" />
        <NavItem label="Pooja" path="/pooja" />
        <NavItem label="Prasad" path="/prasad" />
        <NavItem label="Pandit" path="/pandit" />
        <NavItem label="Samagri" path="/samagri" />
      </ul>
    </nav>
  );
};

const NavItem = ({ label, path }) => {
  const { pathname } = useLocation();

  const isActive = pathname === path;

  return (
    <div
      className={`flex space-x-1 justify-center items-center font-bold text-sm cursor-pointer group ${isActive ? "text-red-500" : ""}`}
    >
      <Link to={path}>
        <li className="relative group-hover:after:bg-red-400 after:absolute after:h-[3px]  after:rounded-full after:w-0 after:bottom-0 after:left-1/2 after:-translate-x-1/2 group-hover:after:w-[70%] group-hover:after:mx-auto after:transition-all after:duration-500">
          {label}
        </li>
      </Link>
      <GrAdd />
    </div>
  );
};

export default Navbar;
