import React from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Summary = () => {
  return (
    <div>
        <Header/>
      <div className="bg-white pt-16 sm:pb-16 sm:pt-20 lg:pb-20 lg:pt-24">
        <div className="container mx-auto mt-2 px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="">
              <h2 className="text-3xl font-bold !leading-snug text-gray-900 sm:text-4xl">
                Your{" "}
                <span className="border-b-8 border-yellow-300">billing</span>{" "}
                information
              </h2>
            </div>{" "}
            <div className="mt-8 grid grid-cols-1 gap-y-10 lg:grid-cols-10 lg:items-start lg:gap-x-12 xl:grid-cols-10">
              <div className="border-t border-gray-200 pt-6 lg:col-span-6">
                <div className="flow-root">
                  <div className="-my-7 divide-y divide-gray-200">
                    <div className="py-7">
                      <h2 className="text-base font-bold text-gray-900">
                        Contact Information
                      </h2>{" "}
                      <div className="mt-6">
                        <label
                          for="emailInput"
                          className="text-sm font-medium text-gray-600"
                        >
                          Email address
                        </label>{" "}
                        <div className="mt-2">
                          <input
                            type="email"
                            id="emailInput"
                            name="emailInput"
                            placeholder=""
                            disabled=""
                            className="block w-full cursor-not-allowed rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900"
                          />
                        </div>
                      </div>
                    </div>{" "}
                    <div className="py-7">
                      <h2 className="text-base font-bold text-gray-900">
                        Billing Information
                      </h2>{" "}
                      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                        <div>
                          <label
                            for="firstNameInput"
                            className="text-sm font-medium text-gray-600"
                          >
                            First name
                          </label>{" "}
                          <div className="mt-2">
                            <input
                              type="text"
                              id="firstNameInput"
                              name="firstNameInput"
                              placeholder=""
                              className="block w-full rounded-md border bg-white px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900 border-gray-300"
                            />{" "}
                          </div>
                        </div>{" "}
                        <div>
                          <label
                            for="lastNameInput"
                            className="text-sm font-medium text-gray-600"
                          >
                            Last name
                          </label>{" "}
                          <div className="mt-2">
                            <input
                              type="text"
                              id="lastNameInput"
                              name="lastNameInput"
                              placeholder=""
                              className="block w-full rounded-md border bg-white px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900 border-gray-300"
                            />{" "}
                          </div>
                        </div>{" "}
                        <div>
                          <label
                            for="phoneInput"
                            className="text-sm font-medium text-gray-600"
                          >
                            Phone number
                          </label>{" "}
                          <div className="mt-2">
                            <div className="mt-2">
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
                            </div>{" "}
                          </div>
                        </div>{" "}
                        <div className="sm:col-span-2">
                          <label
                            for="address1Input"
                            className="text-sm font-medium text-gray-600"
                          >
                            Address line 1
                          </label>{" "}
                          <div className="mt-2">
                            <input
                              type="text"
                              id="address1Input"
                              name="address1Input"
                              placeholder=""
                              className="block w-full rounded-md border bg-white px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900 border-gray-300"
                            />{" "}
                          </div>
                        </div>{" "}
                        <div className="sm:col-span-2">
                          <label
                            for="address2Input"
                            className="text-sm font-medium text-gray-600"
                          >
                            Address line 2
                          </label>{" "}
                          <div className="mt-2">
                            <input
                              type="text"
                              id="address2Input"
                              name="address2Input"
                              placeholder=""
                              className="block w-full rounded-md border bg-white px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900 border-red-600"
                            />{" "}
                            <p className="error text-xs text-red-600">
                              This field is required
                            </p>
                          </div>
                        </div>{" "}
                        <div>
                          <label
                            for="countryInput"
                            className="text-sm font-medium text-gray-600"
                          >
                            Country
                          </label>{" "}
                          <div className="mt-2">
                            <select
                              id="countryInput"
                              name="countryInput"
                              className="block w-full rounded-md border border-gray-300 bg-white py-3 pl-4 pr-10 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900"
                            >
                              <option value="001b78b6-8ee2-4fba-99e8-c1c60b347b0d">
                                Cambodia
                              </option>
                              <option value="01e92e6b-4c18-466b-be30-f4a85be353ae">
                                Ireland
                              </option>
                              <option value="03fc3950-5d1e-465c-896f-fc2b918143b2">
                                Nepal
                              </option>
                              <option value="0472beee-8223-4ca2-aa05-3ee8263f2304">
                                Tanzania
                              </option>
                              <option value="052a7fb8-dd21-4280-9993-18704fc35f68">
                                Haiti
                              </option>
                              <option value="0563250a-e9f1-45cd-8c9c-6a7f120c6149">
                                Virgin Islands (British)
                              </option>
                              <option value="071a6212-58e7-47ce-a3b1-1b76850b8806">
                                Uganda
                              </option>
                              <option value="07d54079-e9bd-4aff-9d05-c321e2ef99f4">
                                Jersey
                              </option>
                              <option value="080c8349-bd18-4062-9c0d-c167eab88181">
                                Egypt
                              </option>
                              <option value="0851c2e7-12a6-4b8b-b218-b8e10ba907c1">
                                Bangladesh
                              </option>
                              <option value="08c70e1b-4c71-43d8-b723-48ce70afe795">
                                Syria
                              </option>
                              <option value="0de12626-acb7-4c8d-9659-2c3d93aee1eb">
                                Vanuatu
                              </option>
                              <option value="0eb70173-c50e-44c8-be5d-26e83037df50">
                                Gibraltar
                              </option>
                              <option value="0ed264ef-1732-4bb0-af18-cc68a1fc82e7">
                                Costa Rica
                              </option>
                              <option value="0ef0dd2b-8070-48b7-b8d9-f883c1c2f250">
                                Zambia
                              </option>
                              <option value="0f3ec3f3-626f-4767-a88c-b5a5b3718764">
                                Guam
                              </option>
                              <option value="0f9024ea-d335-464f-80c8-496099fc9d55">
                                Cameroon
                              </option>
                              <option value="10cb8f92-2d6a-42ea-b559-f6fadd3796ae">
                                Cayman Islands
                              </option>
                              <option value="14fe5b9c-6a00-4064-9d2a-24f5b01ec7cc">
                                Argentina
                              </option>
                              <option value="1548a077-4a23-4877-a1d8-dbc5afd17c8d">
                                South Korea
                              </option>
                              <option value="15a49be2-bf3d-4060-abe3-33bc86f6dedf">
                                United States
                              </option>
                              <option value="17225155-26fb-45ef-837d-beaf1505b8da">
                                Antigua And Barbuda
                              </option>
                              <option value="182711f1-b213-420e-9e73-203062b96827">
                                Malawi
                              </option>
                              <option value="18c68a6c-4a45-4134-98b8-fff97b5a38e6">
                                Nicaragua
                              </option>
                              <option value="1a886d9f-ba52-4f6b-9eff-3885a4dac86b">
                                Benin
                              </option>
                              <option value="1d6ca103-38c4-49ff-8f51-6f1b0e777874">
                                Western Sahara
                              </option>
                              <option value="20453fea-cf0d-422a-a838-48b9ec647bcb">
                                Maldives
                              </option>
                              <option value="20efb943-d527-430d-b488-bd205cbef763">
                                Lithuania
                              </option>
                              <option value="2133d260-7501-42a7-9e5b-270cbaf8e253">
                                Guernsey and Alderney
                              </option>
                              <option value="21ac2f57-aa74-4343-9e73-551e02b5f2a5">
                                South Sudan
                              </option>
                              <option value="22de47c8-12b9-4717-85fa-24132587aefe">
                                Qatar
                              </option>
                              <option value="257b22fb-bdb0-4606-a764-abeec94d8905">
                                Turkey
                              </option>
                              <option value="2791a7ff-e746-4070-8295-caddb03c7a80">
                                Sweden
                              </option>
                              <option value="2854416f-11e7-4733-9d94-053844d63659">
                                Svalbard And Jan Mayen Islands
                              </option>
                              <option value="2894867e-b5b5-4db7-a8e6-3af8e76fd8fe">
                                Northern Mariana Islands
                              </option>
                              <option value="28a2c058-9bee-4107-81e1-d61726060f09">
                                Bolivia
                              </option>
                              <option value="2905d973-0b9e-4f2a-9780-725f84901c66">
                                Aland Islands
                              </option>
                              <option value="2afd7b1f-bd9c-4e4e-98ab-6238f9cccf80">
                                Kosovo
                              </option>
                              <option value="2cf14acc-4fd7-4a9d-8ffe-d877c8639a74">
                                Greenland
                              </option>
                              <option value="2dcc9629-bf65-4189-b208-ab36e974035c">
                                Pakistan
                              </option>
                              <option value="2e179b34-8aa2-4786-bc26-d811f8ece457">
                                Greece
                              </option>
                              <option value="2ef85e53-41fd-4f45-866e-eb7a0258495e">
                                Oman
                              </option>
                              <option value="30269ac5-ba46-4ed5-8a0b-821c432853c4">
                                Mayotte
                              </option>
                              <option value="30a90e97-e6c8-4854-bfc1-8a0ab5729572">
                                Montenegro
                              </option>
                              <option value="31b5d4d7-d1b5-4d9b-b28e-1fa9cc0e1f35">
                                Curaçao
                              </option>
                              <option value="32f1a039-6e76-4402-92ff-674ff5b06720">
                                Gabon
                              </option>
                              <option value="337fd437-d76f-4fae-8763-16aa5251b5af">
                                Swaziland
                              </option>
                              <option value="33b8c811-586a-48e6-8097-5c38b999b422">
                                Reunion
                              </option>
                              <option value="34fb2234-9d50-4199-958a-6873763ca36d">
                                Brunei
                              </option>
                              <option value="3684fb45-11cf-4412-841b-8399660e649e">
                                Mongolia
                              </option>
                              <option value="381cea51-6479-4ea2-8ac3-a83bea5d8176">
                                Slovakia
                              </option>
                              <option value="396f3c9b-db2c-4423-b618-2830d382835d">
                                Liberia
                              </option>
                              <option value="398dd116-e2ac-45e0-89e8-122c35b76fef">
                                Suriname
                              </option>
                              <option value="39e2ca22-dd77-4b00-990d-50d75454bcd8">
                                San Marino
                              </option>
                              <option value="3cfb0f8d-3ab0-4c5d-98a5-eefee1647e5b">
                                Saudi Arabia
                              </option>
                              <option value="3d585532-0b16-4f9b-9b66-659b7a1de86c">
                                Luxembourg
                              </option>
                              <option value="3de4faa1-0451-4335-b542-41ae08378dcb">
                                Bosnia and Herzegovina
                              </option>
                              <option value="3fb5cc92-f8b5-4a6b-91ea-233ee6816ccd">
                                Heard Island and McDonald Islands
                              </option>
                              <option value="4054a697-f7ab-4bfd-bb43-1dc1d6cad07a">
                                Central African Republic
                              </option>
                              <option value="41a7d39c-b10a-4c44-8334-d9394516a42d">
                                Moldova
                              </option>
                              <option value="4201147f-241c-4ccf-be1b-0ba75d959301">
                                United States Minor Outlying Islands
                              </option>
                              <option value="42b74270-3092-4173-8ac1-d02ad1e47c13">
                                Guatemala
                              </option>
                              <option value="42d9e404-1069-43e8-89f0-009be2eecf49">
                                Cote D'Ivoire (Ivory Coast)
                              </option>
                              <option value="44386d62-2a26-45f9-92ae-3fce66d666ee">
                                Grenada
                              </option>
                              <option value="44734d61-85d1-48ba-8851-c306d9203163">
                                Guadeloupe
                              </option>
                              <option value="455a18b7-8b6c-424c-b8b5-697eceab29de">
                                Honduras
                              </option>
                              <option value="48d62b98-e567-4eaf-9aab-1457bf02fa53">
                                Sri Lanka
                              </option>
                              <option value="4a1891ea-5b5a-4062-a5a0-6479df659abf">
                                Dominican Republic
                              </option>
                              <option value="4a1a2ff6-019d-4564-8107-0a935e2beb92">
                                Nigeria
                              </option>
                              <option value="4b170caf-ef5f-4bb1-9e4d-c0b94b103b35">
                                Uzbekistan
                              </option>
                              <option value="4c6f616b-5562-4ce3-890a-26a2183d175e">
                                Ukraine
                              </option>
                              <option value="4f25b31d-1311-49e5-a261-32a8efb3695a">
                                Saint Kitts And Nevis
                              </option>
                              <option value="50757b52-4282-4c7e-8e80-809ebcbf514d">
                                Lesotho
                              </option>
                              <option value="525a7847-c95d-47f6-805c-1b702a18af00">
                                Sint Maarten (Dutch part)
                              </option>
                              <option value="53210f5b-3dfe-448c-b930-ad8457cd5f90">
                                Aruba
                              </option>
                              <option value="53eeafa7-ab03-4075-862e-38e4b7188631">
                                China
                              </option>
                              <option value="54a23ffe-a1d1-4c3d-a917-09c0eda4de71">
                                Solomon Islands
                              </option>
                              <option value="54b15ca7-8317-4ac0-ad49-cdd8fcc53ee1">
                                Saint Lucia
                              </option>
                              <option value="5532143b-50b0-4b13-bd8d-86671485688e">
                                Mexico
                              </option>
                              <option value="556909f0-3d96-4e42-b784-990cefcf8e24">
                                Paraguay
                              </option>
                              <option value="55f85c27-da7b-4301-8d36-1ec629d2d6e3">
                                Taiwan
                              </option>
                              <option value="56d6711b-eb14-497c-882d-676249f4b383">
                                Japan
                              </option>
                              <option value="585a7e73-d39b-4e40-b3c5-4d2957e48772">
                                Micronesia
                              </option>
                              <option value="5aa1060d-5e7d-4228-a89b-5c0208586888">
                                Eritrea
                              </option>
                              <option value="5bf3f360-b458-4f78-b0f0-4b1751380032">
                                Singapore
                              </option>
                              <option value="5ca74fc5-09fa-4a48-a28e-635706463ce9">
                                Iceland
                              </option>
                              <option value="5cd6a942-51c3-4cff-987c-396805ad203a">
                                Afghanistan
                              </option>
                              <option value="5ce3ef74-0905-4e01-8c0b-9bbdc1e436f4">
                                Turkmenistan
                              </option>
                              <option value="5e96d8e4-2b74-4995-8d10-e722e87c11d7">
                                Bermuda
                              </option>
                              <option value="5ea36c5e-df85-4ca1-b693-0295a7f4bd8a">
                                Switzerland
                              </option>
                              <option value="6293f36b-58d2-4f76-8fe3-a4276b90ad2e">
                                Kuwait
                              </option>
                              <option value="636edd0f-cfd6-40a4-a434-c6ca1c40302c">
                                Saint-Martin (French part)
                              </option>
                              <option value="636fec5a-6bfb-484b-a80f-b4ceeea08b78">
                                Netherlands
                              </option>
                              <option value="6782e019-9a21-4b4d-88e1-01048996e151">
                                Mozambique
                              </option>
                              <option value="6b074331-da90-429a-8f5b-feb119f88f87">
                                New Caledonia
                              </option>
                              <option value="6b5d27fb-129a-4e37-be95-dc6323807e83">
                                East Timor
                              </option>
                              <option value="6d71746c-ba2d-4f10-bd39-049398cd089c">
                                Tokelau
                              </option>
                              <option value="6da0d4e8-6cfa-4941-a3c0-0e7c1ed3ed7b">
                                New Zealand
                              </option>
                              <option value="6df534f4-a4ad-4b1b-ab1d-4bc70b444bf6">
                                Burkina Faso
                              </option>
                              <option value="7105b889-eecd-423d-8f46-df5fd08a40fe">
                                Venezuela
                              </option>
                              <option value="71dc5da0-c4f0-429c-ab16-629f70ea9133">
                                Niue
                              </option>
                              <option value="72750eed-f5b7-4691-8c4f-c7bfa53bbe9c">
                                Congo
                              </option>
                              <option value="736c9d4d-d97d-458b-91f6-c6d89ab81d95">
                                American Samoa
                              </option>
                              <option value="75089a67-96ea-4491-bc38-a0877b077153">
                                Comoros
                              </option>
                              <option value="75965524-e22e-4205-b477-e7a569fbac7f">
                                Panama
                              </option>
                              <option value="768d3125-cf41-492c-b644-e860452b788b">
                                Palestinian Territory Occupied
                              </option>
                              <option value="770546ae-0fb9-41d6-bd27-f115686c4431">
                                Belarus
                              </option>
                              <option value="7719f859-1d0d-4f79-b426-a5334ef78b55">
                                Sierra Leone
                              </option>
                              <option value="77877189-c021-4f60-9e46-08067559bfb8">
                                Norfolk Island
                              </option>
                              <option value="77a95217-cde1-41a8-a1c8-2150b4867c19">
                                Croatia
                              </option>
                              <option value="77dcacb5-aeb5-4035-9032-8312b6abf862">
                                Latvia
                              </option>
                              <option value="78ba6b37-97a6-4583-a19a-f9b11b4a90a1">
                                Namibia
                              </option>
                              <option value="79a4b8ae-17cb-4a0a-8cb6-b6e967cf7ef6">
                                Bahrain
                              </option>
                              <option value="79f62257-b948-4243-bca9-5593c563a12b">
                                Man (Isle of)
                              </option>
                              <option value="7ae469c9-4aad-40fb-bd34-e3492563a023">
                                Chad
                              </option>
                              <option value="7b12ac99-3255-4b38-8f93-c50340d3e7fe">
                                Malaysia
                              </option>
                              <option value="7d7c31dc-dbaa-40b6-bd99-5593197e7463">
                                Vietnam
                              </option>
                              <option value="7e9d4f0c-25b3-4b20-ad09-42f4f3f71eeb">
                                Saint-Barthelemy
                              </option>
                              <option value="7efda188-d67a-40d4-820e-7d32854e9350">
                                Falkland Islands
                              </option>
                              <option value="7efe50de-06aa-4b5b-9ed5-7ecff4a1d974">
                                Saint Helena
                              </option>
                              <option value="80c100d9-2729-4d39-9bd4-740222b211a4">
                                Saint Vincent And The Grenadines
                              </option>
                              <option value="813df43c-ec4f-4a5c-94cf-c93ce8b085b4">
                                Guinea
                              </option>
                              <option value="81d2a371-8eb8-4eb8-ae5d-5cec4fe3a060">
                                Christmas Island
                              </option>
                              <option value="827d7e20-b143-4c9a-a80f-bfa8e7ace27c">
                                Macedonia
                              </option>
                              <option value="82a45858-41c3-4ade-a138-7056fd11998d">
                                British Indian Ocean Territory
                              </option>
                              <option value="83af2c93-7a23-4ebe-9897-257c3dfb2aba">
                                French Southern Territories
                              </option>
                              <option value="847595cf-7bf3-4eb5-ad1e-3a5eea982cac">
                                Togo
                              </option>
                              <option value="8492e208-8c02-4feb-a928-29be074f3eba">
                                Philippines
                              </option>
                              <option value="8598eb2a-3120-483f-af71-015623cb6d63">
                                Rwanda
                              </option>
                              <option value="863693bc-437f-4c22-99ae-f63646cacf27">
                                South Africa
                              </option>
                              <option value="870074be-d7d1-48bd-9315-e687364488d2">
                                Cyprus
                              </option>
                              <option value="885d6bd7-b7f3-4e1b-ba38-049a7e6b0d80">
                                Faroe Islands
                              </option>
                              <option value="8907dfe0-623f-4dff-80fc-9a13dabae088">
                                Belgium
                              </option>
                              <option value="8a8c7106-fe91-4e04-8237-5677838a53d2">
                                Colombia
                              </option>
                              <option value="8a9fb4db-02d0-4ce5-be30-04859b19ce50">
                                Thailand
                              </option>
                              <option value="8ba53886-7311-4944-ad66-11fa7133c3d4">
                                Gambia The
                              </option>
                              <option value="8c49fe68-c9a6-449d-b3e1-68886ff083a1">
                                Equatorial Guinea
                              </option>
                              <option value="8c9e56ce-4cb9-4045-bb40-513b1ed212fc">
                                Mauritania
                              </option>
                              <option value="8d8bb3ca-1008-4f7f-ab1e-1ada25d90770">
                                Puerto Rico
                              </option>
                              <option value="8d9c5f3d-2801-4f6c-8b0f-1fc6a638d209">
                                Kiribati
                              </option>
                              <option value="8eae0160-43b4-42d2-8c79-443b261a24b5">
                                French Polynesia
                              </option>
                              <option value="9107ed75-c1a0-44a7-8ba1-49e7be4e23e8">
                                Uruguay
                              </option>
                              <option value="91113e45-0e09-43f3-87ba-3224e15ba1bd">
                                United Arab Emirates
                              </option>
                              <option value="918d1cb5-33eb-48dd-b32e-bca91f718d3e">
                                Malta
                              </option>
                              <option value="91d2454c-32b6-45bc-8a83-7eec64f9b8de">
                                The Bahamas
                              </option>
                              <option value="936ff107-40ca-453a-a1a9-edce2b75a557">
                                Brazil
                              </option>
                              <option value="93721cc6-a155-4cf1-806f-f3c1a0fea6d0">
                                Norway
                              </option>
                              <option value="940342b4-93de-4994-b175-fb96ee4cedc2">
                                Ethiopia
                              </option>
                              <option value="94fbbd0e-7e11-45a8-a89f-bb967a3a5736">
                                Vatican City State (Holy See)
                              </option>
                              <option value="95748089-0abb-438a-9eb9-a705e1416cd2">
                                Portugal
                              </option>
                              <option value="9668cbeb-ae54-444c-84ba-7ca964410236">
                                Georgia
                              </option>
                              <option value="96a23bff-36da-47bb-9a71-23ac029775fb">
                                Bulgaria
                              </option>
                              <option value="99801752-bd0d-46ce-b58c-9f4016a6618b">
                                French Guiana
                              </option>
                              <option value="99ce7e3b-07a1-4ed7-94b5-fdc1cd080870">
                                Madagascar
                              </option>
                              <option value="9a5df4df-c13d-4dec-9956-2aaa43961a04">
                                Chile
                              </option>
                              <option value="9a94cb3d-bcc3-4ab7-9a55-dc348534c3eb">
                                Barbados
                              </option>
                              <option value="9c359755-1577-4570-9427-66dde13fe69b">
                                Estonia
                              </option>
                              <option value="9c38f6cd-566b-40d6-8b59-ad3db00a2361">
                                Antarctica
                              </option>
                              <option value="9ee647eb-fc39-4460-93e5-895512897fb5">
                                Turks And Caicos Islands
                              </option>
                              <option value="9ef8c97e-3a13-4f9a-91f6-14775863e165">
                                Cook Islands
                              </option>
                              <option value="9f16c6b6-c797-4fe4-8d34-985ee08a703e">
                                Ghana
                              </option>
                              <option value="9f206e3c-f3d9-4338-a672-e1d8259c1e7f">
                                Mauritius
                              </option>
                              <option value="9f69cbe5-aa72-4d82-b627-d2e1c041ed2a">
                                Russia
                              </option>
                              <option value="9f7ed771-56a2-4efe-82ff-385b877d5c54">
                                Indonesia
                              </option>
                              <option value="a0ce77c7-3fb8-4dbc-a512-7f6c5190a775">
                                Fiji Islands
                              </option>
                              <option value="a0e2a397-9efb-4742-b303-66e187ca4e42">
                                Belize
                              </option>
                              <option value="a14c6d5b-8bf4-4ba8-8f9b-094c49539656">
                                Libya
                              </option>
                              <option value="a31a032d-0747-4977-9bc5-7cf13057b2ed">
                                Jamaica
                              </option>
                              <option value="a38abb01-6742-4ce0-8406-5dae5d0f6c8e">
                                Nauru
                              </option>
                              <option value="a5031bf8-8e8a-4b20-be1b-4d3427ccfa3a">
                                Palau
                              </option>
                              <option value="a55f6a3b-8bc1-4ca1-bcd2-60223f2aca7d">
                                Samoa
                              </option>
                              <option value="a6b0f84f-8bd8-4c2d-b8e4-0e948cb358ba">
                                Azerbaijan
                              </option>
                              <option value="ab39af1e-80ab-40ed-ab29-698d7b13390b">
                                Senegal
                              </option>
                              <option value="ab9e2182-b2e4-4b7c-9151-3fea566bd896">
                                Liechtenstein
                              </option>
                              <option value="abc12891-76c4-4aa7-bda5-e17bd69f51ae">
                                Czech Republic
                              </option>
                              <option value="ac1be2ba-c669-4999-b605-edc04f33acca">
                                Sudan
                              </option>
                              <option value="ae070a33-272a-4141-a72b-93caced1a0ce">
                                Mali
                              </option>
                              <option value="ae1f25f4-dc59-4ff4-9d38-6bf426aa2c30">
                                Andorra
                              </option>
                              <option value="b09c0b50-b269-4565-aa6a-39f75fa494b5">
                                Burundi
                              </option>
                              <option value="b14b6dcb-f756-4d6f-903c-1b669d181762">
                                Tuvalu
                              </option>
                              <option value="b21c6d89-1ef0-4346-a42a-626ef6d78cd9">
                                Israel
                              </option>
                              <option value="b2c231f7-b7dd-46c1-811e-128fbe1227d3">
                                Guinea-Bissau
                              </option>
                              <option value="b4c8c679-0efa-4970-a6f5-a61c9576f18b">
                                Bonaire, Sint Eustatius and Saba
                              </option>
                              <option value="b672154e-c9de-4232-be24-279b4f5e7b92">
                                India
                              </option>
                              <option value="b6a9a27d-1150-4563-a55c-b25c5ae0b404">
                                Peru
                              </option>
                              <option value="bc0547f1-5eae-4ce5-9c55-25dc318859d0">
                                France
                              </option>
                              <option value="bd48c7b1-9a9f-4578-83a7-286dc5cf3cb7">
                                Morocco
                              </option>
                              <option value="bebc0989-b14f-4885-b033-01f46e9e4a45">
                                Cuba
                              </option>
                              <option value="bf93c2a2-92de-4890-8ef5-c4b63a2520ca">
                                Macau S.A.R.
                              </option>
                              <option value="c0bf7a2c-01dd-4fbb-b833-c40c072104c7">
                                Iraq
                              </option>
                              <option value="c3ef1981-2e9f-4b36-b1c6-fee6820509bb">
                                Jordan
                              </option>
                              <option value="c5467aae-b11e-4632-baa6-7e37779121d2">
                                Zimbabwe
                              </option>
                              <option value="c62eb9ba-1bfe-4070-ac29-b3a4ffb48887">
                                Pitcairn Island
                              </option>
                              <option value="c700280d-2802-4fde-93de-c8b490f5645c">
                                Slovenia
                              </option>
                              <option value="ca490ec7-816b-41be-813e-a27bab0a5e9e">
                                Saint Pierre and Miquelon
                              </option>
                              <option value="cb725764-9802-4e8f-bf74-f65a5d53167f">
                                Romania
                              </option>
                              <option value="cb9da830-bd36-4ffa-96a4-7f78f0b133e1">
                                Armenia
                              </option>
                              <option value="cc44c8a6-5f9e-4389-aa14-a1facd9ccdef">
                                Austria
                              </option>
                              <option value="ccef791d-0995-4823-82b1-8e219275246a">
                                Botswana
                              </option>
                              <option value="ced4edd7-cdbd-48a9-8aa7-8204df65baab">
                                Marshall Islands
                              </option>
                              <option value="cee379cc-6e1e-492c-ac87-a435252f993d">
                                United Kingdom
                              </option>
                              <option value="cfd0ad33-7706-46bf-94f8-8b5ba5fc6a64">
                                Myanmar
                              </option>
                              <option value="d0157eba-71a2-4faa-9673-660b964d9a91">
                                Algeria
                              </option>
                              <option value="d08b4e97-4a4c-4f46-84be-7942b900216e">
                                Sao Tome and Principe
                              </option>
                              <option value="d1421931-e67e-493c-8a28-8881d9b3b3bf">
                                Seychelles
                              </option>
                              <option value="d1bc7036-c005-47fd-ae96-2a3fdfdde74d">
                                Tunisia
                              </option>
                              <option value="d2712073-a0b0-4fda-868c-a5f9badb1148">
                                Tonga
                              </option>
                              <option value="d77c763b-a5be-41b2-952e-d1ec512e2a36">
                                Guyana
                              </option>
                              <option value="d89177c1-148c-4d07-86ef-c13dd585f1e8">
                                Yemen
                              </option>
                              <option value="d9134bc9-088f-4408-a829-052b0deb2877">
                                Finland
                              </option>
                              <option value="d9da11dd-b3ad-4203-bd25-cb1af3451e00">
                                Djibouti
                              </option>
                              <option value="d9ed9093-5a6d-4e26-b335-346f34d62fdc">
                                Trinidad And Tobago
                              </option>
                              <option value="dc122945-ba0f-4430-9fa9-9936460ea902">
                                Niger
                              </option>
                              <option value="dde62e6c-5998-4806-b197-254194370779">
                                Democratic Republic of the Congo
                              </option>
                              <option value="df6d7cac-9649-45a3-b356-259dac0a423e">
                                Lebanon
                              </option>
                              <option value="df85d2ba-4e2d-4a67-868c-be0868e19c92">
                                El Salvador
                              </option>
                              <option value="e13529dd-88cf-4951-8ea6-45b3160aabec">
                                Hong Kong S.A.R.
                              </option>
                              <option value="e1e52064-cd8c-48ca-9d16-55e75373955a">
                                Australia
                              </option>
                              <option value="e3044087-ce85-41d7-8dbc-e5648bccea28">
                                Somalia
                              </option>
                              <option value="e33e6277-e79b-466e-bffd-0040bfedf886">
                                Serbia
                              </option>
                              <option value="e394a8f7-7c35-4094-bf2f-df7f4552e6bb">
                                Martinique
                              </option>
                              <option value="e40ebae3-d02e-4476-b3f0-26d1c8a8c61a">
                                Iran
                              </option>
                              <option value="e5716256-14c1-4694-a0d9-983e576bf347">
                                North Korea
                              </option>
                              <option value="e7729d80-b77e-489a-9239-e0cda90b00b6">
                                Tajikistan
                              </option>
                              <option value="e86c9c1c-189f-42b1-a450-22d76ed054a4">
                                Laos
                              </option>
                              <option value="e8d1221e-fc81-4206-9367-72da0d2b4655">
                                Germany
                              </option>
                              <option value="e8df584a-1053-43b4-babd-3f0d8a1f0f32">
                                Spain
                              </option>
                              <option value="e94819a6-cb17-48f8-a2d6-dbbedda3639c">
                                Canada
                              </option>
                              <option value="e9e51d6f-9d99-4602-a273-dc590c14e197">
                                Dominica
                              </option>
                              <option value="eb4c7f89-4291-4c2b-89cc-966c21da1570">
                                Hungary
                              </option>
                              <option value="eb526f4c-9738-4150-b431-98abc22e1635">
                                Cocos (Keeling) Islands
                              </option>
                              <option value="ebc30ced-722c-4a38-81b7-3c9894456ae6">
                                Monaco
                              </option>
                              <option value="ec23aaf2-eb0a-49da-9ff9-797d43c71636">
                                Cape Verde
                              </option>
                              <option value="ee217c46-3b66-445b-9f36-62dd1fb8486d">
                                Montserrat
                              </option>
                              <option value="ef14d47c-c9c2-4c5a-8528-94a2a0a7e94c">
                                Angola
                              </option>
                              <option value="ef9b2100-c511-456e-9c44-6c1b9d4c805b">
                                Denmark
                              </option>
                              <option value="efe8430f-b971-4f04-ac86-45202d12c155">
                                South Georgia
                              </option>
                              <option value="f1dee728-b16f-45a8-8569-c75d51f728d7">
                                Virgin Islands (US)
                              </option>
                              <option value="f21d36fe-78da-49fa-a4c6-e87e25ade7bb">
                                Kazakhstan
                              </option>
                              <option value="f27348da-d2b5-475a-9e99-82d9385dd5d0">
                                Bouvet Island
                              </option>
                              <option value="f6a6f0ac-c8c3-4e97-8a9f-9bed7faaa6bd">
                                Bhutan
                              </option>
                              <option value="f6c13226-4e0a-4d81-a2d3-3d40aae6da5f">
                                Italy
                              </option>
                              <option value="f872d664-6940-413f-989c-1de838ca6557">
                                Albania
                              </option>
                              <option value="f89610b7-c50f-4444-a47e-888d23ca3dbb">
                                Kenya
                              </option>
                              <option value="f9835c20-45fd-40d1-ba43-3b4d7eafeb67">
                                Kyrgyzstan
                              </option>
                              <option value="fbeeebe4-7dd4-49a1-99e3-6dff0257849b">
                                Papua new Guinea
                              </option>
                              <option value="fc08c695-d0b1-4b40-b797-2bce3a96667a">
                                Wallis And Futuna Islands
                              </option>
                              <option value="fdabb915-f222-4b37-8268-572928744669">
                                Poland
                              </option>
                              <option value="ffbce6e1-dba7-43de-9078-562b2c20430e">
                                Anguilla
                              </option>
                              <option value="ffcbbff3-4d07-490b-969b-b6fba69f2604">
                                Ecuador
                              </option>
                            </select>
                          </div>
                        </div>{" "}
                        <div>
                          <label
                            for="countryState"
                            className="text-sm font-medium text-gray-600"
                          >
                            State
                          </label>{" "}
                          <div className="mt-2">
                            <select
                              id="countryState"
                              name="countryState"
                              className="block w-full rounded-md border bg-white py-3 pl-4 pr-10 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900 border-gray-300"
                            >
                              <option value="">---</option>
                              <option value="0f98958a-9e97-4c0e-9c08-120095c34074">
                                Ladakh
                              </option>
                              <option value="18d65507-01a5-4878-b543-53bf9560cc80">
                                Bihar
                              </option>
                              <option value="1f1a4639-a4aa-4be1-afe7-7e6c6b6b0931">
                                Jammu and Kashmir
                              </option>
                              <option value="22f4a3f3-e7f8-4dea-a17e-602c2dff7dad">
                                Meghalaya
                              </option>
                              <option value="41220c6c-37fc-4c9d-85a2-69cfac0f0fe9">
                                Andaman and Nicobar Islands
                              </option>
                              <option value="428bfb7f-f750-4e8a-b216-d16fbc81abbe">
                                Rajasthan
                              </option>
                              <option value="5341b36e-07df-46ff-a7b0-8bf84c8be6e7">
                                Andhra Pradesh
                              </option>
                              <option value="5bc4e892-13dc-4b8a-9418-842744db9ab5">
                                Chandigarh
                              </option>
                              <option value="5d14d963-d3e7-46e3-b75f-46ffafcce9ec">
                                Mizoram
                              </option>
                              <option value="5d50497b-d0a7-4690-84b5-24d7730e83c7">
                                Punjab
                              </option>
                              <option value="5e66bb6d-be93-4f49-9919-f2edcf993537">
                                Nagaland
                              </option>
                              <option value="5e6defc8-8074-4651-961f-3c2c14768735">
                                Puducherry
                              </option>
                              <option value="614d2138-5be9-49b0-a07e-ce6ae3568f0a">
                                Lakshadweep
                              </option>
                              <option value="6cc75b46-e175-45dc-80e4-2112bb2e4bea">
                                Gujarat
                              </option>
                              <option value="780502bb-b121-4106-b7b6-8364ca6dc5fd">
                                Tamil Nadu
                              </option>
                              <option value="86827252-5d65-4edf-9436-9c8542610948">
                                Assam
                              </option>
                              <option value="87ef1600-3216-4a54-bea2-5084f1f4416e">
                                Himachal Pradesh
                              </option>
                              <option value="88d2f63d-1b13-4202-9efc-71386b61e30e">
                                Madhya Pradesh
                              </option>
                              <option value="983f8d3c-ce44-4757-b890-cdb52716ffeb">
                                Tripura
                              </option>
                              <option value="9c089faa-0bae-4d15-ba34-e3007e90044f">
                                Telangana
                              </option>
                              <option value="9eb2d361-3fac-4cab-99f2-011db04600c9">
                                Jharkhand
                              </option>
                              <option value="9f3060f8-01eb-4ac5-a753-e0cc5f88d1c9">
                                Odisha
                              </option>
                              <option value="a3f6c5e4-4dde-4318-a4cf-89577c11420f">
                                West Bengal
                              </option>
                              <option value="a47794a5-052a-4a65-9001-93b3266563f8">
                                Uttarakhand
                              </option>
                              <option value="a7c2256d-20b5-4456-982b-690f9a0a8e51">
                                Karnataka
                              </option>
                              <option value="ac877249-70c3-4870-b8ee-4d8d5839182d">
                                Arunachal Pradesh
                              </option>
                              <option value="b1f71228-f158-4d2e-bfe7-1afe332d807d">
                                Kerala
                              </option>
                              <option value="b5abc02a-db33-4489-8534-e86402eb93b7">
                                Sikkim
                              </option>
                              <option value="b61a6b56-2694-4663-b9d7-e178e3cbe1b5">
                                Goa
                              </option>
                              <option value="ba8c760e-cc73-4c52-ad8c-b3575026d58c">
                                Uttar Pradesh
                              </option>
                              <option value="c248e953-7dbf-41ca-b159-810f02874361">
                                Chhattisgarh
                              </option>
                              <option value="d1961ec7-fdf1-4fab-b3e3-89fb1f39cd80">
                                Haryana
                              </option>
                              <option value="e271b7f9-d0e5-4650-b94d-1f49d0ac153f">
                                Manipur
                              </option>
                              <option value="e629d1af-6d49-4abf-afec-9dff78a8befd">
                                Dadra and Nagar Haveli and Daman and Diu
                              </option>
                              <option value="f18a2861-fd62-422b-8e12-70aa215ddcd4">
                                Delhi
                              </option>
                              <option value="fb6a65f2-fb60-4c3f-9d90-5eac35574869">
                                Maharashtra
                              </option>
                            </select>{" "}
                          </div>
                        </div>{" "}
                        <div>
                          <label
                            for="cityInput"
                            className="text-sm font-medium text-gray-600"
                          >
                            City
                          </label>{" "}
                          <div className="mt-2">
                            <select
                              id="cityInput"
                              name="cityInput"
                              className="block w-full rounded-md border bg-white py-3 pl-4 pr-10 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900 border-gray-300"
                            >
                              <option value="">---</option>
                              <option value="00501f0f-6f8a-449b-b639-fa04d36e7e86">
                                Bilsanda
                              </option>
                              <option value="01bad695-b02a-46ca-a1df-30a78c346dbe">
                                Khanpur
                              </option>
                              <option value="026b56c1-d886-4b40-84f6-0ec45529e767">
                                Mubarakpur
                              </option>
                              <option value="02cb305e-6d00-462c-ab41-480fd0a59782">
                                Samthar
                              </option>
                              <option value="02e7720c-f3c5-463d-811c-1df3ddfcbaad">
                                Rasulabad
                              </option>
                              <option value="03640fd8-da00-48f9-8cf8-df07e41685de">
                                Baghpat
                              </option>
                              <option value="03c35541-61a9-4089-9527-8663ece71e72">
                                Jhinjhana
                              </option>
                              <option value="048ad4bc-f805-4bb9-a5a5-3a2d57de8412">
                                Khair
                              </option>
                              <option value="04c343d2-9c2c-4503-ad11-5869fa90a114">
                                Moth
                              </option>
                              <option value="05a1b74b-6621-4ac5-a667-ef30072780e7">
                                Garautha
                              </option>
                              <option value="05f7bb3a-8d36-4a9b-b54a-e825cf09f124">
                                Barsana
                              </option>
                              <option value="06d8f34c-44c4-40be-bcdd-4cf7b8f68a54">
                                Sahibabad
                              </option>
                              <option value="06ffeffd-5fa8-4603-afde-fb1105a86d60">
                                Mau Aimma
                              </option>
                              <option value="071adaa8-099f-43cc-8631-42ceda9dc22a">
                                Bijnor
                              </option>
                              <option value="07399362-9589-4e8d-b592-2c90f5db4a88">
                                Dhanaura
                              </option>
                              <option value="07678ecf-153c-4fba-ab16-366b2784238e">
                                Haldaur
                              </option>
                              <option value="085b050a-8903-42a8-a45a-d0ff6af236e2">
                                Obra
                              </option>
                              <option value="08bc0ffa-2dad-40aa-9ab2-0242f138b024">
                                Khairabad
                              </option>
                              <option value="0a20f2b0-cf80-4be0-a9cc-23f9bb506ffb">
                                Tikri
                              </option>
                              <option value="0a730fca-4267-48ca-bfff-a0a48e6d9b0b">
                                Rasra
                              </option>
                              <option value="0ab697fa-eaf8-425c-8a8f-8897247ef7b0">
                                Kheri
                              </option>
                              <option value="0ae4cbff-6382-40f8-917a-ae0c61f396e0">
                                Parichhatgarh
                              </option>
                              <option value="0b758972-7e8a-4d60-8bfb-6a4c63dba055">
                                Bulandshahr
                              </option>
                              <option value="0b7a82e1-4185-4c13-9b72-63165959b0e7">
                                Katra
                              </option>
                              <option value="0bd95d8c-552c-426b-90bf-9c9d3a5050c4">
                                Bara Banki
                              </option>
                              <option value="0c74132c-078c-446e-976e-7fe251898e7b">
                                Charthawal
                              </option>
                              <option value="0ccbe7a2-1fcc-4d5c-b99e-db6fe819a3e2">
                                Khurja
                              </option>
                              <option value="0db896ae-208c-47d2-ad10-cbe9f953e7ed">
                                Dohrighat
                              </option>
                              <option value="0e24549d-ca0f-4d7c-9c27-8d986e831fba">
                                Janghai
                              </option>
                              <option value="0ecb95f9-675e-4cb4-8b35-209b5b8fd03e">
                                Purmafi
                              </option>
                              <option value="0f44905e-7a31-48db-99b6-d62043bcafa0">
                                Kunda
                              </option>
                              <option value="0f617e7c-4607-494b-924f-1ca54a033e46">
                                Pihani
                              </option>
                              <option value="0f7bf959-80ee-45ef-8274-21547053b12e">
                                Sultanpur
                              </option>
                              <option value="0ff1522b-2332-4156-9b4e-5df8169cd3e5">
                                Atarra
                              </option>
                              <option value="1005631a-c2dc-433f-a7c5-7121dc3592ab">
                                Dewa
                              </option>
                              <option value="1045adb0-c737-46be-ad68-6d4df44263d3">
                                Kithor
                              </option>
                              <option value="10666322-9ea2-4a47-9b3d-f296597b23f4">
                                Rampur
                              </option>
                              <option value="10971fad-879e-4e96-8d4e-680f346a18ee">
                                Jalali
                              </option>
                              <option value="10ab8af1-ef29-4267-80af-9a4b913d8576">
                                Pathakpura
                              </option>
                              <option value="110a2260-7fa2-4bfb-b796-8ad794beed9c">
                                Mehdawal
                              </option>
                              <option value="1162783e-616c-4cfc-a4b2-627ed11637f7">
                                Rajapur
                              </option>
                              <option value="11b9c4b7-8dd9-40a6-8c1c-f93cc4a334b3">
                                Chitrakoot Dham
                              </option>
                              <option value="1257f498-2c87-460e-b05e-a48edf5c98bd">
                                Jiyanpur
                              </option>
                              <option value="1357d9ab-997a-43ae-ace9-87dbd58ccf99">
                                Jais
                              </option>
                              <option value="13ca610a-a46d-40d3-8744-e48cf676615a">
                                Phariha
                              </option>
                              <option value="1468db10-a543-4f14-8659-260268363667">
                                Kausani
                              </option>
                              <option value="1588c7eb-0b09-4b34-ba28-49ab4923a6e1">
                                Najibabad
                              </option>
                              <option value="15c44c29-2fc4-49ff-aa7c-db7bb6fea7dd">
                                Fatehpur Chaurasi
                              </option>
                              <option value="169341fb-9a06-42e5-ad31-11373c39d268">
                                Tilsahri
                              </option>
                              <option value="16b0ceb4-f6b5-484b-aed4-871993ebdbd9">
                                Bisenda Buzurg
                              </option>
                              <option value="1844c6ae-0680-4c69-95f8-19b59f22ddfc">
                                Bidhuna
                              </option>
                              <option value="18a53d79-edf7-47a4-9177-7944a291c045">
                                Ganj Dundawara
                              </option>
                              <option value="18e1a3c7-ea46-4ddb-af9a-0a308b4381e4">
                                Ujhani
                              </option>
                              <option value="190e9b5b-1b40-41e0-b4b7-398baa582a7b">
                                Bewar
                              </option>
                              <option value="1a80df07-64dc-4c27-affa-4528c1e0aaa3">
                                Mathura
                              </option>
                              <option value="1a94afa5-e648-453a-935c-e2994697ac08">
                                Saidpur
                              </option>
                              <option value="1aaa7f48-1e0c-40b5-bcc5-4a50681ae081">
                                Firozabad
                              </option>
                              <option value="1ad250b7-7aba-47b7-be3b-b5a7a8c5e67a">
                                Musafir-Khana
                              </option>
                              <option value="1adcea00-1ad6-4e1f-930f-81810e879abd">
                                Hapur
                              </option>
                              <option value="1b10d994-2b41-496f-afbf-e0de8228116b">
                                Colonelganj
                              </option>
                              <option value="1d72ebfd-da55-429c-a284-26911a6bf7d5">
                                Bilhaur
                              </option>
                              <option value="1d99651f-fa75-4f91-8a1e-756f66049b92">
                                Safipur
                              </option>
                              <option value="1ea8e995-caa8-4e63-bbe8-2103aee479f8">
                                Ranipur
                              </option>
                              <option value="1edced94-ac6c-4b86-8238-93cc82905aa8">
                                Gajraula
                              </option>
                              <option value="1f03313f-39a8-4d88-b8f5-31e19279eb1b">
                                Jalalabad
                              </option>
                              <option value="1f7f05b2-a8e8-4c3e-b2dc-82f36eddc6f9">
                                Kusmara
                              </option>
                              <option value="1f8469a1-5292-43b1-8a17-8b924669c043">
                                Baghra
                              </option>
                              <option value="1f9b412d-239f-4397-b93d-2e61849a682e">
                                Orai
                              </option>
                              <option value="2022c89a-af04-4540-a59d-5a98b8ac707a">
                                Shahpur
                              </option>
                              <option value="207b8b36-fb0a-42d7-b686-5d37dd9dd296">
                                Baheri
                              </option>
                              <option value="20f4c6bf-93de-4616-883c-2f2f5200a538">
                                Milkipur
                              </option>
                              <option value="216d56e8-e1c9-4954-b1f7-378081107f1a">
                                Chakia
                              </option>
                              <option value="217fb346-7944-4459-b47a-af026177ea3f">
                                Mandawar
                              </option>
                              <option value="21f273b5-8121-4680-8783-8be6260c9e23">
                                Pipraich
                              </option>
                              <option value="22aa8b05-e860-4391-8e69-14216a271362">
                                Lalganj
                              </option>
                              <option value="22cf3848-9a69-4e31-9925-bd09851d0e21">
                                Pali
                              </option>
                              <option value="22ff7607-ea92-415e-a293-6bf3d086f7e3">
                                Ambedkar Nagar
                              </option>
                              <option value="2375b9c7-2dc6-4489-856e-31c79ceb3823">
                                Mailani
                              </option>
                              <option value="23871307-5a43-4c2c-8ff7-c8fe716db5ef">
                                Sikandra
                              </option>
                              <option value="23b7f235-5107-4721-adec-57f4bfa188dc">
                                Bansdih
                              </option>
                              <option value="23d26f9b-afcd-4300-8872-af73da0cdba4">
                                Chhata
                              </option>
                              <option value="24395f85-bf62-467f-a6b8-955ee60433d3">
                                Bangarmau
                              </option>
                              <option value="24d6933d-3d73-4284-a1b7-8a05fe1268c8">
                                Etawah
                              </option>
                              <option value="2525fe64-97e3-4ee2-b57c-bf846a8877d2">
                                Un
                              </option>
                              <option value="253a92fe-d533-4f28-bcd7-464dce3ff3f6">
                                Bansgaon
                              </option>
                              <option value="2655cbc7-06a7-4e14-9159-a20bb985aafa">
                                Daranagar
                              </option>
                              <option value="2679b6a2-8ee1-4ca8-918d-ebc74e802b75">
                                Jagdishpur
                              </option>
                              <option value="268d404f-ff3c-4955-bcd7-23603aa72a2c">
                                Newara
                              </option>
                              <option value="26d530ca-513f-4164-9b03-e98844a106aa">
                                Rehar
                              </option>
                              <option value="270baae9-8c4b-40fd-9232-4cac5d99343f">
                                Ahraura
                              </option>
                              <option value="2781deed-34be-49e0-b5da-bb3b910fdcc3">
                                Phaphamau
                              </option>
                              <option value="2838021a-8eae-4a85-957c-d791512fe6fe">
                                Binaur
                              </option>
                              <option value="283c93ff-7157-4afb-b4d1-a7b020183788">
                                Jasrana
                              </option>
                              <option value="28754716-baa7-46ae-9cb8-a41cd7f46abc">
                                Baraut
                              </option>
                              <option value="28920fbf-dde9-4bdc-8c60-aa62c5d78cfd">
                                Faridpur
                              </option>
                              <option value="28a022cd-7e8d-415b-9fd4-99634f14dce6">
                                Kota
                              </option>
                              <option value="28ca4068-d96d-45ae-b271-5f1cecec5e4f">
                                Jhusi
                              </option>
                              <option value="28e95bdd-8cab-4f1f-ba43-f13af5aab831">
                                Mahaban
                              </option>
                              <option value="28e9f129-b0f8-428e-a113-4e92ea8a76d5">
                                Gursarai
                              </option>
                              <option value="2930ceb0-a36a-4074-8897-41bc1c9c2b84">
                                Kushinagar
                              </option>
                              <option value="2adf4e7c-ace7-4a30-9ce2-6d2b9ce7bd13">
                                Bidhnu
                              </option>
                              <option value="2aee17b9-c6dd-4737-86a7-653308df299d">
                                Chhaprauli
                              </option>
                              <option value="2b9188b1-4d45-4f6f-82e8-95076ef33301">
                                Prayagraj (Allahabad)
                              </option>
                              <option value="2be16398-d52c-4309-ac3f-d9630ea241ec">
                                Mungra Badshahpur
                              </option>
                              <option value="2c85417c-d883-41f6-84cb-97e15ba6b320">
                                Bakewar
                              </option>
                              <option value="2c90c967-8bec-404a-b02f-a802be800c61">
                                Jansath
                              </option>
                              <option value="2dae629c-9f86-4e8d-bd1a-38c45009fa3d">
                                Jhinjhak
                              </option>
                              <option value="2dedbad2-b1e6-4424-92bf-7ad894bc47bc">
                                Kanth
                              </option>
                              <option value="2e91a732-573b-49b6-b792-cd0e100a6701">
                                Hastinapur
                              </option>
                              <option value="2eda6968-2895-419d-a031-120028cd1116">
                                Ganj Dundwara
                              </option>
                              <option value="2f8780ae-fa9c-4ed0-80d8-0d80207a3275">
                                Suar
                              </option>
                              <option value="2fd4b84b-020c-4a7e-aa2f-b44a6cc093d6">
                                Khatauli
                              </option>
                              <option value="2fde9246-ffbc-447b-a74f-1e62d5ba06bf">
                                Bilgram
                              </option>
                              <option value="302cc8de-8d09-4097-a51c-de49ef02929c">
                                Babina
                              </option>
                              <option value="30cc51a5-ff3e-4b01-bb2b-af556a082ba4">
                                Kalpi
                              </option>
                              <option value="30f777bb-ca90-4547-8876-265ab716dbee">
                                Surianwan
                              </option>
                              <option value="30ff17fa-bb6d-48b1-8fc5-d478ef2b658d">
                                Shahjahanpur
                              </option>
                              <option value="3134f619-d2fd-4d52-b291-35c4d7ac61f9">
                                Pawayan
                              </option>
                              <option value="31a2606c-e0ff-4e27-998b-9feeab979f29">
                                Talbahat
                              </option>
                              <option value="31a54307-34d6-4161-93b6-f6c1d260d874">
                                Divrasai
                              </option>
                              <option value="323b633b-1a84-4b7d-a515-0e337e273264">
                                Deoria
                              </option>
                              <option value="32ee7d06-aa80-454d-a546-10bd132be9e3">
                                Oran
                              </option>
                              <option value="32eef9e2-f020-408d-8415-53548e6b945f">
                                Tulsipur
                              </option>
                              <option value="337b4dda-bd82-4f33-bfca-e98760689b54">
                                Muradabad
                              </option>
                              <option value="33fadd1d-431d-444c-b5de-317edea6f9cc">
                                Kaptanganj
                              </option>
                              <option value="346f7046-fc34-496c-b0e6-5f8dabaf9b47">
                                Pilibhit
                              </option>
                              <option value="34722b78-64fe-4cce-ae2f-5a417f3227eb">
                                Gonda (Aligarh)
                              </option>
                              <option value="3531b56f-1e42-4276-a3ce-7a0308c5b281">
                                Satrikh
                              </option>
                              <option value="35b3a1be-8d90-410f-9799-d2ed9f496671">
                                Aligarh
                              </option>
                              <option value="37589ce4-4544-4f2d-8877-b8ca46ca3905">
                                Tori Fatehpur
                              </option>
                              <option value="37ac3d62-ab94-49b1-be50-400565f2285c">
                                Bareilly
                              </option>
                              <option value="37d7fccd-d1bb-40b3-9d9b-1d713c2c3a5f">
                                Kudarkot
                              </option>
                              <option value="3876e96c-f394-421e-a7a5-ef326ad5d6ab">
                                Bilariaganj
                              </option>
                              <option value="388b1ff3-12db-4ad7-a655-dd7720b1221d">
                                Kairana
                              </option>
                              <option value="389d1908-fc2f-4d5c-9f96-713e5b9dcc9c">
                                Indergarh
                              </option>
                              <option value="38f13daa-9b4b-4d8d-b04e-62e5e3b43b56">
                                Niwari
                              </option>
                              <option value="39246edc-8579-465c-813d-9b3419f3a3e7">
                                Shamli
                              </option>
                              <option value="3941bcd2-f083-4716-9cc7-6690b318d052">
                                Itaunja
                              </option>
                              <option value="3948ab0b-8066-4175-b596-a898cb7a01c7">
                                Kannauj
                              </option>
                              <option value="39cd322c-2c05-4c6c-9935-f4eceb180e20">
                                Muradnagar
                              </option>
                              <option value="3a2aa192-1524-4d26-93da-830ff9651792">
                                Maniar
                              </option>
                              <option value="3a5fb838-a57c-46c2-a708-988236d13e00">
                                Rampura
                              </option>
                              <option value="3a6778e7-c58d-4738-8f2f-425197dd6314">
                                Kulpahar
                              </option>
                              <option value="3aa50a38-cb63-409b-a9ef-103a64b09cc6">
                                Kaushambi District
                              </option>
                              <option value="3c112da3-b1b9-4521-bd7c-37a1a1086c23">
                                Dadri
                              </option>
                              <option value="3ca04d6d-2ced-4c96-abe2-0441a58558ac">
                                Behat
                              </option>
                              <option value="3d22dae1-55ce-456f-98fa-4ef5b181d3e7">
                                Shahabad
                              </option>
                              <option value="3d28d685-562b-4037-80e1-1e037f5720de">
                                Machhlishahr
                              </option>
                              <option value="3d69dd3f-3982-401c-9711-216952f75c14">
                                Kasganj
                              </option>
                              <option value="3da5574e-e445-4b41-b2f5-d42ebe64536d">
                                Misrikh
                              </option>
                              <option value="3df12a12-aec2-46a4-80eb-a3244a633297">
                                Kundarki
                              </option>
                              <option value="40be3bf4-0a1d-417b-a70b-729e8b096212">
                                Bah
                              </option>
                              <option value="4136c5b3-7e3c-4e82-a9c4-f74e9a123705">
                                Shikarpur
                              </option>
                              <option value="41719bb9-da40-43ac-8942-b5e7cb54faa3">
                                Sarauli
                              </option>
                              <option value="41eb13c1-4701-437f-afc1-0f91b7a1743c">
                                Soron
                              </option>
                              <option value="426a5232-4797-4af7-9cf5-56d956d9938d">
                                Antu
                              </option>
                              <option value="4270ce34-3c14-4da8-b7b2-070baa3499ca">
                                Bhargain
                              </option>
                              <option value="42b9b242-8d00-42dc-96eb-8b569f3b78f0">
                                Pichhaura
                              </option>
                              <option value="43a1e437-60f1-4dad-8fe5-df750baac352">
                                Atraulia
                              </option>
                              <option value="440e4427-d9f1-48f8-ba30-dc9bf70427df">
                                Pilkhua
                              </option>
                              <option value="4446d943-721d-4e6a-9f29-b0c6fc030d94">
                                Baldeo
                              </option>
                              <option value="448cda96-90ba-4d16-81dd-784d08185b22">
                                Akola
                              </option>
                              <option value="44b08ae0-b731-4d5f-bcca-c672390a9f55">
                                Farrukhabad
                              </option>
                              <option value="450ab94e-03b2-49b7-84de-2953237821ab">
                                Parshadepur
                              </option>
                              <option value="45c9ec40-f04e-4489-a3ed-207516bc7fda">
                                Seohara
                              </option>
                              <option value="45cbefc0-8b0d-4556-a8c1-6ce281bebda1">
                                Rabupura
                              </option>
                              <option value="46464610-a92a-4d22-a5ae-457f92b44221">
                                Harchandpur
                              </option>
                              <option value="467d843c-be71-4bec-b613-7fd25fd764f5">
                                Kamalganj
                              </option>
                              <option value="470308e9-6d24-4e88-bbc7-9833790f6260">
                                Kabrai
                              </option>
                              <option value="48723bb7-1243-4415-93e9-b482315df998">
                                Shibnagar
                              </option>
                              <option value="4910adcd-8095-487c-9df7-6114029dcbb1">
                                Zafarabad
                              </option>
                              <option value="49964863-0367-49a7-a841-552c304586a1">
                                Mehndawal
                              </option>
                              <option value="49d5cf02-12a9-49b7-a424-505d05603f27">
                                Deoband
                              </option>
                              <option value="4a020a41-9b65-4a26-8b3e-15cd32f84e56">
                                Nichlaul
                              </option>
                              <option value="4a6d2632-cbfe-45b9-b7a9-deff6422db30">
                                Naurangpur
                              </option>
                              <option value="4a942059-7ad2-498b-81c9-2e627548aa68">
                                Chhibramau
                              </option>
                              <option value="4b053d0c-5d0b-4c17-9000-bad3424c95e7">
                                Kopaganj
                              </option>
                              <option value="4b2bfc57-bcb2-4364-add7-62d950a3c7fc">
                                Lucknow
                              </option>
                              <option value="4ba161de-5d1d-4a1b-a41b-dcef0048d665">
                                Mehnagar
                              </option>
                              <option value="4bcdb5a9-6028-4ad1-83cc-c06fd26ced0b">
                                Karhal
                              </option>
                              <option value="4bd97026-ff83-4406-bd14-cbac279bebe3">
                                Bhaupur
                              </option>
                              <option value="4c74f9ad-a7a7-4541-8ee7-cb25bbe3e1d1">
                                Gautam Buddha Nagar
                              </option>
                              <option value="4cd53d89-67e6-4035-a19b-1850918f9c20">
                                Lakhimpur
                              </option>
                              <option value="4d1d2361-8b67-45de-bee7-824446185a94">
                                Bajna
                              </option>
                              <option value="4d8f286a-4f79-4667-b172-421fa79492df">
                                Amroha
                              </option>
                              <option value="4db3017d-5367-4376-ad83-5f1d12ce0dc9">
                                Bisauli
                              </option>
                              <option value="4decc6a7-f22d-4a64-b41c-c6e108367505">
                                Sector
                              </option>
                              <option value="4e219e84-dd01-432e-9b41-bfa6d40da04e">
                                Talgram
                              </option>
                              <option value="4e4409e6-08fb-4c9f-9760-68842c619f43">
                                Bhagwantnagar
                              </option>
                              <option value="4e6b2bd8-d74d-4217-8fb7-96db736cca8f">
                                Dostpur
                              </option>
                              <option value="4e9a2006-4ee3-4d86-a7db-522744d98649">
                                Sarai Mir
                              </option>
                              <option value="4f328d97-b219-4070-985a-71d0f81015ce">
                                Beniganj
                              </option>
                              <option value="4fa4d7a7-7056-4446-b79b-1407c7e4b9c6">
                                Mau Aima
                              </option>
                              <option value="51143058-8796-48de-93f8-ed35c8eefdc6">
                                Bahua
                              </option>
                              <option value="5144ed52-c48f-4bee-8637-ea0e5c858aab">
                                Gonda City
                              </option>
                              <option value="51ee5c39-5bf4-4d08-a891-c1624a649b7f">
                                Yusufpur
                              </option>
                              <option value="52fd47d3-67c9-45dc-baac-c7cefd7bda58">
                                Marahra
                              </option>
                              <option value="5378ecd2-7c88-4842-9495-2944c5248501">
                                Phalauda
                              </option>
                              <option value="54288637-15a4-4c33-8d95-2407b6dc6af2">
                                Gahlon
                              </option>
                              <option value="5440db15-8cd9-4063-9e9e-a9b7ac573867">
                                Nawabganj (Barabanki)
                              </option>
                              <option value="54948133-7a1c-4762-ac50-f6688bcec65a">
                                Gunnaur
                              </option>
                              <option value="54b28e80-68da-4e33-b1b3-ec525a3f6301">
                                Sadat
                              </option>
                              <option value="54d8a38a-346a-4b55-9fd4-d6944b78489f">
                                Kadaura
                              </option>
                              <option value="5531562c-56af-47d7-a6ab-22c9babca060">
                                Bilari
                              </option>
                              <option value="557ce7f2-a1cb-40b9-867c-7b58ac39ffc1">
                                Ganj Muradabad
                              </option>
                              <option value="55e94f0f-7cc7-4df2-9ef2-e181f70d5216">
                                Itimadpur
                              </option>
                              <option value="5606d3fc-6377-41eb-a5a6-fc2b73de99c1">
                                Shamsabad
                              </option>
                              <option value="5639d963-a395-4dcc-972e-edf7f2bc0274">
                                Bilaspur
                              </option>
                              <option value="56d63224-ee56-4df9-b692-9fbf9d8e4fc4">
                                Kosi
                              </option>
                              <option value="5714ad48-9cbd-4e23-9c11-005672b4b04e">
                                Nizamabad
                              </option>
                              <option value="573bf481-0b5a-4642-8d5b-7e444c1d3e1b">
                                Mursan
                              </option>
                              <option value="574ebd84-27bc-45e7-8921-e50153267058">
                                Fatehgarh
                              </option>
                              <option value="57b857c3-71dc-4b1f-8ca7-9c0ea56b9708">
                                Derapur
                              </option>
                              <option value="57e92a88-8675-459d-822b-efefff8eb451">
                                Reoti
                              </option>
                              <option value="5801cb4f-f103-4ed5-9888-e4deb02fce56">
                                Shikarpur (Bulandshahr)
                              </option>
                              <option value="5830289c-f140-4ec5-a696-4e818e0d4b43">
                                Azamgarh
                              </option>
                              <option value="583f4a92-f6cc-4741-b083-2fa32dba5814">
                                Jewar
                              </option>
                              <option value="58e037d8-e7c5-4644-97d7-d16d685d0778">
                                Ramnagar
                              </option>
                              <option value="59456466-0db6-4b5d-8946-99db03ee83df">
                                Maudaha
                              </option>
                              <option value="5986b585-0627-4534-8bd4-38c660e54306">
                                Baksar
                              </option>
                              <option value="59c5af9e-972c-4fa4-990c-d747d9d22b60">
                                Kakrala
                              </option>
                              <option value="59f7581c-ca0a-472c-a6c7-2fbace26b6b3">
                                Anandnagar
                              </option>
                              <option value="5a24c306-eee3-48ba-ac98-fb45c2c6bd53">
                                Aidalpur
                              </option>
                              <option value="5a41c128-7304-40a7-a721-e7a4299aa200">
                                Lambhua
                              </option>
                              <option value="5b410c8a-2909-492a-8dae-0d227d3c1a92">
                                Garhi Pukhta
                              </option>
                              <option value="5be22c41-41ae-40fa-91a0-56fddc155954">
                                Banbasa
                              </option>
                              <option value="5c152d51-5a7a-4c8b-90d1-9a06ab70bb4b">
                                Kotra
                              </option>
                              <option value="5ca84a41-d798-4228-affd-330c0b48144a">
                                Gohand
                              </option>
                              <option value="5cb256f4-3c26-4150-b345-b89dedd37d09">
                                Tori-Fatehpur
                              </option>
                              <option value="5e07a9cb-90d5-480c-a314-4af37b0418e9">
                                Hulas
                              </option>
                              <option value="5e9b9f16-25ff-4e79-8e8b-50a839d16ed0">
                                Muzaffarnagar
                              </option>
                              <option value="5ecee649-1410-4dfc-b7ca-533009e56011">
                                Munsyari
                              </option>
                              <option value="5f450726-c481-4b63-83bb-bd79453ed87c">
                                Birpur
                              </option>
                              <option value="5f888d55-30c1-40a5-bf9f-aca25a7b17c5">
                                Bindki
                              </option>
                              <option value="5fcd85ec-6587-4868-bf95-c721b9a2e0c2">
                                Mainpuri
                              </option>
                              <option value="5fd04433-e30e-45f6-b442-e5ae2c5f7af5">
                                Zamania
                              </option>
                              <option value="5fd80a46-78c0-44e6-b416-8d6147886951">
                                Airwa
                              </option>
                              <option value="5fdeb071-3350-4c99-b883-db44312e72a0">
                                Sahawar
                              </option>
                              <option value="5ff89230-8405-402a-a239-60c1ddd31e2a">
                                Khekra
                              </option>
                              <option value="606bdc95-8839-467d-8b0f-ed11d706a78f">
                                Hathras
                              </option>
                              <option value="606dfc1a-1d25-4757-9bcc-29b24ef1a152">
                                Bharwari
                              </option>
                              <option value="610b9c3b-3622-45ed-b3d7-ef7edccb5123">
                                Mawana
                              </option>
                              <option value="613f27a0-c233-4e93-bae2-97875a74ad76">
                                Kurebharsaidkhanpur
                              </option>
                              <option value="6174cb5d-891c-42c1-99cc-00f48db8b0fc">
                                Kundarkhi
                              </option>
                              <option value="61d3ae15-5478-4b39-8a05-de8b389157fb">
                                Gangoh
                              </option>
                              <option value="61fa6e10-f041-438a-8877-eb9709269338">
                                Bharthana
                              </option>
                              <option value="62136fa9-8f8d-4111-81d4-937e8691ab21">
                                Tundla
                              </option>
                              <option value="6270b83c-5f21-4cd9-8d9b-d93398076eda">
                                Bilsi
                              </option>
                              <option value="62877216-b5f3-4cb9-9930-508965b590ae">
                                Ghosi
                              </option>
                              <option value="640447fb-8213-460d-a81a-a5b81182884d">
                                Barokhar
                              </option>
                              <option value="640f6228-11c2-4ed1-bad1-f99c06f87445">
                                Dudhi
                              </option>
                              <option value="64e7a464-84d6-49ea-a7af-576810bec37f">
                                Birdpur
                              </option>
                              <option value="659da052-9f23-4df4-8439-13d000d76725">
                                Unnao
                              </option>
                              <option value="664148c1-ff4a-4d79-accc-8951e8bd645b">
                                Bhongaon
                              </option>
                              <option value="666a05c0-73cb-46c1-9b6f-9ff3faa2529f">
                                Mankapur
                              </option>
                              <option value="66e74b4c-b9e4-4c02-bf05-3497ad504a44">
                                Kagarol
                              </option>
                              <option value="6730e108-dd80-4a08-b210-e7cd9e4f10f5">
                                Kalyanpur
                              </option>
                              <option value="676fef42-6c19-4283-b783-a2e4ed48a2b5">
                                Sikandarabad
                              </option>
                              <option value="684e2aa0-2247-491f-8a0f-8c7683c5a89f">
                                Bahsuma
                              </option>
                              <option value="68811644-7374-4c0f-b0d5-8bc97965add6">
                                Uska
                              </option>
                              <option value="69219628-797f-42d2-9543-f15b28694096">
                                Deogarh
                              </option>
                              <option value="69badf19-057d-47eb-803a-41ba320f2596">
                                Bhinga
                              </option>
                              <option value="69d5dd5e-b1e8-45d1-a340-20716417f1ed">
                                Kampil
                              </option>
                              <option value="6a230838-e775-49bb-8b78-3dfca25af2a1">
                                Mauranwan
                              </option>
                              <option value="6b85bb1f-2f75-40d5-b7c5-0911aa075272">
                                Zaidpur
                              </option>
                              <option value="6be81ee5-c85a-4cbe-8b9f-c184a6f80140">
                                Ramkola
                              </option>
                              <option value="6ce5851c-ae16-4f39-91af-23907e1c3093">
                                Malasa
                              </option>
                              <option value="6d03d9cc-34f2-411b-a589-025632502183">
                                Chandausi
                              </option>
                              <option value="6d166f72-8ebe-4335-8bca-efb37453fe56">
                                Pinahat
                              </option>
                              <option value="6de320d0-8fd0-42cb-b374-8da4dddb6c09">
                                Meerut
                              </option>
                              <option value="6e0c5b5b-9610-49ec-9723-35a278fe996a">
                                Gursahaiganj
                              </option>
                              <option value="6ea86c7f-0275-4ad1-b53c-14f02da9d1a4">
                                Ghiror
                              </option>
                              <option value="6f48cf48-e05a-4df4-b9a0-73b9eb4f5229">
                                Akbarpur
                              </option>
                              <option value="6fea249c-f275-4ffa-b51e-729e86d47e7a">
                                Fatehpur Sikri
                              </option>
                              <option value="6ffcca88-5c58-48bb-ae9c-530aaa66b6b6">
                                Parichha
                              </option>
                              <option value="71caedf3-240a-4c45-b145-ed0e562355ef">
                                Richha
                              </option>
                              <option value="723d4633-2bc8-4e42-91d8-031637dea169">
                                Dankaur
                              </option>
                              <option value="72d470aa-4b1b-4a8a-94f2-beef8ba9a919">
                                Ghorawal
                              </option>
                              <option value="731de5b9-116e-47be-9196-8d3454856a17">
                                Gokul
                              </option>
                              <option value="73d20b8b-03f1-4598-b7a6-6627d627f60f">
                                Siddharthnagar
                              </option>
                              <option value="7454c60f-b793-48d6-88c7-cfdf60961ec4">
                                Dibai
                              </option>
                              <option value="74b4278a-5e75-472c-b439-1a42154ab3dc">
                                Kakori
                              </option>
                              <option value="75a7b315-0ef9-4d12-af37-d97e8891076d">
                                Karchana
                              </option>
                              <option value="761f081f-9c06-4ab3-bf69-6a82aa065b98">
                                Qadirganj
                              </option>
                              <option value="763eb70d-f3fc-491d-8ee5-c56b5729aa72">
                                Sambhal
                              </option>
                              <option value="7663db6b-87e4-4302-8333-1cad0850e9fd">
                                Azizpur
                              </option>
                              <option value="76d05a8e-732e-45dd-9bf5-4806d439b1e3">
                                Sadabad
                              </option>
                              <option value="76d22068-b436-44ee-b186-4e7ffa6186a6">
                                Faridnagar
                              </option>
                              <option value="77dc9679-b0a4-48df-866b-c781dece6e47">
                                Kishanpur
                              </option>
                              <option value="77e3fbcf-1a8a-40f4-999d-a74fef1c71c6">
                                Mau
                              </option>
                              <option value="78086baf-e5fb-41c8-ad6d-f897fffb9406">
                                Daraganj
                              </option>
                              <option value="781df8df-a7f1-4ab1-90ea-0a053e4cedf4">
                                Sikandrabad
                              </option>
                              <option value="78f0a028-1f09-40b5-91d9-8d7d0459bd64">
                                Gopamau
                              </option>
                              <option value="79cbbdf7-a704-407b-892f-7752d90bcf9d">
                                Jarwal
                              </option>
                              <option value="7a146cd0-d973-4d6f-ba86-2113654acb41">
                                Sitapur
                              </option>
                              <option value="7a2400fa-c310-4bd4-8bcc-3c2482ecf9fc">
                                Chandauli District
                              </option>
                              <option value="7a47c4de-9db2-44d0-a67c-01ef68cb6ca0">
                                Ugu
                              </option>
                              <option value="7bccb599-3166-4fd9-ae79-62306a9634ce">
                                Lucknow District
                              </option>
                              <option value="7be54f8f-88d2-4776-b66d-66784670e4c6">
                                Gawan
                              </option>
                              <option value="7c33d0ac-058c-49d5-b5fe-b19f34353278">
                                Milak
                              </option>
                              <option value="7c3e271c-51a9-48ab-8b9d-fea87c5b946e">
                                Loni
                              </option>
                              <option value="7d951ad4-32bf-47df-8f7b-97e02018959c">
                                Bahraigh
                              </option>
                              <option value="7de67fe7-9f9f-4976-8c54-922066d948c9">
                                Maghar
                              </option>
                              <option value="7e3773c6-93cd-4632-9d37-3657eddfc68c">
                                Naugama
                              </option>
                              <option value="7e9d5526-340d-4e52-bcd9-430edc37db70">
                                Mukteshwar
                              </option>
                              <option value="7ea4f145-70c8-4fc0-b7ad-6c2cccaf2b95">
                                Sabalpur
                              </option>
                              <option value="7eb09a3a-829a-4b86-aae9-81c67f8358c8">
                                Khargupur
                              </option>
                              <option value="7ebe6286-1e77-4b6e-95cb-9be6edb0d12e">
                                Dasna
                              </option>
                              <option value="7ef35b20-ca50-4fd8-8778-0570fafaa0cf">
                                Fatehpur (Barabanki)
                              </option>
                              <option value="7f253e6b-cb32-4332-a165-56d1625d0d95">
                                Greater Noida
                              </option>
                              <option value="7fc698b6-f9e5-4b13-abd3-4e667a989887">
                                Sikandra Rao
                              </option>
                              <option value="7fda5324-ef07-45d8-b0b9-a9567069c7a7">
                                Tanda
                              </option>
                              <option value="80718f79-3687-4373-9ee7-5f064763161d">
                                Belthara
                              </option>
                              <option value="80a9b6a3-b27b-4ca8-ae56-60b172896e2c">
                                Thana Bhawan
                              </option>
                              <option value="8119ca35-3f25-439a-933b-6993831c064a">
                                Hardoi
                              </option>
                              <option value="8122b171-ed2a-4cad-8d53-9cb2b80ca2e0">
                                Barkhera Kalan
                              </option>
                              <option value="8135129b-3b39-41de-8870-54232585eef7">
                                Pilkhuwa
                              </option>
                              <option value="81597ecd-d3e5-451c-b0eb-8a036adfd0c3">
                                Mirzapur
                              </option>
                              <option value="8169a7c0-3808-41d4-820f-aaed1e48c038">
                                Konch
                              </option>
                              <option value="81cfc956-f018-4470-bc6b-0043cfb4b2bd">
                                Phulpur
                              </option>
                              <option value="8309bbe2-e393-4f5a-917b-51261bbd6dc8">
                                Bahraich
                              </option>
                              <option value="831e16ae-dd34-457b-8481-0b76dba7fadf">
                                Sandi
                              </option>
                              <option value="83c16e79-f1da-45cd-a93c-530f2ec9a6f3">
                                Chitrakoot
                              </option>
                              <option value="84d01353-3d03-4d8d-ab91-f42093bbed42">
                                Pukhrayan
                              </option>
                              <option value="85450ea9-1d9a-46ba-9f1a-f8f6bea69fbe">
                                Jhansi
                              </option>
                              <option value="868647a7-96e5-47e1-a229-ebfb9a7034c5">
                                Narauli
                              </option>
                              <option value="86aa04ec-ecba-42ef-bb7d-a0cb794c4607">
                                Nurpur
                              </option>
                              <option value="86b63101-527d-4aa8-9d92-b4496baed1fa">
                                Radha Kund
                              </option>
                              <option value="86d8b591-bf4f-4a8a-8cf5-4789460be359">
                                Jarwa
                              </option>
                              <option value="8700f15a-6176-43a5-b61c-ad60a3c59802">
                                Naraura
                              </option>
                              <option value="8719770c-cfc4-4aef-9129-8fb0cddcac30">
                                Tajpur
                              </option>
                              <option value="8741eaf3-b99f-4a5d-ada2-8759d304c4f0">
                                Patiali
                              </option>
                              <option value="87cf9e95-9d21-4630-ba21-0b7dfbfb23b2">
                                Jahangirpur
                              </option>
                              <option value="87e761fb-da40-41bf-a862-0d9ec6cda22a">
                                Sahpau
                              </option>
                              <option value="8852723a-f196-490c-b3e5-3855a7c4905f">
                                Jhajhar
                              </option>
                              <option value="88b1c9f4-1266-483f-b49f-6301020575af">
                                Banda
                              </option>
                              <option value="88d69fb0-a027-4ece-b3db-fa4c170649ef">
                                Palia Kalan
                              </option>
                              <option value="88ed63c6-59d5-4473-a245-0a30b359cd38">
                                Jalalpur
                              </option>
                              <option value="88f9fffa-4cf8-44f7-bd6b-9d370fee0c23">
                                Amanpur
                              </option>
                              <option value="892b6184-6a3b-45f6-83b4-9a18d78b9834">
                                Usawan
                              </option>
                              <option value="89318c76-165a-49a9-a796-7929868fba21">
                                Thakurdwara
                              </option>
                              <option value="89475d4e-6d98-43aa-9a78-c2d303f82cab">
                                Mawar
                              </option>
                              <option value="89b0f35c-c149-46a1-88b0-9164382b193e">
                                Lalitpur
                              </option>
                              <option value="8a68249c-b4c0-45b4-b00a-afdf8a1afd56">
                                Baragaon
                              </option>
                              <option value="8b70ea2f-4360-4d98-9fb1-1cc17ed31171">
                                Budaun
                              </option>
                              <option value="8b7d3d29-8f85-4280-ab01-54858049206d">
                                Chopan
                              </option>
                              <option value="8bb1cc1c-a180-4eec-8b8d-fdb9bf5e920c">
                                Hata (India)
                              </option>
                              <option value="8c89caa7-2e01-431f-aa60-f597116f41da">
                                Malihabad
                              </option>
                              <option value="8cc12401-4e56-475a-852a-2bf35434b840">
                                Kalinagar
                              </option>
                              <option value="8cc353f5-f525-4e41-ae84-ae59dbd5228b">
                                Kara
                              </option>
                              <option value="8cd611d9-a031-44aa-98c3-240ae3eb19a6">
                                Auraiya
                              </option>
                              <option value="8d3eb882-0324-44c5-b87d-e6437182b6b4">
                                Gaini
                              </option>
                              <option value="8d79a75e-9d21-4989-9d4f-cb602daf9f15">
                                Titron
                              </option>
                              <option value="8da7066e-fded-4804-8acf-5a6030613b4f">
                                Majhupur
                              </option>
                              <option value="8ddb885c-b70e-4fdb-87fa-3220c6df3253">
                                Nigoh
                              </option>
                              <option value="8dfbbc8c-14c8-431f-bae3-daa2118af6c8">
                                Bisalpur
                              </option>
                              <option value="8e3962b4-0ff0-431c-8bda-7ef279ea3b7b">
                                Sant Kabir Nagar
                              </option>
                              <option value="8e9d651d-fe6f-4759-bc53-d92358d15d53">
                                Manjhanpur
                              </option>
                              <option value="8eca94c1-11be-4086-966b-779652f86458">
                                Haraiya
                              </option>
                              <option value="8ef088f1-9828-4348-af0f-58999dd296a6">
                                Jagnair
                              </option>
                              <option value="8fefa4f1-c99c-4da5-8326-97022857baa1">
                                Mahul
                              </option>
                              <option value="901f0693-c142-4f7a-a621-0c0737c72f2f">
                                Fatehpur
                              </option>
                              <option value="90ac5975-1a22-4d40-b7d8-805d81284324">
                                Fyzabad
                              </option>
                              <option value="91c283ea-482c-4192-997d-26223d2d7f49">
                                Gauriganj
                              </option>
                              <option value="93e12323-3ed1-4f12-9822-ceb73b498135">
                                Payagpur
                              </option>
                              <option value="941907ca-97c4-4f91-a887-c1e91b9859b6">
                                Bela
                              </option>
                              <option value="9432a15a-5458-4857-bb8d-20cdee9db97a">
                                Sarila
                              </option>
                              <option value="944ff9ff-8c96-41bb-b61a-7bd64b6ca3dd">
                                Bachhrawan
                              </option>
                              <option value="94fe3ba8-a416-47b6-9f31-746b99cc788b">
                                Vrindavan
                              </option>
                              <option value="950ebc12-5951-495c-8a24-f88b2cbe0a40">
                                Machhali Shahar
                              </option>
                              <option value="9513ae8d-48f8-4435-b4ec-d95a566b96b8">
                                Sirathu
                              </option>
                              <option value="959eb62d-aa0e-4ce4-8852-e61ae4e17462">
                                Chillupar
                              </option>
                              <option value="95da1dbb-bfc9-498c-853c-26e9dceaff31">
                                Rudauli
                              </option>
                              <option value="95e85467-9e51-4f6e-b445-8fdfcde5bbc4">
                                Khada
                              </option>
                              <option value="96394049-c4a2-444e-a272-a4307068a518">
                                Hamirpur
                              </option>
                              <option value="9a883242-0076-4677-a4f9-9afed0d1278e">
                                Sahaspur
                              </option>
                              <option value="9aeebf1b-aa26-41c3-b851-d8ffe82e6aea">
                                Sidhauli
                              </option>
                              <option value="9b45805e-f1a8-4e7e-baad-a12f38a4ab4e">
                                Indragarh
                              </option>
                              <option value="9bcb00b6-7c45-41ee-9f95-6fcb34395bfb">
                                Miranpur Katra
                              </option>
                              <option value="9c30b39b-16ad-4a8e-a51c-370b8abb0873">
                                Bisanda Buzurg
                              </option>
                              <option value="9cda1e1e-0b53-45d3-90ab-b5ee501e7f6c">
                                Sakit
                              </option>
                              <option value="9da4b086-2729-4739-b1fa-a89f741ac300">
                                Nakur
                              </option>
                              <option value="9e0ac3ca-206d-4b19-95a5-709abb77d603">
                                Lawar
                              </option>
                              <option value="9e2be5fa-be77-482f-bb97-2ac7c2ecab98">
                                Gorakhpur
                              </option>
                              <option value="9ea3ac72-8c77-42eb-886b-af58c860c07f">
                                Jahanabad (Pilibhit)
                              </option>
                              <option value="9f314584-269a-4d5b-affe-463e3d9f1a99">
                                Utraula
                              </option>
                              <option value="9fb7e2ea-611e-4caf-b714-94ddf73f6d65">
                                Churk
                              </option>
                              <option value="a1501c22-a5e2-43c2-8b0a-e9020001ba66">
                                Atrauli
                              </option>
                              <option value="a1640ce0-fc15-4951-afa2-16e646f00ce7">
                                Dhanghata
                              </option>
                              <option value="a1aa9a29-71f6-451a-b338-de9f682fd8b4">
                                Varanasi
                              </option>
                              <option value="a1ecb32a-e326-4780-810a-8a15375f8867">
                                Sikandarpur
                              </option>
                              <option value="a1fbaeb6-17d6-432d-affd-b50559c5b055">
                                Chharra
                              </option>
                              <option value="a34ba7ca-5361-4227-9689-7169bf9b0a24">
                                Jainpur
                              </option>
                              <option value="a38fda39-f551-485c-95dd-ce88569580f8">
                                Mirganj
                              </option>
                              <option value="a3f207b3-17c2-4b5e-8f75-d4beded2d4da">
                                Iglas
                              </option>
                              <option value="a4a4ad21-d3a5-4167-9f8c-bee1619d1aea">
                                Aliganj
                              </option>
                              <option value="a4ad50b4-5e60-4679-9009-6276f8402a8a">
                                Fatehabad
                              </option>
                              <option value="a5120980-2d83-4fbf-b69a-ffe40bce0de3">
                                Nanpara
                              </option>
                              <option value="a5734cc6-8201-4adc-a82b-1d7ddd4ef769">
                                Nagram
                              </option>
                              <option value="a5c58570-048d-4d20-83e8-cbebfe83b020">
                                Shankargarh
                              </option>
                              <option value="a5c8b11b-5740-4d55-8e1d-a3f4bfc54000">
                                Karari
                              </option>
                              <option value="a5fb6f4f-c557-43be-ba3d-fa21d96a2a37">
                                Gosainganj
                              </option>
                              <option value="a6ebcbab-88af-4d95-9358-b87ddbadf141">
                                Bishunpur Urf Maharajganj
                              </option>
                              <option value="a70f0d14-db48-41c8-9fe0-156034d51117">
                                Sonbhadra
                              </option>
                              <option value="a755a9ab-73b7-4bd3-894d-5009541fa925">
                                Nadigaon
                              </option>
                              <option value="a787536a-75f9-48be-a7d6-c6ec8efd363a">
                                Sandila
                              </option>
                              <option value="a7979d49-ffb5-4251-bf50-f685b5948492">
                                Bhognipur
                              </option>
                              <option value="a8ae4b35-a07f-4b75-a135-134336067fe1">
                                Amauli
                              </option>
                              <option value="a91ad0ad-53b4-4f4f-b923-8344eaad4e60">
                                Madhogarh
                              </option>
                              <option value="a962bc96-b949-4dd2-9566-eb8602f4a656">
                                Fatehganj West
                              </option>
                              <option value="a983ab32-bb18-4627-b53c-f04431a41b97">
                                Ranipur Barsi
                              </option>
                              <option value="a98763da-dd80-4d89-a538-b289c175e6bd">
                                Kishni
                              </option>
                              <option value="a9e8ce06-bd0b-408d-b188-0f4b4f843f1f">
                                Dhampur
                              </option>
                              <option value="ab4f19c5-af71-4a79-ade9-00692c1202be">
                                Tikaitnagar
                              </option>
                              <option value="abc9e35d-cebe-4483-8727-72f07fe49ff5">
                                Bhadarsa
                              </option>
                              <option value="ac553655-2813-4883-a3a3-c2ff3fec6ea5">
                                Dhaurahra
                              </option>
                              <option value="acdd2612-8930-4122-98ac-28d9699d5219">
                                Pheona
                              </option>
                              <option value="acfde68e-a9af-4c64-8925-20ccd4de7bae">
                                Bithur
                              </option>
                              <option value="adcc1c81-5124-4cd2-a310-9ae4c1da3b6e">
                                Banthra
                              </option>
                              <option value="adec27ff-7112-406e-9bc9-3c50c29205db">
                                Baberu
                              </option>
                              <option value="ae43abd3-b6af-4ea1-85b2-3fdeb38c8a4f">
                                Nanauta
                              </option>
                              <option value="ae489c97-162c-4d43-9cad-f7165707d467">
                                Khudaganj
                              </option>
                              <option value="aeee65f3-a6ec-4f55-abf2-955a8547e57b">
                                Khalilabad
                              </option>
                              <option value="af5e3ea0-ea3f-4465-a3fd-0ddc92ca1b9c">
                                Shahi
                              </option>
                              <option value="b0121b3f-c4c4-4654-9da5-80d1d567a1d5">
                                Maurawan
                              </option>
                              <option value="b03f72eb-47fb-4617-bb44-537b8e80a7fb">
                                Reotipur
                              </option>
                              <option value="b08bd600-ed7d-44a3-bb24-6a5fbe6794f3">
                                Rura
                              </option>
                              <option value="b0c3b6ae-47e5-437d-9f31-82c200f5ab3f">
                                Mughal Sarai
                              </option>
                              <option value="b0c6b7f2-c260-4eb0-8e4d-c7349d884b0a">
                                Manikpur
                              </option>
                              <option value="b0ef6549-92be-4410-a75d-c9b58357b672">
                                Sarai Ekdil
                              </option>
                              <option value="b1226d69-a09a-4453-b06f-80588702f621">
                                Banat
                              </option>
                              <option value="b13f7210-ddb6-46af-a42f-56be0b46f973">
                                Musafirkhana
                              </option>
                              <option value="b14f0581-e454-484d-950a-2d90a6cb07eb">
                                Bansi
                              </option>
                              <option value="b16d7150-aff5-4742-8d5c-4b077f90addc">
                                Barhalganj
                              </option>
                              <option value="b276e3b4-0924-4745-86ca-fff014eb5432">
                                Bhadohi
                              </option>
                              <option value="b28af9d6-c086-499c-a5f7-5574f7e7f520">
                                Basti
                              </option>
                              <option value="b2d9b04e-d501-4794-8231-e1ed81b16589">
                                Vindhyachal
                              </option>
                              <option value="b3884476-81c9-4726-83f5-dae2e12834a8">
                                Anupshahr
                              </option>
                              <option value="b3917ce2-b34c-49fe-b362-d0e85593203e">
                                Etmadpur
                              </option>
                              <option value="b3bef6a6-50d1-412a-b6dc-e67d00e72b92">
                                Khailar
                              </option>
                              <option value="b6852e70-356b-4241-95cb-0eb8555ef1ec">
                                Khaga
                              </option>
                              <option value="b7a8d2c5-9a5c-4e15-9878-41ef8d6c4f07">
                                Aonla
                              </option>
                              <option value="b7c9fb38-864d-4f9c-99e2-a1c64b9ab81c">
                                Haraipur
                              </option>
                              <option value="b8054edc-f446-4235-bddc-65ba660d888d">
                                Jaswantnagar
                              </option>
                              <option value="b84fc114-29b4-4021-82a7-713c583ae98a">
                                Kishanpur baral
                              </option>
                              <option value="b8726066-1cab-4490-8ec7-14683f738d58">
                                Balrampur
                              </option>
                              <option value="b893a691-9584-4500-9c9d-ef49a87bada4">
                                Pipri
                              </option>
                              <option value="b898d253-ef04-49d4-b70b-05800c7cadde">
                                Ikauna
                              </option>
                              <option value="b92db6bb-8b95-4874-ab6c-a4e7d4272eaa">
                                Faizabad
                              </option>
                              <option value="b92f68f6-ac1d-46ab-b0ff-08f3cd6b7495">
                                Kharkhauda
                              </option>
                              <option value="b93b9177-1038-411d-aa1e-3fd11cccaca8">
                                Kiraoli
                              </option>
                              <option value="ba061434-6496-4ea0-969b-45f4d9aae164">
                                Chirgaon
                              </option>
                              <option value="ba067648-1647-463c-9b49-5ad2bb14a20b">
                                Sirsi
                              </option>
                              <option value="ba145610-3317-4a2d-a46a-dd1435c05cf7">
                                Chanduasi
                              </option>
                              <option value="ba15962a-b61d-4111-b481-ac2976a4abf4">
                                Dalmau
                              </option>
                              <option value="ba674c4b-f88f-4728-8356-6984f08daca6">
                                Achhnera
                              </option>
                              <option value="bab56d90-41cd-4593-8de5-2ff8a4f48aba">
                                Mahroni
                              </option>
                              <option value="bad88ad9-70cd-4f0b-9cf9-cba71e966cff">
                                Paras Rampur
                              </option>
                              <option value="badd9df0-2edd-4a1c-9a09-0589f12f7fb4">
                                Ayodhya
                              </option>
                              <option value="bb6201e6-a882-47e5-8575-52f7fc8539df">
                                Gyanpur
                              </option>
                              <option value="bb96fe79-4c03-432e-9d8f-c0c9051e3646">
                                Mohanpur
                              </option>
                              <option value="bbd6aae2-4611-4b49-9f39-93fea4c72ac5">
                                Bighapur Khurd
                              </option>
                              <option value="bc786fc5-b297-425d-ab71-34f92fa255bf">
                                Terha
                              </option>
                              <option value="bcd53b92-caa7-499c-bd4b-34d74705499b">
                                Maharajganj
                              </option>
                              <option value="bd736d68-af02-4ee2-80ae-8c9a772fd3d1">
                                Gonda
                              </option>
                              <option value="bd768c90-9d3f-4ce7-8925-9fa8f4806475">
                                Barwar (Lakhimpur Kheri)
                              </option>
                              <option value="bdf5b6f3-267d-4050-b276-bee88cc55f6a">
                                Dharau
                              </option>
                              <option value="beb81bc5-15e0-400c-8baf-784ed7ad98b1">
                                Lakhna
                              </option>
                              <option value="bf0a9581-fb8c-47c3-b592-143b43c5028c">
                                Hata
                              </option>
                              <option value="bf690e86-c04e-48ee-86b3-a674e4a1e4c5">
                                Kiratpur
                              </option>
                              <option value="c07f1e93-1f16-4a41-8d7c-d7daf0c1bd2b">
                                Salempur
                              </option>
                              <option value="c0d30177-6e13-4097-928e-071e9eb6c6c3">
                                Nandgaon
                              </option>
                              <option value="c1319c75-d9f6-488c-a382-a58c4f7114ea">
                                Nihtaur
                              </option>
                              <option value="c25670fb-94d7-4b97-b096-53ab0fc6b5b4">
                                Mahmudabad
                              </option>
                              <option value="c258650e-c923-460e-b868-4d432e7ee99a">
                                Budhana
                              </option>
                              <option value="c27e46bf-d21e-4782-a620-c096544022a8">
                                Laharpur
                              </option>
                              <option value="c2a383b9-96dc-47f5-8252-119cf50892ae">
                                Moradabad
                              </option>
                              <option value="c3d34489-1406-4f04-8d9c-e1fc7ee34b4d">
                                Sant Ravi Das Nagar
                              </option>
                              <option value="c412b79e-6459-41e7-a14f-616d58da8f41">
                                Gola Gokarannath
                              </option>
                              <option value="c415a31b-ca7c-4371-ba72-9b1b7407a548">
                                Muhammadabad
                              </option>
                              <option value="c4e41ca8-c518-4dc4-82b4-74b7bb2690ee">
                                Lar
                              </option>
                              <option value="c549a42c-b0c5-4a62-89d2-3cecd26b16ee">
                                Beswan
                              </option>
                              <option value="c5634a71-b9c4-48b2-8c1c-35168c954330">
                                Afzalgarh
                              </option>
                              <option value="c616ea16-c3f1-4f6b-81ef-d28f8571d1aa">
                                Kuchesar
                              </option>
                              <option value="c678aa19-d938-4f75-a996-86acfb32f7f8">
                                Shishgarh
                              </option>
                              <option value="c7814009-0d0e-4d82-b2df-3cd6393f98ea">
                                Mataundh
                              </option>
                              <option value="c7922162-df4e-43a9-b854-f1058972f4be">
                                Balamau
                              </option>
                              <option value="c852660e-eb90-4268-9279-881bc59db80a">
                                Nagina
                              </option>
                              <option value="c8f622b5-147d-4c33-a3ec-c00d28b50e62">
                                Farah
                              </option>
                              <option value="c956e33c-7704-49f2-8956-86a9ff6e7b67">
                                Siswa Bazar
                              </option>
                              <option value="c9b4de7e-0112-46f8-ad5e-ea8490623854">
                                Bikapur
                              </option>
                              <option value="c9ee18f6-6de9-4cdb-8d6a-ee3744d6cc2d">
                                Sirsa
                              </option>
                              <option value="ca160103-f675-4b6f-bb25-9eb14e6321d3">
                                Shergarh
                              </option>
                              <option value="ca69030d-f528-4e2a-a589-22b2a06a5848">
                                Chunar
                              </option>
                              <option value="ca810a6e-8814-449d-83b5-e7206ffcfd56">
                                Madhoganj
                              </option>
                              <option value="caa59736-9c2e-48fc-9d32-c0e308a128b3">
                                Charkhari
                              </option>
                              <option value="cb354ce2-5f92-45b2-ad25-8547493f7201">
                                Puranpur
                              </option>
                              <option value="cb44f8f4-041d-4799-b232-5e9a12f88338">
                                Kandhla
                              </option>
                              <option value="cbec0796-68db-4846-a218-25c68c60d94f">
                                Auras
                              </option>
                              <option value="cc0e7e90-1274-4272-bf72-e9e736fce834">
                                Kadipur
                              </option>
                              <option value="cc433306-2888-48b9-9668-86bc94abf68e">
                                Ambahta
                              </option>
                              <option value="cc663cce-6090-4b26-95f2-baa9b87e569c">
                                Garhwa
                              </option>
                              <option value="cceb633e-41f3-4b53-8c3e-ad0693b9a183">
                                Ibrahimpur
                              </option>
                              <option value="ccf119a0-cf3f-4cdf-abd3-d4b9323608ef">
                                Dataganj
                              </option>
                              <option value="cd2d85cf-3eba-4863-a966-685c0c966c2f">
                                Gahmar
                              </option>
                              <option value="ce114a7b-288c-407a-80df-783275a0bfe3">
                                Pachperwa
                              </option>
                              <option value="ce1fc600-7f3c-4886-b5f6-f5e518de5ea5">
                                Sidhpura
                              </option>
                              <option value="ce3faf38-46bb-4b49-9c7d-83ee0d687c38">
                                Baldev
                              </option>
                              <option value="ce4ff751-1a56-4e0d-b859-07178e59d7cd">
                                Paigaon
                              </option>
                              <option value="cebb414f-ff1a-49e1-b9d2-625b17bd6691">
                                Asalatganj
                              </option>
                              <option value="cf1bbba9-e493-470e-b1fc-001b9fb28b0c">
                                Kemri
                              </option>
                              <option value="cfa36199-52d6-4727-a4b0-a1798d1eaf81">
                                Khutar
                              </option>
                              <option value="cfa6878c-78ee-4eb0-ab89-c303c9948d36">
                                Saurikh
                              </option>
                              <option value="cfb64b1f-7585-4527-a747-e413a741ec7c">
                                Umri
                              </option>
                              <option value="cfc41b1d-ad94-4cf8-94b4-0398ba7b5aee">
                                Shrawasti
                              </option>
                              <option value="cfccbe95-348a-41b2-a2a3-339be339f9c2">
                                Bhimtal
                              </option>
                              <option value="cff08c96-fa67-4559-ac68-1b49962c8e58">
                                Salon
                              </option>
                              <option value="d044c7ae-f362-44fb-8cfe-b7444104f841">
                                Nagla
                              </option>
                              <option value="d1e6d1f4-136d-4dc9-a3c9-82a8fb7f33c7">
                                Tilhar
                              </option>
                              <option value="d235123a-dbcb-410f-83f1-c9d6832e71cb">
                                Sherkot
                              </option>
                              <option value="d27cc840-c7fd-48cc-99f3-b5b00da28d07">
                                Govardhan
                              </option>
                              <option value="d31a5bc2-3754-43f8-b220-e34ac36d225a">
                                Sachendi
                              </option>
                              <option value="d36dcf21-dd5a-4940-bcc2-30416dfa7423">
                                Bharatpura
                              </option>
                              <option value="d3c3a5a2-6e5b-45f3-99ea-93796d4d60e5">
                                Captainganj
                              </option>
                              <option value="d4281f11-9a77-4ecf-8c55-49f8fb12c4a8">
                                Ghatampur
                              </option>
                              <option value="d43442f0-e848-4257-a61a-0bb77a6e8621">
                                Renukoot
                              </option>
                              <option value="d458355c-4a2a-418e-8c31-0918ae24f37f">
                                Chhutmalpur
                              </option>
                              <option value="d4f859da-7fb2-464b-81a4-195cafb3ac5c">
                                Miranpur
                              </option>
                              <option value="d5302000-d7a2-4141-864e-0c018d167aae">
                                Jyotiba Phule Nagar
                              </option>
                              <option value="d54194f8-c6f6-443e-9f95-ca18f7da38be">
                                Dayal Bagh
                              </option>
                              <option value="d57450a0-18d2-45fb-928a-3771c661b62d">
                                Raya
                              </option>
                              <option value="d57636c1-7f2d-489f-8fd4-d5965b514f1e">
                                Domariaganj
                              </option>
                              <option value="d6afdbdb-3d50-4b74-afe3-40a99c0c256b">
                                Raebareli
                              </option>
                              <option value="d6c6b52e-9017-4e02-a9c0-a7e084b35c44">
                                Sardhana
                              </option>
                              <option value="d6e5430a-eb29-4278-9590-9dd3e38c332c">
                                Ghazipur
                              </option>
                              <option value="d70cff3f-8d84-49b3-a027-d9883ac17d9d">
                                Rudarpur
                              </option>
                              <option value="d712c8f5-2a4a-43bf-b059-1ad9f8cc687a">
                                Shikohabad
                              </option>
                              <option value="d7250551-2c1e-4a9f-9c52-cd1e261b042a">
                                Wazirganj
                              </option>
                              <option value="d74e5dec-1537-4b20-88bd-12416d1c53b4">
                                Kharela
                              </option>
                              <option value="d7f84ac7-1b84-4ec2-9faa-ef2cff4e57ac">
                                Mohan
                              </option>
                              <option value="d80c43d8-5290-4c37-a61b-52aba0d790d5">
                                Biswan
                              </option>
                              <option value="d8b9c4f9-d589-4814-9a77-b2ee75566a6b">
                                Sirsaganj
                              </option>
                              <option value="d8cac856-5083-4c48-9ec7-83e5234b5d43">
                                Sahaswan
                              </option>
                              <option value="db52c322-e1c5-4785-9aff-da2e9657c2ec">
                                Sasni
                              </option>
                              <option value="db9486a7-72e4-4e38-aea4-ec30b7103c3c">
                                Goshainganj
                              </option>
                              <option value="dcc43e07-c051-4751-8fed-194425d84b0b">
                                Nawabganj (Bareilly)
                              </option>
                              <option value="dcc9b6ae-bc1e-417f-ac47-50977c1868bc">
                                Shahganj
                              </option>
                              <option value="dd203bf6-2215-49c2-a401-92566477477c">
                                Garhmuktesar
                              </option>
                              <option value="ddb4f5ea-5664-4b4d-a5c8-3abf4e391a9b">
                                Mariahu
                              </option>
                              <option value="de7109b4-4a18-4491-b6b7-dc8bc4ab519b">
                                Chandpur
                              </option>
                              <option value="de7f46ef-6dea-40d0-8132-0acb2ff75c00">
                                Bachhraon
                              </option>
                              <option value="df226355-f0d4-4c7c-9776-1b73efe0adf1">
                                Bighapur
                              </option>
                              <option value="df569760-a818-4ff8-b3f5-a8fed4c5d97f">
                                Kachhwa
                              </option>
                              <option value="df8ba85b-91f5-4e9e-b64f-35dbcf31ef54">
                                Bilthra
                              </option>
                              <option value="e0086b23-efc3-4e72-a8be-c4e5481822e9">
                                Daurala
                              </option>
                              <option value="e0415776-f903-4d2b-bf17-4495a6532510">
                                Narora
                              </option>
                              <option value="e05d3ec3-f583-4f6b-8319-5fb6c1786dab">
                                Kanpur Dehat
                              </option>
                              <option value="e08e5a1a-9c9e-4884-a5cb-56a2b806c0eb">
                                Babrala
                              </option>
                              <option value="e270f366-c242-4f99-a4ac-3c60e505cb03">
                                Kuthaund
                              </option>
                              <option value="e379657c-0d61-418f-89fa-671950b5b19d">
                                Sarai Akil
                              </option>
                              <option value="e3f10be0-39c4-4f20-94ba-8ffc758cbf3b">
                                Gola Bazar
                              </option>
                              <option value="e40c4d22-9fe5-4f48-9437-8845a90a543e">
                                Kant
                              </option>
                              <option value="e415eb95-ea5a-4dfc-9965-1ede8d981f1f">
                                Ballia
                              </option>
                              <option value="e463f3c4-575e-4b2d-b5e9-97db8aab7b5d">
                                Kaimganj
                              </option>
                              <option value="e5026b99-ddd2-4bd0-b722-8c74fab054df">
                                Allahabad
                              </option>
                              <option value="e50bb904-d635-434f-a593-bbebb6d7dbc1">
                                Chandauli
                              </option>
                              <option value="e51079d4-6271-4063-9095-03f41e121bab">
                                Deoranian
                              </option>
                              <option value="e525d68f-cfbb-402a-8459-5f7aeab4628c">
                                Chhitauni
                              </option>
                              <option value="e6106478-8bff-4574-9f4e-4300cfa4ca75">
                                Araul
                              </option>
                              <option value="e6351861-6609-429c-8f7b-a9b722248700">
                                Jaunpur
                              </option>
                              <option value="e76592d9-da4c-48a3-93c2-e1bdf53fbd55">
                                Chail
                              </option>
                              <option value="e7dc11db-167e-456b-91ef-ae6ade05df3d">
                                Mahrajganj
                              </option>
                              <option value="ea57e9c3-fb2b-4045-b30a-db1efbf9f6dd">
                                Etah
                              </option>
                              <option value="ea669f98-3f40-42eb-a3b4-7d2fd9080883">
                                Noida
                              </option>
                              <option value="ea6a4f23-4b24-4765-a319-e61bc5978f22">
                                Kanpur
                              </option>
                              <option value="ead30874-a187-40af-8bae-a2d427633afb">
                                Binauli
                              </option>
                              <option value="eb00c14e-d10c-4777-bfc2-30ed2458bd71">
                                Robertsganj
                              </option>
                              <option value="eb45d933-88ae-4bd2-9179-c858d8b40b08">
                                Agra
                              </option>
                              <option value="ec00199a-3385-4dc4-b797-4e15b7ee3cc5">
                                Kirakat
                              </option>
                              <option value="ed38dd41-f01c-45f9-8793-5f282e7d53d4">
                                Hasanpur
                              </option>
                              <option value="ed78043f-403c-49f5-a1bb-f5b196ea2fa8">
                                Gulaothi
                              </option>
                              <option value="ed8ae23e-1994-4e5c-bb10-cb795385732d">
                                Sakhanu
                              </option>
                              <option value="eda41d95-d293-4df9-b1e0-fcae823ff3d3">
                                Purwa
                              </option>
                              <option value="ee03f7a1-f397-402c-8312-c5e7599b02da">
                                Mahrajganj (Raebareli)
                              </option>
                              <option value="ee51d420-6005-4ba0-a0bf-9e41b6a7894a">
                                Walterganj
                              </option>
                              <option value="eeaa2c61-b722-45a2-9c87-c34e8360784d">
                                Phaphund
                              </option>
                              <option value="ef2eb215-0994-4ce1-b9be-b6604be22821">
                                Tigri
                              </option>
                              <option value="efd5ae49-6212-41d9-b748-1a3b38574f9c">
                                Nawabganj
                              </option>
                              <option value="efe0b40d-3adc-4ef1-8c66-45ee5a737499">
                                Kurara
                              </option>
                              <option value="eff83af7-76e3-4602-abb3-5c1450ce97dc">
                                Siddhaur
                              </option>
                              <option value="f05a867a-c4ad-40d4-8131-5714676287a4">
                                Jalaun
                              </option>
                              <option value="f063dde6-c81d-42b9-a6b2-d03dca4b97d3">
                                Radhakund
                              </option>
                              <option value="f065a87f-271e-437d-9f9f-eb1bfa4aa39b">
                                Jahangirabad
                              </option>
                              <option value="f0f70afb-4b16-4cc8-afb0-d5f5e250e3cf">
                                Rath
                              </option>
                              <option value="f1b68845-d95d-489b-afe9-2760dbfbb5e0">
                                Jahanabad
                              </option>
                              <option value="f2f878f3-e26b-4ee1-9381-10b6e0b7f46b">
                                Tindwari
                              </option>
                              <option value="f3370229-4d12-4ca7-a294-e30c2edc92b4">
                                Islamnagar (Badaun)
                              </option>
                              <option value="f3452a60-5a78-4161-adf3-db0cf5b8f1b2">
                                Islamnagar
                              </option>
                              <option value="f3ea56f2-39be-4d37-b6e1-689c38d709ec">
                                Nautanwa
                              </option>
                              <option value="f44a17c8-229d-4d72-ae44-ca6ec733e2c7">
                                Babugarh
                              </option>
                              <option value="f44ff326-a56b-4f48-91dc-1e3efc3947f4">
                                Renukut
                              </option>
                              <option value="f4ffb522-53ef-4439-b40b-1c142550c5f2">
                                Saharanpur
                              </option>
                              <option value="f52a1ca2-a458-4afa-8242-9fee35a0eabc">
                                Handia
                              </option>
                              <option value="f71651e2-2c4e-45f2-9276-15a93313f3ae">
                                Lawar Khas
                              </option>
                              <option value="f759d70e-69f8-4deb-bf8a-28d9b813e151">
                                Sisauli
                              </option>
                              <option value="f7d6e203-7f7e-40c4-a48c-fdf3c28b6f33">
                                Pahasu
                              </option>
                              <option value="f7dcf025-d201-45d4-863a-fa3c10ea74ea">
                                Makanpur
                              </option>
                              <option value="f7de07c7-f4d6-4f15-81f8-c4fe3de7a65e">
                                Shivrajpur
                              </option>
                              <option value="f86195f4-80b9-4b9d-9572-c23742b7263a">
                                Harduaganj
                              </option>
                              <option value="f8cba810-3715-4f94-a654-7338581a9474">
                                Ghaziabad
                              </option>
                              <option value="fb548ce2-9b5b-4045-b1ec-1975eb13d55e">
                                Jhalu
                              </option>
                              <option value="fb74848c-84f0-4c79-9424-47641dded87d">
                                Allahganj
                              </option>
                              <option value="fb8bada8-4b10-45ac-9985-a242d489d223">
                                Karbigwan
                              </option>
                              <option value="fb8cda58-ccba-44e5-bca8-7ca587fe3bbf">
                                Patti
                              </option>
                              <option value="fbb46a4d-56f6-44f8-bdd0-0961c81c63b3">
                                Barkhera
                              </option>
                              <option value="fcb445e7-0a0e-4e61-983e-74dbcce7b424">
                                Pratapgarh
                              </option>
                              <option value="fd6ee579-4eb5-4e35-8a5d-28443f4dfaac">
                                Sarurpur
                              </option>
                              <option value="fe82c331-700b-4882-83e8-0b80171d1f6b">
                                Usehat
                              </option>
                              <option value="fece4507-ca0b-46fb-a48f-4f561a3553ad">
                                Bahjoi
                              </option>
                              <option value="feeb24e4-ac95-4791-9a58-d3b5e5859d76">
                                Padrauna
                              </option>
                              <option value="fefe3adc-c14c-4a13-98b5-9d13e9980f0b">
                                Amethi
                              </option>
                              <option value="ff90d4f2-9fcc-494f-9cc6-0c8c21b567af">
                                Maholi
                              </option>
                              <option value="ff9ff834-d490-4831-8a2f-ba48793ddd1c">
                                Jalesar
                              </option>
                              <option value="ffcfd4e1-13af-4a9b-a006-1fc3347661ee">
                                Mahoba
                              </option>
                            </select>{" "}
                          </div>
                        </div>{" "}
                        <div>
                          <label
                            for="pinCodeInput"
                            className="text-sm font-medium text-gray-600"
                          >
                            Postal code
                          </label>{" "}
                          <div className="mt-2">
                            <input
                              type="number"
                              id="pinCodeInput"
                              name="pinCodeInput"
                              placeholder=""
                              className="block w-full rounded-md border bg-white px-4 py-3 text-sm font-normal text-gray-900 placeholder-gray-500 caret-gray-900 focus:border-gray-900 focus:ring-gray-900 border-gray-300"
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <div className="lg:sticky lg:top-6 lg:col-span-4">
                <div className="overflow-hidden rounded bg-gray-50">
                  <div className="px-4 py-6 sm:p-6 lg:p-8">
                    <h3 className="text-xl font-bold text-gray-900">
                      Order details
                    </h3>{" "}
                    <div className="mt-8 flow-root">
                      <ul className="-my-7 divide-y divide-gray-200">
                        <li className="flex items-stretch justify-between space-x-5 py-7">
                          <div className="flex-shrink-0">
                            <img
                              className="h-16 w-16 rounded-lg bg-stone-100 object-cover p-4 shadow"
                              src="https://ik.imagekit.io/butterpaper/Butterpaper/prod/562cc62a-763b-472c-b194-07af22838c45/90eab63b-1031-4164-92d6-2617cb6739d0/Product/4.png?updatedAt=1698054198487"
                              alt="Test Payment"
                            />
                          </div>{" "}
                          <div className="ml-5 flex flex-1 flex-col justify-between">
                            <div className="flex-1">
                              <p className="!leading-0 text-base font-semibold text-gray-900">
                                Test Payment
                              </p>{" "}
                              <p className="text-xs font-medium italic text-gray-500">
                                Quantity: 5 units
                              </p>
                            </div>{" "}
                            <p className="mt-2 text-sm font-bold text-gray-900">
                              ₹5
                            </p>
                          </div>{" "}
                        </li>
                        <li className="flex items-stretch justify-between space-x-5 py-7">
                          <div className="flex-shrink-0">
                            <img
                              className="h-16 w-16 rounded-lg bg-stone-100 object-cover p-4 shadow"
                              src="https://ik.imagekit.io/butterpaper/Butterpaper/prod/562cc62a-763b-472c-b194-07af22838c45/90eab63b-1031-4164-92d6-2617cb6739d0/Product/4.png?updatedAt=1698054198487"
                              alt="Test Payment"
                            />
                          </div>{" "}
                          <div className="ml-5 flex flex-1 flex-col justify-between">
                            <div className="flex-1">
                              <p className="!leading-0 text-base font-semibold text-gray-900">
                                Test Payment
                              </p>{" "}
                              <p className="text-xs font-medium italic text-gray-500">
                                Quantity: 1 units
                              </p>
                            </div>{" "}
                            <p className="mt-2 text-sm font-bold text-gray-900">
                              ₹1
                            </p>
                          </div>{" "}
                        </li>
                      </ul>
                    </div>{" "}
                    <hr className="mt-6 border-gray-200" />{" "}
                    <div className="mt-5 flow-root">
                      <div className="-my-5 divide-y divide-gray-200">
                        <div className="flex items-center justify-between py-5">
                          <p className="text-sm font-medium text-gray-600">
                            Subtotal
                          </p>{" "}
                          <p className="text-right text-sm font-medium text-gray-600">
                            ₹6
                          </p>
                        </div>{" "}
                        <div className="flex items-center justify-between py-5">
                          <p className="text-sm font-medium text-gray-600">
                            Tax
                          </p>{" "}
                          <p className="text-right text-sm font-medium text-gray-600">
                            ₹0
                          </p>
                        </div>{" "}
                        <div className="flex items-center justify-between py-5">
                          <p className="text-sm font-medium text-gray-600">
                            Shipping
                          </p>{" "}
                          <p className="text-right text-sm font-medium text-gray-600">
                            ₹0
                          </p>
                        </div>{" "}
                        <div className="flex items-center justify-between py-5">
                          <p className="text-sm font-bold text-gray-900">
                            Total
                          </p>{" "}
                          <p className="text-right text-sm font-bold text-gray-900">
                            ₹6
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="mt-6">
                      <button
                        tabindex="0"
                        className="  text-green-50 bg-[#4C893B]  inline-flex items-center justify-center text-sm whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  text-primary-foreground hover:bg-primary/90 h-11 font-medium rounded-md px-8 w-full"
                      >
                        Proceed to payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Summary;
