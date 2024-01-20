import React from "react";
import logo from '../Assets/image/logo.png'
const Footer = () => {
  const containerStyle = {
    backgroundImage:
      "url(&quot;https://shuffle.dev/flex-ui-assets/elements/pattern-white.svg&quot;)",
    backgroundPosition: "center",
    // Add other background styles if needed
  };
  return (
    <>
      <section
        className="bg-white overflow-hidden"
        style={{
          backgroundImage: containerStyle,
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto border-t">
          <div className="flex flex-wrap lg:items-start py-12">
            <img
              className="w-1/3 md:w-1/5 p-4 md:p-0"
              src={logo}
            />
            <div className="w-full md:w-3/5 px-4">
              <a className="block mb-4 px-3 max-w-max" href="#">
                <img
                  className="h-12"
                  src={logo}
                  alt=""
                />
              </a>
              <p className="mb-8 px-3 text-base md:text-lg text-gray-400 font-medium md:max-w-sm">
                Stay on top of everything that's happening in the IGrain markets.
              </p>
              <div className="mb-12 border-t pt-4 md:mb-0 flex flex-wrap gap-4">
                <div className="flex flex-col">
                  <h4 className="text-[#4C893B] px-3 font-semibold">
                    Company Information
                  </h4>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      About IGrain
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Careers
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Clients
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Contact
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      FAQ
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#4C893B] px-3 font-semibold">
                    Services
                  </h4>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Customised Reports
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Consulting Services
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Market Intelligence
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#4C893B] px-3 font-semibold">
                    Research
                  </h4>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Spot Market Prices
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Research Reports
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      News &amp; Commentaries
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Technical Analysis
                    </a>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h4 className="text-[#4C893B] px-3 font-semibold">Legal</h4>
                  <div className="w-full md:w-auto p-3 md:py-1 md:px-3">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Terms Of Use
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1 md:px-3">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Refund &amp; Cancellation Policy
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1 md:px-3">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Privacy
                    </a>
                  </div>
                  <div className="w-full md:w-auto p-3 md:py-1 md:px-3">
                    <a
                      className="inline-block text-gray-500 hover:text-gray-600 font-medium"
                      href="#"
                    >
                      Disclaimer
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/5 px-4">
              <div className="lg:pr-10 lg:ml-auto lg:max-w-max">
                <a className="block mb-4" href="#">
                  <img
                    src="https://shuffle.dev/flex-ui-assets/elements/app-store.svg"
                    alt=""
                  />
                </a>
                <a className="block" href="#">
                  <img
                    src="https://shuffle.dev/flex-ui-assets/elements/google-play.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-100"></div>
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center py-2  ">
            <div className="w-full md:w-1/2 mb-6 md:mb-0 ">
              <p className="text-gray-400 font-medium ">
                {" "}
                © 2023. All Rights Reserved.Venture incubated by
                <br /> Indian IGrain business Systems Ltd.{" "}
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap md:justify-end -mx-5">
                <div className="px-5 ">
                  <a
                    className="inline-block text-gray-300 hover:text-gray-400"
                    href="#"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="inline-block text-gray-300 hover:text-gray-400"
                    href="#"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="inline-block text-gray-300 hover:text-gray-400"
                    href="#"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="inline-block text-gray-300 hover:text-gray-400"
                    href="#"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="inline-block text-gray-300 hover:text-gray-400"
                    href="#"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.2 0H1.8C0.81 0 0 0.81 0 1.8V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V1.8C18 0.81 17.19 0 16.2 0ZM5.4 15.3H2.7V7.2H5.4V15.3ZM4.05 5.67C3.15 5.67 2.43 4.95 2.43 4.05C2.43 3.15 3.15 2.43 4.05 2.43C4.95 2.43 5.67 3.15 5.67 4.05C5.67 4.95 4.95 5.67 4.05 5.67ZM15.3 15.3H12.6V10.53C12.6 9.81004 11.97 9.18 11.25 9.18C10.53 9.18 9.9 9.81004 9.9 10.53V15.3H7.2V7.2H9.9V8.28C10.35 7.56 11.34 7.02 12.15 7.02C13.86 7.02 15.3 8.46 15.3 10.17V15.3Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
