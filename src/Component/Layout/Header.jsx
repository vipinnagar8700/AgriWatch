import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Stack } from "@mui/material";
import logo from "../Assets/image/logo.png";
import { Link } from "react-router-dom";

const pages = ["Commodities", "About Us", "News", "Subscriptions"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];



function Header() {


  
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <>
      <section className=" w-full z-40 fixed">
        <section className="bg-white">
          <nav className="flex justify-between p-6 px-4">
            <div className="flex justify-between items-center align-middle w-full">
              <div className="lg:w-1/4 mt-2">
                <a className="block max-w-max" href="/">
                  <img className="h-10" src={logo} alt="" />
                </a>
              </div>
              <div className="hidden lg:block lg:w-1/2">
                <ul className="flex justify-center">
                  <li className="mr-12 group">
                    <a
                      className="flex flex-wrap items-center text-base font-medium text-gray-500 group-hover:text-[#4C893B] border-b-2 border-transparent group-hover:border-[#4C893B]"
                      href="#"
                    >
                      <p className="text-gray-800 group-hover:text-[#4C893B]">
                        Commodities
                      </p>
                    </a>
                    <div
                      className="product-menu hidden group-hover:flex group-hover:shadow-2xl absolute top-2 left-0 right-0 mt-11 mx-24 px-16 py-10 bg-white rounded-lg z-50 inset-0"
                      style={{ height: "fit-content" }}
                    >
                      <div className="flex flex-wrap flex-col w-full overflow-x-auto max-h-[600px]">
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              ANIMAL FEED
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Animal Feed - Feed Ingredients
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              COTTON
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Cotton
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              GRAINS
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Wheat
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Maize (Corn)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Rice
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              GUAR
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Guar Gum
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Guar Seed
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              OILMEAL
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Soymeal
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Rapeseed Meal
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              OILSEED
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Groundnut (Peanut)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Rapeseed (Mustard Seed)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Soyabean
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6" style={{ display: "none" }}>
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              OTHERS
                            </h3>
                            <ul className="w-full"></ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              PULSES
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/Category">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Peas
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/696fd5ea-7a11-40c3-9189-dc4c3b64f515/19126ba8-91bc-420d-96f0-56d80aa1ff57">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Masoor (Lentils)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/696fd5ea-7a11-40c3-9189-dc4c3b64f515/4cf99f7f-1f76-4869-853d-e98e50eda5fb">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Urad (Black Matpe)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/696fd5ea-7a11-40c3-9189-dc4c3b64f515/6838d0b7-b034-46c1-a22a-0ed088f9dab0">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Moong (Mung bean)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/696fd5ea-7a11-40c3-9189-dc4c3b64f515/8c26e7ca-fd36-4c2b-b3b1-93aa1acc72a4">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Tur (Pigeon Pea)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/696fd5ea-7a11-40c3-9189-dc4c3b64f515/b1d39d7f-cf13-4962-9a5a-aca44ad4f4ad">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Chana (Chickpeas)
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              SPICES
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/category/63c04b7e-7899-45ed-86f0-bcd8b5567ecd/07c8fc2b-3b8c-453d-9e9d-0cf590776f0e">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Red Chillies
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/63c04b7e-7899-45ed-86f0-bcd8b5567ecd/318ffd71-fae4-47d3-95f5-455f444dcacb">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Coriander
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/63c04b7e-7899-45ed-86f0-bcd8b5567ecd/6c0842f3-574d-450c-badd-79d0ce89b9e3">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Black Pepper
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/63c04b7e-7899-45ed-86f0-bcd8b5567ecd/a85de6ef-455c-4e3f-9129-bbf2d4fd06be">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Jeera (Cumin seed)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/63c04b7e-7899-45ed-86f0-bcd8b5567ecd/b9f54ab0-c17b-4fb5-a806-c5b482f1189c">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Cardamom
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/63c04b7e-7899-45ed-86f0-bcd8b5567ecd/dde32eb2-7547-4a97-b559-4a0b60a8c2d3">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Turmeric
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              SUGAR/GUR
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/category/d1c92989-3ae9-449c-9aa0-962908d22d68/0667f273-2895-4d55-8f5e-1ca6b0bb927b">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Sugar/Jaggery (Gur)
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                        <div className="w-1/6">
                          <div>
                            <h3 className="mb-4 text-xl font-heading font-medium">
                              VEGOILS
                            </h3>
                            <ul className="w-full">
                              <li className="mb-4">
                                <div>
                                  <a href="/category/a3431386-eb4f-455b-a33e-b20823fc20bb/964d7adf-8996-4b7e-a468-d30e877e276d">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Palm Oil (CPO)
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/a3431386-eb4f-455b-a33e-b20823fc20bb/cac65083-0f7a-43d5-9987-9b6a80784115">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Soy Oil
                                    </span>
                                  </a>
                                </div>
                              </li>
                              <li className="mb-4">
                                <div>
                                  <a href="/category/a3431386-eb4f-455b-a33e-b20823fc20bb/d61954c4-3db6-482c-bb03-d86ccb480c76">
                                    <span className="text-gray-400 hover:text-gray-500 cursor-pointer">
                                      Rapeseed Oil
                                    </span>
                                  </a>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="w-40 mt-5 mb-7 border-b border-gray-100"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="mr-12">
                    <Link
                      className="text-gray-500 hover:text-gray-900 font-medium"
                      to="/About"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="mr-12">
                    <a
                      className="text-gray-500 hover:text-gray-900 font-medium"
                      href="#"
                    >
                      News
                    </a>
                  </li>
                  <li className="mr-12">
                    <Link
                      className="text-gray-500 hover:text-gray-900 font-medium"
                      to="/Subscriptions"
                    >
                      Subscriptions
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="ml-auto lg:w-1/4">
                <div className="flex items-center justify-end">
                  <a
                    className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-[#4C893B] hover:bg-green-600 font-medium focus:ring-2 focus:ring-[#4C893B] focus:ring-opacity-50 rounded-md"
                    href="/Cart"
                  >
                    Cart
                  </a>
                </div>
              </div>
              <div className="ml-auto lg:w-1/4">
                <div className="flex items-center justify-end">
                <a
                    className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-[#4C893B] hover:bg-green-600 font-medium focus:ring-2 focus:ring-[#4C893B] focus:ring-opacity-50 rounded-md"
                    href="/login"
                  >
                    Log In
                  </a>
                  <a
                    className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-[#4C893B] hover:bg-green-600 font-medium focus:ring-2 focus:ring-[#4C893B] focus:ring-opacity-50 rounded-md"
                    href="/Profile"
                  >
                    Profile
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </section>
    </>
  );
}
export default Header;
