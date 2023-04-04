import React from "react";

const Dischargesummary = () => {
  return (
    <div>
      <div className="col-start-1 col-end-7 pt-6 bg-green-900 font-bold text-end text-3xl pr-14 py-4 ">
        IPD DISCHARGE SUMMARY
      </div>

      {/* Table Part*/}
      <div className="flex">
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4 ">
          <input type="text" className="bg-white border-b border-black" />
        </div>
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4 ">
          <input type="text" className="bg-white border-b border-black" />
        </div>
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4 ">
          RegNo.
          <input type="text" className="bg-white border-b border-black" />
        </div>
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4 ">
          MRNo.
          <input
            type="text"
            name=""
            id=""
            className="bg-white border-b border-black"
          />
        </div>
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4  w-72 px-34"></div>
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4  w-72 px-34"></div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
              <div className="px-2 ">
                <select
                  name=""
                  id=""
                  className="bg-blue-600 rounded px-5 py-2 text-white "
                >
                  <option value="">Select</option>
                  <option value="1">Patient1</option>
                  <option value="1">Patient2</option>
                  <option value="1">patient3</option>
                </select>
              </div>
              <label htmlFor="table-search" className="sr-only">
                Search
              </label>
              <div className="relative px-2">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="table-search-users"
                  className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search for patients"
                />
              </div>
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Ward Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bed Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    patient Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Registration
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MRNo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Registration Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cashless
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Corparate Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Consultant Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sex
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Fathers Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mobile No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Service No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bed Charge
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Provisional Diagnosis
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ward ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DOB
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Service No.1
                  </th>
                  <th scope="col" className="px-6 py-3">
                    BillCardId
                  </th>
                  <th scope="col" className="px-6 py-3">
                    collection Center Id{" "}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Advance{" "}
                  </th>
                  <th scope="col" className="px-6 py-3">
                    CorprateGroupID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Department ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ayushman
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4"></td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold"> </div>
                      <div className="font-normal text-gray-500"> </div>
                    </div>
                  </th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full   mr-2"></div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      type="button"
                      data-modal-target="editUserModal"
                      data-modal-show="editUserModal"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      {" "}
                    </a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4"></td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold"> </div>
                      <div className="font-normal text-gray-500"> </div>
                    </div>
                  </th>
                  <td className="px-6 py-4"> </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full   mr-2"></div>{" "}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      type="button"
                      data-modal-show="editUserModal"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4"></td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3" />
                    <div className="text-base font-semibold"> </div>
                    <div className="font-normal text-gray-500"></div>
                  </th>
                  <td className="px-6 py-4"> </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full mr-2"></div>{" "}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      type="button"
                      data-modal-show="editUserModal"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4"></td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold"> </div>
                      <div className="font-normal text-gray-500"></div>
                    </div>
                  </th>
                  <td className="px-6 py-4"></td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full  mr-2"></div>{" "}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      type="button"
                      data-modal-show="editUserModal"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="w-4 p-4"></td>
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="pl-3">
                      <div className="text-base font-semibold"></div>
                      <div className="font-normal text-gray-500"></div>
                    </div>
                  </th>
                  <td className="px-6 py-4"> </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="h-2.5 w-2.5 rounded-full   mr-2"></div>{" "}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="#"
                      type="button"
                      data-modal-show="editUserModal"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    ></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-slate-300 w-full px-2 font-bold">Patient</div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Sex
                </th>
                <th scope="col" className="px-6 py-3">
                  Age
                </th>
                <th scope="col" className="px-6 py-3">
                  Wt.
                </th>
                <th scope="col" className="px-6 py-3">
                  D.wt (kg)
                </th>
                <th scope="col" className="px-6 py-3">
                  Conslt.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Male
                </th>
                <td className="px-6 py-4">87</td>
                <td className="px-6 py-4">56</td>
                <td className="px-6 py-4"></td>
              </tr>
            </tbody>
          </table>
          <div className="relative z-0 w-full mb-6 mt-6 group my-4 px-2">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              SR Consult.
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group px-2">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              JR conslt.
            </label>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6 px-2">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Registrar
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Prepared By
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6 px-2">
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Review On
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Select template
              </label>
            </div>
          </div>
        </div>

        <div className="col-span-8 ml-5 border w-full ">
          <div className=" bg-orange-200  p-5 mx-15 py-5 border">
            <p className="float-left font-bold">Advice on Discharge</p>
            <div className="flex float-right space-x-5 mb-3 mx-4">
              <button className="border shadow-md rounded px-3 py-1 bg-white">
                Save
              </button>
              <button className="border shadow-md rounded px-3 py-1 bg-white">
                Get
              </button>
            </div>
            <div className="my-3">
              <textarea
                className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                rows="5"
                name="textData"
              ></textarea>
            </div>
          </div>
          <br />
          <div className="bg-orange-200 p-5 mx-15 py-5 border">
            <p className="float-left font-bold">
              Signature of Treatment Consultant{" "}
            </p>
            <div className="flex float-right space-x-5 mb-3 mx-4">
              <button className="border shadow-md rounded px-3 py-1 bg-white">
                Save
              </button>
              <button className="border shadow-md rounded px-3 py-1 bg-white">
                Get
              </button>
            </div>

            <div className="my-3">
              <textarea
                className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                rows="5"
                name="textData"
              ></textarea>
            </div>
          </div>
          <br />
          <div className="bg-orange-200 0 p-5 mx-15 py-5 border">
            <p className="float-left font-bold">Signature of Medical Officer</p>
            <div className="flex float-right space-x-5 mb-3 mx-4">
              <button className="border shadow-md rounded px-3 py-1 bg-white">
                Save
              </button>
              <button className="border shadow-md rounded px-3 py-1 bg-white">
                Get
              </button>
            </div>

            <div className="my-3">
              <textarea
                className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                rows="5"
                name="textData"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      {/* / End Table Part */}
      {/*Form Part */}

      {/* End form  Part */}
    </div>
  );
};

export default Dischargesummary;
