import React from "react";

const MainCart = () => {
  return (
    <div>
      <div className="bg-white pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="container mx-auto mt-2 px-4 sm:px-6 lg:px-8">
          <div className="">
            <h2 className="text-3xl font-bold !leading-snug text-gray-900 sm:text-4xl">
              Your <span className="border-b-8 border-yellow-300">cart</span>
            </h2>
          </div>{" "}
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-5 lg:items-start lg:gap-x-12 xl:grid-cols-6 xl:gap-x-16">
              <div className="lg:col-span-3 xl:col-span-4">
                <div className="mt-8 hidden lg:grid lg:grid-cols-5 lg:gap-x-16">
                  <div className="col-span-3 flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                      Product/Package
                    </p>
                  </div>{" "}
                  <div className="col-span-2 text-center sm:grid sm:grid-cols-2 lg:gap-x-0 xl:gap-x-1">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Quantity
                      </p>
                    </div>{" "}
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Price
                      </p>
                    </div>
                  </div>
                </div>{" "}
                <hr className="mt-8 border-gray-200 lg:mt-4" />{" "}
                <div className="mt-7 flow-root">
                  <ul className="divide-y divide-gray-200">
                    <li className="flex py-7">
                      <img
                        className="h-20 w-20 rounded-lg bg-stone-100 p-4 shadow"
                        src="https://ik.imagekit.io/butterpaper/Butterpaper/prod/562cc62a-763b-472c-b194-07af22838c45/90eab63b-1031-4164-92d6-2617cb6739d0/Product/4.png?updatedAt=1698054198487"
                        alt="Test Payment"
                      />{" "}
                      <div className="ml-5 flex-1">
                        <div className="relative sm:grid sm:grid-cols-5 sm:gap-x-5 sm:pr-0">
                          <div className="col-span-3 pr-4 sm:pr-5">
                            <p className="text-base font-bold text-gray-900">
                              Test Payment
                            </p>{" "}
                            <p className="mt-1 text-xs font-medium text-gray-500">
                              Unit price: ₹1{" "}
                            </p>
                          </div>{" "}
                          <div className="col-span-2 mt-3 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end sm:pr-14">
                            <p className="w-20 flex-shrink-0 text-left text-base font-bold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              ₹5
                            </p>{" "}
                            <div className="sm:order-1">
                              <select
                                name=""
                                id=""
                                className="block w-20 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900"
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            </div>{" "}
                            <div className="absolute right-0 top-0 flex">
                              <button
                                type="button"
                                className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                              >
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </li>
                    <li className="flex py-7">
                      <img
                        className="h-20 w-20 rounded-lg bg-stone-100 p-4 shadow"
                        src="https://ik.imagekit.io/butterpaper/Butterpaper/prod/562cc62a-763b-472c-b194-07af22838c45/90eab63b-1031-4164-92d6-2617cb6739d0/Product/4.png?updatedAt=1698054198487"
                        alt="Test Payment"
                      />{" "}
                      <div className="ml-5 flex-1">
                        <div className="relative sm:grid sm:grid-cols-5 sm:gap-x-5 sm:pr-0">
                          <div className="col-span-3 pr-4 sm:pr-5">
                            <p className="text-base font-bold text-gray-900">
                              Test Payment
                            </p>{" "}
                            <p className="mt-1 text-xs font-medium text-gray-500">
                              Unit price: ₹1{" "}
                            </p>
                          </div>{" "}
                          <div className="col-span-2 mt-3 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end sm:pr-14">
                            <p className="w-20 flex-shrink-0 text-left text-base font-bold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                              ₹1
                            </p>{" "}
                            <div className="sm:order-1">
                              <select
                                name=""
                                id=""
                                className="block w-20 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900"
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                              </select>
                            </div>{" "}
                            <div className="absolute right-0 top-0 flex">
                              <button
                                type="button"
                                className="-m-2 inline-flex rounded p-2 text-gray-400 transition-all duration-200 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                              >
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>{" "}
                    </li>
                  </ul>
                </div>{" "}
                <hr className="mt-1 border-gray-200" />
              </div>{" "}
              <div className="lg:sticky lg:top-6 lg:col-span-2">
                <div className=" text-green-50 bg-[#4C893B] overflow-hidden rounded-md">
                  <div className="px-4 py-6 sm:p-6 lg:p-8">
                    <h2 className="text-primary-foreground text-2xl font-bold">
                      Cart total
                    </h2>{" "}
                    <div className="mt-5 flow-root">
                      <div className="-my-6 divide-y divide-gray-200">
                        <div className="flex items-center justify-between py-6">
                          <p className="text-primary-foreground text-base font-medium">
                            Subtotal
                          </p>{" "}
                          <p className="text-primary-foreground text-base font-medium">
                            ₹6
                          </p>
                        </div>{" "}
                        <div className="space-y-4 py-6">
                          <div className="flex items-center justify-between">
                            <p className="text-primary-foreground text-base font-bold">
                              Tax
                            </p>{" "}
                            <p className="text-primary-foreground text-base font-bold">
                              ₹0
                            </p>
                          </div>{" "}
                          <div>
                            <div className="flex items-center justify-between">
                              <p className="text-primary-foreground text-base font-bold">
                                Shipping
                              </p>{" "}
                              <p className="text-primary-foreground text-base font-bold">
                                ₹0
                              </p>
                            </div>
                          </div>
                        </div>{" "}
                        <div className="flex items-center justify-between py-6">
                          <p className="text-primary-foreground text-base font-bold">
                            Total
                          </p>{" "}
                          <p className="text-primary-foreground text-base font-bold">
                            ₹6
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="mt-6">
                      <a
                        href="/Summary"
                        className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-white px-6 py-4 text-sm font-bold text-gray-900 transition-all duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 "
                      >
                        Continue to billing details 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCart;
