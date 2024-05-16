import { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import Signin from "./Signin";

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showForm]);

  return (
    <section
      className="min-h-[70vh] sm:min-h-[85vh] bg-cover bg-no-repeat relative bg-center flex items-center"
      style={{ backgroundImage: "url('god1-main.jpg')" }}
    >
      <div className="max-w-[90vw] w-full mx-auto flex z-[2]">
        <div className="w-full flex-shrink-0 flex-grow-0 basis-auto relative">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 !leading-[3rem] sm:!leading-[3.8rem] bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent max-w-xl text-center sm:text-start">
            Empowering the Spiritual Connection Online
          </h1>
          <div className="flex space-x-3 items-center">
            <div className="space-x-2 flex items-center">
              <div className="w-[2px] h-[35px] bg-[#7E4555]"></div>
              <div className="w-[2px] h-[95px] bg-[#7E4555]"></div>
              <div className="w-[2px] h-[35px] bg-[#7E4555]"></div>
            </div>
            <p className="max-w-md leading-6 font-sans text-center sm:text-start text-sm sm:text-base">
              Naivaidyam redefines spiritual connection through seamless
              e-commerce. Book poojas, offer prasad, and access essential pooja
              samagri from home.
            </p>
          </div>
          <div className="flex items-center ml-6 mt-6 justify-center sm:justify-start">
            <img
              src="/krishna.png"
              width="30"
              height="30"
              alt="Peakcock feather"
              className="-mr-4 z-[1]"
            />
            <button
              onClick={() => setShowForm(true)}
              className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-[#7E4555] rounded-full hover:bg-[#7E4555] group py-2.5 px-4 text-sm sm:text-base"
            >
              <span className="w-56 h-48 rounded bg-white absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-[#7E4555]">
                Register
              </span>
              <GoArrowRight className="text-white transition-all duration-300 ease-in-out group-hover:text-[#7E4555] group-hover:translate-x-1 text-2xl z-[1]" />
            </button>
          </div>
        </div>
      </div>
      {showForm && (
        <div>
          <Signin onClose={() => setShowForm(false)} />
        </div>
      )}
    </section>
  );
};

export default Hero;
