import React from "react";

const Section2 = () => {
  return (
    <section
      className="min-h-[85vh] bg-cover bg-no-repeat relative bg-center flex justify-center items-center px-5 py-10"
      style={{ backgroundImage: "url('section2-main.png')" }}
    >
      <div className="max-w-[90vw] w-full flex flex-col items-center justify-center sm:items-stretch sm:justify-start">
        <div className="text-[#7E4555] font-bold flex space-x-4 items-center">
          <span className="text-2xl">&#2384;</span>
          <span className="text-md sm:text-lg uppercase">Service</span>
        </div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl  font-bold mb-4 !leading-[3.8rem] text-white max-w-[80%] sm:max-w-full text-center sm:text-start">
          How We Can Help
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5 place-items-center mt-2 md:mt-10">
          <div className="space-y-7 p-[30px] sm:p-[40px] bg-[#7E4555] rounded-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in group hover:scale-[1.01] hover:shadow-lg hover:shadow-black/50">
            <img
              src="/temple-main.png"
              width="65"
              height="65"
              alt="temple image"
              className=""
            />
            <div className="space-y-2">
              <h3 className="w-max relative text-lg sm:text-xl font-bold text-white group-hover:after:bg-orange-300/80 after:absolute after:h-[3px]  after:rounded-full after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500">
                Pooja Booking
              </h3>
              <p className="text-white text-xs sm:text-sm [word-spacing:0.2rem] ">
                Easily book personalized poojas tailored to your spiritual needs
                and preferences
              </p>
            </div>
          </div>

          <div className="space-y-7 p-[30px] sm:p-[40px] bg-[#DB4242] rounded-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in group hover:scale-[1.01] hover:shadow-lg hover:shadow-black/50">
            <img
              src="/prasad-main.png"
              width="65"
              height="65"
              alt="prasad image"
              className=""
            />
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-white relative group-hover:after:bg-orange-300/80 after:absolute after:h-[3px]  after:rounded-full after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 w-max">
                Prasad Offering
              </h3>
              <p className="text-white text-xs sm:text-sm [word-spacing:0.2rem]">
                Offer prasad to selected temples and holy places with just a few
                clicks, nurturing a sense of connection and devotion
              </p>
            </div>
          </div>

          <div className="space-y-7 p-[30px] sm:p-[40px] bg-white rounded-lg border-2 border-transparent hover:border-green-500 transition-all duration-300 ease-in group hover:scale-[1.01] hover:shadow-lg hover:shadow-black/50">
            <img
              src="/pandit-main.png"
              width="65"
              height="65"
              alt="pandit image"
              className=""
            />
            <div className="space-y-2 text-[#DB4242]">
              <h3 className="text-lg sm:text-xl font-bold relative group-hover:after:bg-[#7E4555] after:absolute after:h-[3px]  after:rounded-full after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 w-max">
                Pandit Booking
              </h3>
              <p className="text-xs sm:text-sm [word-spacing:0.2rem]">
                Facilitate the booking of experienced pandits for home, office,
                or shop poojas, ensuring authenticity and adherence to rituals
              </p>
            </div>
          </div>

          <div className="space-y-7 p-[30px] sm:p-[40px] bg-[#E0E7FF] rounded-lg border-2 border-transparent hover:border-green-500 transition-all duration-300 ease-in group hover:scale-[1.01] hover:shadow-lg hover:shadow-black/50">
            <img
              src="/pooja-samagri-main.png"
              width="65"
              height="65"
              alt="pooja samagri image"
              className=""
            />
            <div className="space-y-2 text-black">
              <h3 className="text-lg sm:text-xl font-bold relative group-hover:after:bg-[#7E4555] after:absolute after:h-[3px]  after:rounded-full after:w-0 after:bottom-0 after:left-0 group-hover:after:w-full after:transition-all after:duration-500 w-max">
                Pooja Samagri
              </h3>
              <p className="text-xs sm:text-sm [word-spacing:0.2rem]">
                Discover high-quality pooja samagri for purchase, delivering
                essential ingredients to your doorstep for sacred rituals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
