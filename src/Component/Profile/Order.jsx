import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const ProfileOrder = () => {
  return (
    <div>
      <Header/>
      <div className="bg-white pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="mx-auto mt-2 max-w-5xl px-4 sm:px-6 lg:px-10">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-bold text-gray-900">Orders</h1>{" "}
              <p className="mt-1 text-sm font-medium text-gray-500">
              Your all Orders and their status on the platform
              </p>
            </div>{" "}
            <div className="mx-auto mt-8 px-4 sm:px-6 md:px-8">
              <div className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                <nav className="flex flex-wrap gap-4">
                  <a
                    href="/account/profile"
                    className="group inline-flex items-center whitespace-nowrap rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200"
                  >
                    Profile
                  </a>{" "}
                  <a
                    href="/Address"
                    className="group inline-flex items-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Addresses
                  </a>{" "}
                  <a
                    href="/account/Orders"
                    className="group inline-flex items-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Orders
                  </a>{" "}
                  <a
                    href="/account/orders"
                    className="group inline-flex items-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Orders
                  </a>
                </nav>
              </div>{" "}
              <form action="#" method="POST" className="mt-12 max-w-3xl">
                <div className="space-y-8">
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label
                      for=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Profile Photo
                    </label>{" "}
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <div className="flex items-center space-x-6">
                        <img
                          className="h-12 w-12 flex-shrink-0 rounded-lg object-cover"
                          src="https://lh3.googleusercontent.com/a/ACg8ocLLDBfZtMVWNjWdFll4IEbGtWHrHedBviS_X_EFb9qq_gZY=s96-c"
                          alt=""
                        />{" "}
                        <button
                          type="button"
                          className="rounded-md bg-white text-sm font-semibold text-gray-400 transition-all duration-200 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2"
                        >
                          Remove
                        </button>{" "}
                        <button
                          type="button"
                          className="text-primary focus:ring-primary rounded-md bg-white text-sm font-semibold transition-all duration-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label
                      for=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      First &amp; Last Name
                    </label>{" "}
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
                        <div>
                          <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="First Name"
                            className="caret-primary focus:border-primary focus:ring-primary block w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-500 sm:text-sm"
                          />
                        </div>{" "}
                        <div>
                          <input
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Last Name"
                            className="caret-primary focus:border-primary focus:ring-primary block w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label
                      for=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Email Address
                    </label>{" "}
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder=""
                        className="caret-primary focus:border-primary focus:ring-primary block w-full rounded-lg border border-gray-300 px-4 py-3 placeholder-gray-500 sm:text-sm"
                        disabled=""
                      />
                    </div>
                  </div>{" "}
                  <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-5">
                    <label
                      for=""
                      className="block text-sm font-bold text-gray-900 sm:mt-px sm:pt-2"
                    >
                      Phone Number
                    </label>{" "}
                    <div className="mt-2 sm:col-span-2 sm:mt-0">
                      <div className="relative flex rounded-md ">
                        <div className="flex">
                          <button
                            id="states-button"
                            data-dropdown-toggle="dropdown-states"
                            className="relative z-10 inline-flex flex-shrink-0 items-center overflow-hidden whitespace-nowrap rounded-l-md border border-gray-300 bg-gray-50 px-4 py-2.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                            type="button"
                            role="combobox"
                            aria-controls="dropdown-countries"
                            aria-expanded="false"
                            aria-haspopup="false"
                          >
                            <div className="inline-flex items-center text-left">
                              <span className="flag flag-in mr-3 flex-shrink-0"></span>{" "}
                              <span className="text-gray-600 dark:text-gray-400">
                                +91
                              </span>
                            </div>{" "}
                            <svg
                              aria-hidden="true"
                              className="ml-1 h-4 w-4 "
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>{" "}
                        </div>{" "}
                        <input
                          className="block w-full px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-300 bg-white border border-gray-300 rounded-r-md caret-gray-900 focus:ring-0 focus:outline-none"
                          id="phoneInput"
                          required=""
                          placeholder="8123456789"
                          type="tel"
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
                <div className="mt-6 sm:mt-12">
                  <button
                    type="submit"
                    className="bg-primary focus:ring-primary inline-flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:bg-gray-300"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ProfileOrder;
