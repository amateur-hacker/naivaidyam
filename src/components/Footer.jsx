import { MdOutlinePhoneEnabled, MdOutlineEmail } from "react-icons/md";
import { LuLocateFixed } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className="min-h-[200px] px-5 pt-10 space-y-16">
        <div className="max-w-[700px] mx-auto space-y-5 flex justify-center items-center flex-col">
          <div className="max-w-2xl space-y-2">
            <h3 className="uppercase font-bold text-lg sm:text-xl text-red-500">
              About us
            </h3>
            <p className="text-xs sm:text-sm [word-spacing:0.2rem] !leading-[1.3rem] sm:!leading-[1.5rem] ">
              Naivaidyam is an innovative e-commerce platform revolutionizing
              the way individuals connect with spirituality. We offer a seamless
              online experience for booking poojas, offering prasad, and
              accessing essential pooja samagri, all from the comfort of one's
              home.
            </p>
          </div>
          <div className="space-y-2 self-start">
            <div className="flex space-x-3 items-center">
              <MdOutlinePhoneEnabled className="text-xl text-red-300" />
              <span className="text-xs sm:text-sm font-bold text-gray-500">
                987-654-321-0
              </span>
            </div>

            <div className="flex space-x-3 items-center">
              <MdOutlineEmail className="text-xl text-red-300" />
              <span className="text-xs sm:text-sm font-bold text-gray-500">
                contact@naivaidyam.com
              </span>
            </div>

            <div className="flex space-x-3 items-center">
              <LuLocateFixed className="text-xl text-red-300" />
              <span className="text-xs sm:text-sm font-bold text-gray-500">
                xyz location
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center flex-col space-y-5 sm:space-y-7 xl:flex-row xl:space-y-0 border-t-2 p-2">
          <span className="font-bold text-xs sm:text-sm text-black/80">
            Copyright © Naivaidyam {new Date().getFullYear()}
          </span>
          <div className="items-center hidden xl:flex">
            <img
              src="/peakock-feather.png"
              width="50"
              height="50"
              alt="Peakcock feather"
            />
            <h1 className="font-bold text-3xl nav-heading">Naivaidyam</h1>
          </div>
          <div className="flex space-x-8">
            <div className="text-xl size-10 rounded-full bg-black/10 justify-center items-center flex hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer group">
              <FaFacebookF className="group-hover:text-blue-400 transition-colors duration-300 ease-in" />
            </div>
            <div className="text-xl size-10 rounded-full bg-black/10 justify-center items-center flex hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer group">
              <FaXTwitter className="group-hover:text-blue-700 transition-colors duration-300 ease-in" />
            </div>
            <div className="text-xl size-10 rounded-full bg-black/10 justify-center items-center flex hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer group">
              <FaInstagram className="group-hover:text-pink-500 transition-colors duration-300 ease-in" />
            </div>
            <div className="text-xl size-10 rounded-full bg-black/10 justify-center items-center flex hover:-translate-y-2 transition-transform duration-500 ease-in-out cursor-pointer group">
              <RiYoutubeLine className="group-hover:text-red-500 transition-colors duration-300 ease-in" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
