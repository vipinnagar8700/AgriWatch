import React from "react";

const Features = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://shuffle.dev/flex-ui-assets/elements/pattern-white.svg')",
    backgroundPosition: "center",
    // Add other background styles if needed
  };

  return (
    <>
      <section
        className="py-24 bg-white"
        style={{
          backgroundImage: containerStyle,
          backgroundPosition: "center",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="xl:max-w-4xl mb-12 mx-auto text-center">
            <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-[#4C893B] bg-green-100 font-medium uppercase rounded-full shadow-sm">
              Features
            </span>
            <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
              Actionable Insights &gt;&gt; Raw Data
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-medium">
              IGrain simplifies complex trends and feeds you with the only
              thing that your business needs to grow at a ferocious pace.
              Actionable Insights.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 px-4 lg:pt-6 mb-8 lg:mb-0">
              <div className="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#4C893B] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className=""
                    height="30"
                    width="30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                  Price Trends
                </h3>
                <p className="text-gray-500 font-medium">
                  We have one of the largest sets of IGrain commodity spot price
                  time series data in India to keep you updated on short and
                  long term price trends
                </p>
              </div>
              <div className="p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#4C893B] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className=""
                    height="30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                  Latest News
                </h3>
                <p className="text-gray-500 font-medium">
                  We keep you regularly updated with the relevant domestic and
                  global developments that could impact the IGrain commodity
                  markets
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <img
                className="mx-auto rounded-11xl"
                src="https://ucarecdn.com/9c6f9177-7577-49b9-8e67-97e5aa7a9e71/iStock1212035778.jpg"
                alt=""
              />
            </div>
            <div className="w-full lg:w-1/3 lg:pt-6 px-4">
              <div className="p-8 lg:mb-6 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#4C893B] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className=""
                    height="30"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                  IGrain Insights
                </h3>
                <p className="text-gray-500 font-medium">
                  Get insights on prices, arrivals and trader sentiments in over
                  200 spot markets in India everyday!{" "}
                </p>
              </div>
              <div className="p-8 text-center hover:bg-white rounded-md hover:shadow-xl transition duration-200">
                <div className="inline-flex h-16 w-16 mb-6 mx-auto items-center justify-center text-white bg-[#4C893B] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className=""
                    viewBox="0 0 16 16"
                    stroke-width="2"
                  >
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"></path>
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"></path>
                  </svg>
                </div>
                <h3 className="mb-4 text-xl md:text-2xl leading-tight font-bold">
                  Chat with Experts
                </h3>
                <p className="text-gray-500 font-medium">
                  Our team of experienced commodity market analysts are
                  available to our subscribers for clarifications or additional
                  guidance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
