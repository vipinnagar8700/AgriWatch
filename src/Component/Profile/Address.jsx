import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Address = () => {
  return (
    <div>
      <Header />
      <div className="bg-white pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="mx-auto mt-2 max-w-5xl px-4 sm:px-6 lg:px-10">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 md:px-8">
              <h1 className="text-2xl font-bold text-gray-900">Addresses</h1>{" "}
              <p className="mt-1 text-sm font-medium text-gray-500">
                Manage your addresses
              </p>
            </div>{" "}
            <div className="mx-auto mt-8 px-4 sm:px-6 md:px-8">
              <div className="rounded-lg border border-gray-200 bg-white px-3 py-2">
                <nav className="flex flex-wrap gap-4">
                  <a
                    href="/Profile"
                    className="group inline-flex items-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Profile
                  </a>{" "}
                  <a
                    href="/account/addresses"
                    className="group inline-flex items-center whitespace-nowrap rounded-lg bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 transition-all duration-200"
                  >
                    Addresses
                  </a>{" "}
                  <a
                    href="/account/Subscriptions"
                    className="group inline-flex items-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Subscriptions
                  </a>{" "}
                  <a
                    href="/account/orders"
                    className="group inline-flex items-center whitespace-nowrap rounded-lg bg-transparent px-3 py-2 text-sm font-medium text-gray-500 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                  >
                    Orders
                  </a>
                </nav>
              </div>{" "}
              <div className="mt-6 flex items-center justify-between rounded-lg ring-1 ring-gray-200">
                <div className="flex flex-col px-6 py-4">
                  <div className="flex flex-col">
                    <span className="flex items-center text-xs font-medium text-gray-500">
                      <span className="bg-secondary rounded-full border px-2 py-0.5 text-xs font-normal">
                        Office
                      </span>{" "}
                    </span>{" "}
                    <span className="my-2 flex items-center text-sm font-medium text-gray-900">
                      Vipin nagar
                    </span>{" "}
                    <span className="text-xs font-medium text-gray-500">
                      71,{" "}
                    </span>{" "}
                    <span className="text-xs font-medium text-gray-500">
                      Noida, Uttar Pradesh, India - 201304
                    </span>
                  </div>
                </div>{" "}
                <div className="mx-6 flex items-center">
                  <button
                    id="PJEYFkSrdr"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="CiGIiceG7-"
                    type="button"
                    data-melt-dialog-trigger=""
                  >
                    <button
                      tabindex="0"
                      className="inline-flex items-center justify-center font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/80 h-9 rounded-md px-3 mx-4 text-xs text-gray-600 dark:text-white"
                    >
                      Edit
                    </button>
                  </button>{" "}
                  <button
                    id="4cHRt0rt-K"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="IMsBTo6jUz"
                    type="button"
                    data-melt-dialog-trigger=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide-icon lucide lucide-trash-2 text-red-600 opacity-70"
                    >
                      <path d="M3 6h18"></path>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                      <line x1="10" x2="10" y1="11" y2="17"></line>
                      <line x1="14" x2="14" y1="11" y2="17"></line>Delete
                    </svg>
                  </button>{" "}
                </div>
              </div>{" "}
              <button
                id="PJEYFkSrdr"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="CiGIiceG7-"
                type="button"
                data-melt-dialog-trigger=""
                className="mt-6"
              >
                <button
                  tabindex="0"
                  className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary hover:bg-secondary/80 h-9 rounded-md px-3 text-sm font-medium text-gray-900 dark:text-white"
                >
                  + Add a new address
                </button>
              </button>{" "}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Address;
