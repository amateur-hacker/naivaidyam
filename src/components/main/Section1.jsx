const Section1 = () => {
  return (
    <section className="relative px-5 py-10">
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-[90vw] w-full lg:space-x-10 mx-auto space-y-10 lg:space-y-0">
        <div className="max-w-[700px] w-full h-[600px] sm:h-[700px] flex justify-center items-center relative">
          <img
            src="/god2-second.jpg"
            width="0"
            height="0"
            alt="ganesh image"
            className="absolute top-0 left-0 aspect-auto w-[158px] h-[200px] sm:w-[218px] sm:h-[260px]"
          />

          <img
            src="/god3-second.jpg"
            width="0"
            height="0"
            alt="shiv image"
            className="z-[1] aspect-auto w-[263px] h-[341px] sm:w-[403px] sm:h-[481px]"
          />

          <img
            src="/hindu-place-second.jpg"
            width="0"
            height="0"
            alt="hindu place image"
            className="absolute bottom-0 right-0 aspect-auto w-[118px] h-[150px] sm:w-[168px] sm:h-[200px]"
          />
        </div>
        <div className="max-w-2xl space-y-7 text-center sm:text-start">
          <div className="text-[#7E4555] font-bold flex space-x-4 items-center justify-center sm:justify-start">
            <span className="text-2xl">&#2384;</span>
            <span className="text-md sm:text-lg uppercase">
              Features We Provide
            </span>
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-4 !leading-[3.8rem] bg-gradient-to-r from-red-600 via-red-700 to-red-800 bg-clip-text text-transparent sm:max-w-[80%]">
            That Makes it Unique
          </h2>
          <div className="grid grid-rows-2 grid-cols-2 gap-5">
            <div className="flex space-x-3 items-center justify-center sm:justify-start">
              <div className="size-6 bg-gray-300 rounded-full text-3xl flex justify-center items-center p-4">
                &#x2713;
              </div>
              <span className="font-bold text-red-500 text-md sm:text-lg">
                Pooja Booking
              </span>
            </div>
            <div className="flex space-x-3 items-center justify-center sm:justify-start">
              <div className="size-6 bg-gray-300 rounded-full text-3xl flex justify-center items-center p-4">
                &#x2713;
              </div>
              <span className="font-bold text-red-500 text-md sm:text-lg">
                Prasad Offering
              </span>
            </div>
            <div className="flex space-x-3 items-center justify-center sm:justify-start">
              <div className="size-6 bg-gray-300 rounded-full text-3xl flex justify-center items-center p-4">
                &#x2713;
              </div>
              <span className="font-bold text-red-500 text-md sm:text-lg">
                Pandit Booking
              </span>
            </div>
            <div className="flex space-x-3 items-center justify-center sm:justify-start">
              <div className="size-6 bg-gray-300 rounded-full text-3xl flex justify-center items-center p-4">
                &#x2713;
              </div>
              <span className="font-bold text-red-500 text-md sm:text-lg">
                Pooja Samagri
              </span>
            </div>
          </div>
          <div className="flex space-x-3 items-center">
            <div className="space-x-2 flex items-center">
              <div className="w-[2px] h-[30px] bg-[#7E4555]"></div>
              <div className="w-[2px] h-[90px] bg-[#7E4555]"></div>
              <div className="w-[2px] h-[30px] bg-[#7E4555]"></div>
            </div>
            <p className="sm:max-w-[70%] leading-6 font-sans text-sm sm:text-base">
              Enable customers to participate in sacred rituals and traditions
              without leaving their homes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
