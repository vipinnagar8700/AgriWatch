import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const CategoryGraph = () => {
  const [selectedInterval, setSelectedInterval] = useState("daily");
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "spot-market-chart",
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"], // Example daily data
      },
    },
    series: [
      {
        name: "Max Price",
        data: [150, 200, 180, 250, 210], // Example max price data
      },
      {
        name: "Min Price",
        data: [100, 150, 130, 180, 160], // Example min price data
      },
    ],
  });

  const handleIntervalChange = (interval) => {
    // Simulate fetching data based on the selected interval
    let categories, maxData, minData;

    switch (interval) {
      case "daily":
        categories = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"]; // Replace with actual daily data
        maxData = [150, 200, 180, 250, 210]; // Replace with actual max price data for daily
        minData = [100, 150, 130, 180, 160]; // Replace with actual min price data for daily
        break;
      case "weekly":
        categories = ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"]; // Replace with actual weekly data
        maxData = [300, 350, 320, 380, 360]; // Replace with actual max price data for weekly
        minData = [250, 300, 280, 330, 310]; // Replace with actual min price data for weekly
        break;
      case "monthly":
        categories = ["Jan", "Feb", "Mar", "Apr", "May"]; // Replace with actual monthly data
        maxData = [800, 850, 820, 880, 860]; // Replace with actual max price data for monthly
        minData = [750, 800, 780, 830, 810]; // Replace with actual min price data for monthly
        break;
      default:
        break;
    }

    setChartData({
      options: {
        ...chartData.options,
        xaxis: {
          categories,
        },
      },
      series: [
        {
          name: "Max Price",
          data: maxData,
        },
        {
          name: "Min Price",
          data: minData,
        },
      ],
    });

    setSelectedInterval(interval);
  };

  return (
    <>
      <section className="mpt-[84px] md:pt-[121px] lg:pt-[105px]">
        <section className="xl:container mx-auto">
          <section className="bg-white p-8">
            <div className="flex flex-wrap">
              <div className="h-20 p-2 rounded shadow-md w-20">
                <img src="https://ik.imagekit.io/butterpaper/Butterpaper/prod/562cc62a-763b-472c-b194-07af22838c45/90eab63b-1031-4164-92d6-2617cb6739d0/Product/Feed_Ingredients_XqLwa-OvU.png" />
              </div>
              <div className="flex-1 p-2">
                <h2 className="font-semibold text-black mt-5 text-3xl">
                  Animal Feed - Feed Ingredients
                </h2>
              </div>
            </div>
          </section>
          <div className="flex flex-wrap -mb-4 md:mb-0">
            <div className="w-full md:w-2/3 px-4 mb-4 md:mb-0">
              <section className="border border-gray-200 rounded-md shadow-lg">
                <div className="container mx-auto">
                  <div className="mx-auto p-6 h-full bg-white rounded-md">
                    <div className="flex w-auto p-2 relative items-end mr-4 justify-between">
                      <h2 className="text-gray-900 text-lg font-semibold">
                        Spot Market Price Chart
                      </h2>
                      <div className="w-auto flex absolute left-1/4 button">
                        <button
                          onClick={() => handleIntervalChange("daily")}
                          className={`p-2 mx-2 flex flex-wrap justify-center items-center w-20 h-9 font-medium text-sm text-gray-500 border ${
                            selectedInterval === "daily"
                              ? "bg-[#DBE7D8] hover:bg-[#DBE7D8]"
                              : "hover:border-gray-300"
                          } rounded-md shadow-button`}
                        >
                          {" "}
                          Daily{" "}
                        </button>
                        <button
                          onClick={() => handleIntervalChange("weekly")}
                          className={`p-2 mx-2 flex flex-wrap justify-center items-center w-20 h-9 font-medium text-sm text-gray-500 border ${
                            selectedInterval === "weekly"
                              ? "bg-[#DBE7D8] hover:bg-[#DBE7D8]"
                              : "hover:border-gray-300"
                          } rounded-md shadow-button`}
                        >
                          {" "}
                          Weekly{" "}
                        </button>
                        <button
                          onClick={() => handleIntervalChange("monthly")}
                          className={`p-2 mx-2 flex flex-wrap justify-center items-center w-20 h-9 font-medium text-sm text-gray-500 border ${
                            selectedInterval === "monthly"
                              ? "bg-[#DBE7D8] hover:bg-[#DBE7D8]"
                              : "hover:border-gray-300"
                          } rounded-md shadow-button`}
                        >
                          {" "}
                          Monthly{" "}
                        </button>
                      </div>
                      <div className="flex-wrap items-center -m-1.5 hidden md:flex">
                        <div className="w-auto flex p-1.5">
                          <div
                            className="flex items-center apexcharts-legend apexcharts-align-center apx-legend-position-bottom"
                            style={{
                              inset: " auto 0px 1px",
                              maxHeight: "150px",
                            }}
                          >
                            <div
                              className="flex items-center apexcharts-legend-series"
                              style={{ margin: "2px 5px" }}
                            >
                              <div
                                className="w-10 h-10 purp"
                                style={{
                                  background: " rgb(35, 166, 154) !important",
                                  color: " rgb(35, 166, 154)",
                                  height: "12px",
                                  width: "12px",
                                  left: "0px",
                                  top: "0px",
                                  borderWidth: "0px",
                                  borderColor: " rgb(255, 255, 255)",
                                  borderRadius: "12px",
                                }}
                              ></div>
                              <span
                                className="ml-2 apexcharts-legend-text"
                                style={{
                                  color: "rgb(35, 166, 154)",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                Max Price
                              </span>
                            </div>
                            <div
                              className="flex items-center apexcharts-legend-series"
                              style={{ margin: "2px 5px" }}
                            >
                              <div
                                className="w-10 h-10 purp"
                                style={{
                                  background: "rgb(238, 83, 79) !important ",
                                  color: "rgb(238, 83, 79)",
                                  height: " 12px",
                                  width: "12px",
                                  left: "0px",
                                  top: "0px",
                                  borderWidth: " 0px",
                                  borderColor: " rgb(255, 255, 255)",
                                  borderRadius: "12px",
                                }}
                              ></div>
                              <span
                                className="ml-2 apexcharts-legend-text"
                                style={{
                                  color: "rgb(238, 83, 79)",
                                  fontSize: "12px",
                                  fontWeight: 400,
                                  fontFamily: "Helvetica, Arial, sans-serif",
                                }}
                              >
                                Min Price
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h2 className="mb-6 text-gray-900 text-lg font-semibold invisible">
                      Spot Market Price Chart
                    </h2>
                    <div className="mb-6 w-full">
                      <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="line"
                        height={350}
                        className="w-full mt-4"
                      />
                    </div>
                    <div className="flex justify-between sm:flex-row flex-col gap-y-2 gap-x-8">
                      <div className="p-2">
                        <h2 className="font-semibold text-2xl text-gray-900 whitespace-no-wrap">
                          FAQ
                        </h2>
                        <p className="font-medium text-xs text-gray-500">
                          Animal Feed - Feed Ingredients
                        </p>
                      </div>
                      <div className="flex gap-y-2 gap-x-8">
                        <div className="bg-gray-50 border p-2 rounded shadow-sm w-full md:w-64 my-2 cursor-pointer">
                          <div className="relative w-full">
                            <p
                              className="border-0 flex items-center justify-between text-gray-900 capitalize"
                              title="Latur"
                            >
                              <span className="truncate">Latur</span>
                            </p>
                          </div>
                          <p className="font-medium text-xs text-gray-500">
                            Location
                          </p>
                        </div>
                        <div className="bg-gray-50 border p-2 rounded shadow-sm w-full md:w-64 my-2 cursor-pointer">
                          <div className="relative w-full">
                            <p
                              className="border-0 flex items-center justify-between text-gray-900 capitalize"
                              title="FAQ"
                            >
                              <span className="truncate">FAQ</span>
                            </p>
                          </div>
                          <p className="font-medium text-xs text-gray-500">
                            Variant
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mx-auto">
                  <div className="flex flex-wrap p-6 mx-auto bg-white rounded-md">
                    <div className="lg:flex lg:flex-wrap items-center justify-between -m-2 mb-6 w-full">
                      <div className="w-auto p-2">
                        <p className="font-semibold text-lg text-gray-900">
                          Animal Feed - Feed Ingredients SPOT MARKETS
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-baseline w-full">
                      <table className="flex-1">
                        <tbody>
                          <tr>
                            <td className="name font-bold pb-2">
                              <span>Market</span>
                            </td>
                            <td className="second_count font-bold pb-2 px-8 whitespace-nowrap">
                              Oct 30
                            </td>
                            <td className="first_count font-bold pb-2 whitespace-nowrap">
                              Oct 31
                            </td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Mumbai</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">45650 - 45650</td>
                            <td className="first_count">45650 - 45650</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Sangli</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Bilty
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">2400 - 2450</td>
                            <td className="first_count">2400 - 2450</td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">41800 - 41800</td>
                            <td className="first_count">41800 - 41800</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Jalna</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">44500 - 44500</td>
                            <td className="first_count">44500 - 44500</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Delhi</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Hybrid
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">2280 - 2300</td>
                            <td className="first_count">2280 - 2300</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Kolkata</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Mill Delivery
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">2300 - 2300</td>
                            <td className="first_count">2300 - 2300</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Solapur</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">42000 - 42000</td>
                            <td className="first_count">41000 - 41000</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Sri Ganganagar</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">3045 - 3050</td>
                            <td className="first_count">3030 - 3035</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Nanded</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">44500 - 44500</td>
                            <td className="first_count">44500 - 44500</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Gulab bagh</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Feed grade
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">2200 - 2250</td>
                            <td className="first_count">2200 - 2250</td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Bilty
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">2300 - 2350</td>
                            <td className="first_count">2300 - 2350</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Khanna</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Feed grade
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">2050 - 2050</td>
                            <td className="first_count">2050 - 2050</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Naugachia</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Red
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">2100 - 2100</td>
                            <td className="first_count">2100 - 2100</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Nizamabad</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Feed grade
                              <i className="text-sm text-[#4c893b]">(Rs/qt)</i>
                            </td>
                            <td className="second_count px-8">NA</td>
                            <td className="first_count">2100 - 2100</td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="sm:block hidden h-auto border-l-2 border-gray-400 w-5 mx-auto border-dotted"></div>
                      <table className="flex-1">
                        <tbody>
                          <tr>
                            <td className="name font-bold pb-2">
                              <span>Market</span>
                            </td>
                            <td className="second_count font-bold pb-2 px-8 whitespace-nowrap">
                              Oct 30
                            </td>
                            <td className="first_count font-bold pb-2 whitespace-nowrap">
                              Oct 31
                            </td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Latur</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">43500 - 43500</td>
                            <td className="first_count">44500 - 44500</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Nagpur</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">44500 - 44500</td>
                            <td className="first_count">44500 - 44500</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Kandla</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              Yellow Soymeal (Export) FOR
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">44500 - 44500</td>
                            <td className="first_count">44000 - 44000</td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              DOC (FOR)
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">26000 - 26000</td>
                            <td className="first_count">27000 - 27000</td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">44500 - 44500</td>
                            <td className="first_count">44000 - 44000</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Indore</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">43500 - 43500</td>
                            <td className="first_count">43000 - 43000</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Kota</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">45500 - 45500</td>
                            <td className="first_count">45000 - 45000</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Bundi</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">45300 - 45300</td>
                            <td className="first_count">44800 - 44800</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Akola</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">44000 - 44000</td>
                            <td className="first_count">44000 - 44000</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Hingoli</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">44500 - 44500</td>
                            <td className="first_count">44500 - 44500</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Jaipur</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              DOC - FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">26000 - 26000</td>
                            <td className="first_count">26500 - 26500</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Alwar</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              DOC - FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">28000 - 28000</td>
                            <td className="first_count">28500 - 28500</td>
                          </tr>
                          <tr className="line_all">
                            <td
                              colspan="3"
                              className="category capitalize py-2 px-4 text-lg text-[#4c893b] bg-[#ebf0e9]"
                            >
                              <b>Dhule</b>
                            </td>
                          </tr>
                          <tr className="line border-b">
                            <td className="name hover:underline cursor-pointer px-4 py-1.5">
                              FAQ
                              <i className="text-sm text-[#4c893b]">
                                (Rs/Matric Tonne)
                              </i>
                            </td>
                            <td className="second_count px-8">45000 - 45000</td>
                            <td className="first_count">45500 - 45500</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4 md:mb-0">
              <section className="border shadow-lg rounded-md">
                <div className="container mx-auto">
                  <div className="mx-auto p-8 bg-white rounded-md shadow-dashboard">
                    <h2 className="mb-6 text-lg font-semibold">Latest News</h2>
                    <div className="flex flex-wrap w-full">
                      <div className="py-6 text-sm font-light text-center w-full">
                        <img
                          src="https://ik.imagekit.io/butterpaper/Butterpaper/prod/562cc62a-763b-472c-b194-07af22838c45/90eab63b-1031-4164-92d6-2617cb6739d0/Product/Feed_Ingredients_XqLwa-OvU.png"
                          className="w-24 mb-2 mx-auto"
                        />{" "}
                        No news available for Animal Feed - Feed Ingredients
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="border shadow-lg rounded-md my-8">
                <div className="container mx-auto">
                  <div className="mx-auto p-8 bg-white rounded-md shadow-dashboard">
                    <h2 className="mb-6 text-lg font-semibold">
                      Latest Insights
                    </h2>
                    <div className="flex flex-wrap w-full">
                      <div className="py-6 text-sm font-light text-center w-full">
                        <img
                          src="https://ik.imagekit.io/butterpaper/Butterpaper/prod/562cc62a-763b-472c-b194-07af22838c45/90eab63b-1031-4164-92d6-2617cb6739d0/Product/Feed_Ingredients_XqLwa-OvU.png"
                          className="w-24 mb-2 mx-auto"
                        />{" "}
                        No commentary available for Animal Feed - Feed
                        Ingredients
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <section
            className="bg-white overflow-hidden py-12"
            // style="background-image: url('https://shuffle.dev/flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
          >
            <div className="container px-4 mx-auto">
              <div className="md:max-w-4xl mb-16 md:mb-20">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-[#4C893B] bg-green-100 font-medium uppercase rounded-full shadow-sm">
                  REPORTS
                </span>
                <h1 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">
                  Research Reports
                </h1>
                <p className="text-lg md:text-xl text-gray-500 font-medium">
                  Reports compiled by our expert team of research analysts.
                </p>
              </div>
              <div className="flex flex-wrap lg:items-center">
                <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                  <div className="relative mx-auto md:ml-0 max-w-max">
                    <img
                      className="absolute z-10 -left-8 -top-8 w-28 md:w-auto text-yellow-400"
                      src="https://shuffle.dev/flex-ui-assets/elements/circle3-yellow.svg"
                      alt=""
                    />
                    <img
                      className="absolute z-10 -right-7 -bottom-8 w-28 md:w-auto text-blue-500"
                      src="https://shuffle.dev/flex-ui-assets/elements/dots3-blue.svg"
                      alt=""
                    />
                    <img
                      src="https://shuffle.dev/flex-ui-assets/images/features/stock2.png"
                      alt=""
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-4">
                  <a
                    href="#"
                    className="flex p-8 hover:bg-white rounded-md hover:shadow-xl transition duration-200 relative"
                  >
                    <label className="absolute h-full w-full top-0 left-0 z-10"></label>
                    <div className="w-full md:flex-1 md:pt-3">
                      <h3 className="mb-4 text-xl md:text-2xl leading-tight text-gray-900 font-bold">
                        Daily Reports
                      </h3>
                      <p className="text-gray-500 font-medium">
                        Archived Reports &gt;&gt;
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex p-8 hover:bg-white rounded-md hover:shadow-xl transition duration-200 relative"
                  >
                    <label className="absolute h-full w-full top-0 left-0 z-10"></label>
                    <div className="w-full md:flex-1 md:pt-3">
                      <h3 className="mb-4 text-xl md:text-2xl leading-tight text-gray-900 font-bold">
                        Weekly Reports
                      </h3>
                      <p className="text-gray-500 font-medium">
                        Archived Reports &gt;&gt;
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="flex p-8 hover:bg-white rounded-md hover:shadow-xl transition duration-200 relative"
                  >
                    <label className="absolute h-full w-full top-0 left-0 z-10"></label>
                    <div className="w-full md:flex-1 md:pt-3">
                      <h3 className="mb-4 text-xl md:text-2xl leading-tight text-gray-900 font-bold">
                        Monthly Reports
                      </h3>
                      <p className="text-gray-500 font-medium">
                        Archived Reports &gt;&gt;
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default CategoryGraph;
