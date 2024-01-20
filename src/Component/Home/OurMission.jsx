import React from "react";

const OurMission = () => {
  const containerStyle = {
    backgroundImage:
      "url('https://shuffle.dev/flex-ui-assets/elements/pattern-white.svg')",
    backgroundPosition: "center",
    // Add other background styles if needed
  };
  return (
    <>
      <section
        className="bg-white py-16"
        style={{
          backgroundImage: containerStyle,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left top",
        }}
      >
        <div className="container px-4 mx-auto">
          <div className="md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
            <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-bold tracking-tighter">
              Our mission is to make knowledge and news accessible for everyone.
            </h3>
            <p className="mb-10 text-lg md:text-xl text-coolGray-500 font-medium">
              With our state of the art knowledge gathering platform stay on top
              of what is happening in the market.
            </p>
          </div>
          <div className="relative md:px-0 px-0">
            <div className="relative mx-4 md:mx-auto md:w-1/2 mb-6">
              <img
                className="absolute top-1/2 left-4 transform -translate-y-1/2"
                src="https://shuffle.dev/flex-ui-assets/elements/blog/search.svg"
                alt=""
              />
              <input
                className="w-full md:mx-0 py-3 pl-12 text-gray-900 leading-tight placeholder-gray-500 border border-gray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-[#4C893B] focus:ring-opacity-50 pr-4"
                type="text"
                placeholder="Search for news..."
              />
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div class="w-full px-4 mb-4 block">
              <p class="py-2 w-fit text-base text-[#4C893B] font-medium">
                Oct 31, 2023 | 06:04 pm
              </p>
              <a
                class="inline-block mb-4 text-2xl leading-tight text-gray-700 hover:text-gray-900 font-bold hover:underline"
                href="/content/news/7815a824-821d-4aa9-924d-5959428b06b1"
              >
                Jabalpur, M.P. Market witness Approx. 25,000 Quintal of Maize
                Arrivals with 14-16% Moisture content
              </a>
              <p class="description text-base md:text-lg text-gray-700 font-normal h-18 line-clamp-3">
                <p>
                  <span>
                    Today maize traded in the range of Rs.2050 to Rs. 2100 in
                    the Jabalpur, Madhya Pradesh and approx. 25,000 quintals of
                    arrivals with 14-16% moisture content and small size of
                    grain compared to last year. Whereas quality is reported to
                    be good and price are likely to remain rangebound in
                    upcoming days.
                  </span>
                </p>
              </p>
              <a
                class="mt-4 inline-flex items-center text-base md:text-lg text-[#4C893B] hover:text-[#244b19] font-semibold"
                href="/content/news/7815a824-821d-4aa9-924d-5959428b06b1"
              >
                <span>Read Post</span>
              </a>
            </div>
            <div class="w-full px-4 mb-4 block">
              <p class="py-2 w-fit text-base text-[#4C893B] font-medium">
                Oct 31, 2023 | 05:50 pm
              </p>
              <a
                class="inline-block mb-4 text-2xl leading-tight text-gray-700 hover:text-gray-900 font-bold hover:underline"
                href="/content/news/c397becd-a45a-4349-b38e-a5c6a3a7f8f7"
              >
                Tur expected to improve in coming days
              </a>
              <p class="description text-base md:text-lg text-gray-700 font-normal h-18 line-clamp-3">
                <p>
                  Despite strong fundamental factors, the cash market for tur
                  experienced a slight decline of 1-2% on average. This dip was
                  attributed to a decrease in C&amp;F offers for the Burmese
                  Lemon variety and reduced trading activities due to the
                  festive atmosphere. The C&amp;F offers dropped by $15,
                  reaching $1445 per metric ton at Indian ports during the
                  reviewed week. It is anticipated that tur prices will remain
                  stable, and there might be an increase of INR 200-300 per
                  quintal due to renewed buying interest. This expected rise is
                  influenced by seasonal demand, existing supply constraints,
                  and limited imports from Mozambique due to the Phyto
                  Certification issue.{" "}
                  <span>
                    Tur traded at INR 12,500 per quintal, down by 0.79% in
                    Gulbarga and traded at 11,600 per quintal, down by 2.52% in
                    Indore. However, it traded flat at INR 12,000 per quintal in
                    Latur.
                  </span>
                </p>
              </p>
              <a
                class="mt-4 inline-flex items-center text-base md:text-lg text-[#4C893B] hover:text-[#244b19] font-semibold"
                href="/content/news/c397becd-a45a-4349-b38e-a5c6a3a7f8f7"
              >
                <span>Read Post</span>
              </a>
            </div>
            <div class="w-full px-4 mb-4 block">
              <p class="py-2 w-fit text-base text-[#4C893B] font-medium">
                Oct 31, 2023 | 05:48 pm
              </p>
              <a
                class="inline-block mb-4 text-2xl leading-tight text-gray-700 hover:text-gray-900 font-bold hover:underline"
                href="/content/news/5c9959fb-dee6-47da-97fa-f14e4bff4434"
              >
                Urad prices improved by 4-5% on average during the reviewed week
              </a>
              <p class="description text-base md:text-lg text-gray-700 font-normal h-18 line-clamp-3">
                <p>
                  <strong>
                    <span>Urad</span>
                  </strong>
                  <span>
                    {" "}
                    prices strengthened by 4-5% on average during the reviewed
                    week. This increase was driven by a significant and sudden
                    rise in C&amp;F offers for both FAQ and SQ varieties,
                    coupled with seasonal demand and a scarcity of high-quality
                    produce. Additionally, the limited imports from Myanmar,
                    resulting from the supply-demand disparity in India for
                    quality crops, further bolstered this bullish momentum.
                    C&amp;F offers for FAQ and SQ varieties surged by $55 for
                    each type, reaching $1140 and $1250 per metric ton
                    respectively, at Indian ports. Looking ahead, superior
                    quality Urad crops are expected to command higher prices due
                    to reduced production and quality-related challenges.
                    Consequently, Urad prices are anticipated to rise by INR
                    100-200 per quintal in the coming days. Urad FAQ traded at
                    INR 9,550 per quintal, up by 5.52% in Mumbai and at INR
                    9,700 per quintal, up by 4.30% in Delhi.
                  </span>
                </p>
              </p>
              <a
                class="mt-4 inline-flex items-center text-base md:text-lg text-[#4C893B] hover:text-[#244b19] font-semibold"
                href="/content/news/5c9959fb-dee6-47da-97fa-f14e4bff4434"
              >
                <span>Read Post</span>
              </a>
            </div>
            <div class="w-full px-4 mb-4 block">
              <p class="py-2 w-fit text-base text-[#4C893B] font-medium">
                Oct 31, 2023 | 05:26 pm
              </p>
              <a
                class="inline-block mb-4 text-2xl leading-tight text-gray-700 hover:text-gray-900 font-bold hover:underline"
                href="/content/news/562ee7d5-b7ac-409e-9875-e4afbe62aa19"
              >
                Ukraine's Grain exports reached 8.72 MMT as of 27th October 2023
              </a>
              <p class="description text-base md:text-lg text-gray-700 font-normal h-18 line-clamp-3">
                <p>
                  Ukraine’s 2023-24 grain exports have fallen to 8.72Mt,
                  compared to 12.34Mt over the same period last year, including
                  4.4Mt wheat (4.7Mt previous), 3.5Mt corn (6.6Mt) and 669kt
                  barley (1.05Mt) as of 27th Oct 2023. The alternative Black Sea
                  export corridor will continue to function despite all threats,
                  Ukraine President Zelenskiy said on Friday. Despite reports of
                  disruptions, the Infrastructure Ministry said on Friday that
                  the lane was operating. Ship-tracking data showed several
                  vessels heading out from Odesa ports and some moving inbound.
                </p>
              </p>

              <p class="py-2 w-fit text-base text-[#4C893B] font-medium">
                Oct 31, 2023 | 01:07 pm
              </p>
              <a
                class="inline-block mb-4 text-2xl leading-tight text-gray-700 hover:text-gray-900 font-bold hover:underline"
                href="/content/news/d3162e31-ec2b-4131-9c3a-f851f81d1714"
              >
                Paddy Holds Significance role in Chhattisgarh for the 2023
                Assembly Elections
              </a>
              <p class="description text-base md:text-lg text-gray-700 font-normal h-18 line-clamp-3">
                <p>
                  <span>
                    During the 2022-23 agricultural season, farmers received
                    price of Rs 2,640 per quintal for common grade paddy and Rs
                    2,660 for grade ‘A’ paddy. This payment encompassed the
                    central Minimum Support Price (MSP) range of Rs. 2,040-2,060
                    and an additional bonus of Rs 600 provided by the state
                    government. Approximately 10.75 million metric tons of paddy
                    were procured from 23.4 lakh farmers in the previous
                    marketing year. The ruling political party's leader has
                    promised to increase the purchase price of paddy to Rs 3,600
                    per quintal, alongside promises of a loan waiver and a fifty
                    percent reduction in electricity bills for agricultural
                    labor if the party secures victory in the upcoming state
                    election.
                  </span>
                </p>
              </p>
              <a
                class="mt-4 inline-flex items-center text-base md:text-lg text-[#4C893B] hover:text-[#244b19] font-semibold"
                href="/content/news/d3162e31-ec2b-4131-9c3a-f851f81d1714"
              >
                <span>Read Post</span>
              </a>
            </div>
            <div class="hidden">
              <p class="py-2 w-fit text-base text-[#4C893B] font-medium">
                Oct 31, 2023 | 12:17 pm
              </p>
              <a
                class="inline-block mb-4 text-2xl leading-tight text-gray-700 hover:text-gray-900 font-bold hover:underline"
                href="/content/news/dea8bf85-0b7d-4688-b36c-8ee491e41111"
              >
                Soybean Planting in Brazil for 2023/24 Grows to 40%, but Lags
                Behind Last Year's Pace by 6%
              </a>
              <p class="description text-base md:text-lg text-gray-700 font-normal h-18 line-clamp-3">
                <p>
                  {" "}
                  According to a statement from AgRural, by last Thursday, the
                  soybean planting for the 2023/24 season in Brazil had reached
                  40% of the projected area. This represents a 10-percentage
                  point increase from the previous week. However, it's important
                  to note that this year's planting progress is still behind
                  compared to the same period last year when 46% of the planting
                  had already been completed.
                </p>
                <p>
                  {" "}
                  The progress of fieldwork in Brazil's leading grain-producing
                  state, Mato Grosso, has slowed down due to dry weather in
                  certain regions, which has impacted the overall pace of
                  planting. Meanwhile, in other states, more favorable rainfall
                  has been recorded.
                </p>
              </p>
              <a
                class="mt-4 inline-flex items-center text-base md:text-lg text-[#4C893B] hover:text-[#244b19] font-semibold"
                href="/content/news/dea8bf85-0b7d-4688-b36c-8ee491e41111"
              >
                <span>Read Post</span>
              </a>
            </div>
            <div class="hidden">
              <p class="py-2 w-fit text-base text-[#4C893B] font-medium">
                Oct 31, 2023 | 11:56 am
              </p>
              <a
                class="inline-block mb-4 text-2xl leading-tight text-gray-700 hover:text-gray-900 font-bold hover:underline"
                href="/content/news/efa8127d-da59-4bb4-98dd-0fd2f79ad318"
              >
                US Wheat condition as per USDA{" "}
              </a>
              <p class="description text-base md:text-lg text-gray-700 font-normal h-18 line-clamp-3">
                <p>
                  As per a weekly report by USDA around 84% of Winter Wheat
                  sowing in the US has already been completed as of 29 October
                  2023 which is down as compared to 86% during the previous
                  year. Out of the total, around 64% of the crop has emerged and
                  82% is in fair to excellent condition which is up compared to
                  65% during the previous year.
                </p>
              </p>
              <a
                class="mt-4 inline-flex items-center text-base md:text-lg text-[#4C893B] hover:text-[#244b19] font-semibold"
                href="/content/news/efa8127d-da59-4bb4-98dd-0fd2f79ad318"
              >
                <span>Read Post</span>
              </a>
            </div>
            <div class="hidden">
              <p class="py-2 w-fit text-base text-[#4C893B] font-medium">
                Oct 30, 2023 | 05:56 pm
              </p>
              <a
                class="inline-block mb-4 text-2xl leading-tight text-gray-700 hover:text-gray-900 font-bold hover:underline"
                href="/content/news/1bedcbff-8937-4fa6-83ad-9a1b2b4a34eb"
              >
                {" "}
                Saskatchewan: Good Quality harvest at the cost of lower yield{" "}
              </a>
              <p class="description text-base md:text-lg text-gray-700 font-normal h-18 line-clamp-3">
                <p>
                  As harvest in Saskatchewan are reach up to 98% of completion,
                  All crops are emerging to hold above the 10-year average for
                  quality but the yield of most of the crops emerged to be below
                  the 10-year average with an exception for Winter Wheat and
                  hard-red spring Wheat. The yield of Peas are estimated to be
                  around 840 kg per acre. Mustard is estimated to yield 280 Kg
                  per acre, lentils 490 Kg per acre and Chickpeas 385 Kg per
                  acre.{" "}
                </p>
              </p>
              <a
                class="mt-4 inline-flex items-center text-base md:text-lg text-[#4C893B] hover:text-[#244b19] font-semibold"
                href="/content/news/1bedcbff-8937-4fa6-83ad-9a1b2b4a34eb"
              >
                <span>Read Post</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurMission;
