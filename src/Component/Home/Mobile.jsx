import React from "react";
import mobile from "../Assets/image/mobile.png";

const Mobile = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://shuffle.dev/flex-ui-assets/elements/pattern-white.svg')",
    backgroundPosition: "center",
    // Add other background styles if needed
  };

  return (
    <>
      <section
        className="py-24 md:pt-36 bg-white overflow-hidden"
        style={{
          backgroundImage: containerStyle,
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-[#4C893B] bg-green-100 font-medium rounded-full shadow-sm">
                Application
              </span>
              <h3 className="mb-4 text-4xl md:text-5xl leading-tight text-gray-900 font-bold tracking-tighter">
                Get our Mobile App
              </h3>
              <p className="mb-6 text-lg md:text-xl text-gray-500 font-medium">
                Stay on top on what's happening in the agricultural landscape
                with our mobile apps.
              </p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto mb-3 md:mb-0 md:mr-4">
                  <img
                    src="https://shuffle.dev/flex-ui-assets/elements/app-store-dark.svg"
                    alt=""
                  />
                </div>
                <div className="w-full md:w-auto">
                  <img
                    src="https://shuffle.dev/flex-ui-assets/elements/google-play-dark.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative flex flex-row items-center mx-auto md:mr-0 max-w-max">
                <div className="relative max-w-max overflow-hidden">
                  <img
                    className="relative z-20 h-80 md:h-auto object-cover"
                    src="https://shuffle.dev/flex-ui-assets/elements/applications/iphone-light1.png"
                    alt=""
                  />
                  <img
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 p-7 md:p-0 -mt-3 md:-mt-4 -ml-1 h-80 md:h-auto object-cover"
                    src={mobile}
                  />
                </div>
                <div className="relative z-10 hidden 2xl:block max-w-max 2xl:-ml-24">
                  <img
                    className="relative z-10 object-cover"
                    src="https://shuffle.dev/flex-ui-assets/elements/applications/iphone-light2.png"
                    alt=""
                  />
                  <img
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 -mt-4 -ml-1 object-cover"
                    src={mobile}
                  />
                </div>
                <img
                  className="absolute -left-5 -top-5 w-28 md:w-auto text-yellow-400"
                  src="https://shuffle.dev/flex-ui-assets/elements/circle2-yellow.svg"
                  alt=""
                />
                <img
                  className="absolute -right-7 bottom-12 w-28 md:w-auto text-blue-500"
                  src="https://shuffle.dev/flex-ui-assets/elements/dots1-blue.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mobile;
