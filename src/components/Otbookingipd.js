import React from "react";
import { Button } from "@material-tailwind/react";
const Otbookingipd = () => {
  return (
    <div>
      <div className="col-start-1 col-end-7 pt-4 bg-green-900 font-bold text-end text-3xl pr-14 py-4 underline">
        OTBOOKING (IPD)
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <div className="flex">
            <div className="flex-initial p-4 ">
              <p className="font-thin text-black">Search patient</p>
              <input type="text" className="bg-white border-black border" />
            </div>
            <div className="flex-initial p-4 ">
              <p className="font-thin text-black">RegNo.</p>
              <input type="text" className="bg-white border-black border" />
            </div>
            <div className="flex-initial p-4 ">
              <p className="font-thin text-black">RegNo.</p>
              <input type="text" className="bg-white border-black border" />
            </div>
          </div>
          <div className="border border-black px-2 mx-2 ">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
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
          </div>
        </div>
        <div className="col-span-5">
          <div className="">
            <p className="font-bold text-black my-7 ">
              OT Booking IPD patient : Mr alios Kerketta{" "}
            </p>
          </div>
          <div className="border border-black mt-2 flex-col mr-2">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Booking Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Booking No.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Scheduled On
                  </th>
                  <th scope="col" className="px-6 py-3">
                    closed
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Scheduled
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Cancelled
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
                  <td className="px-6 py-4">56</td>
                  <td className="px-6 py-4">56</td>

                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Male
                  </th>
                  <td className="px-6 py-4">87</td>
                  <td className="px-6 py-4">56</td>
                  <td className="px-6 py-4">56</td>
                  <td className="px-6 py-4">56</td>

                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Male
                  </th>
                  <td className="px-6 py-4">87</td>
                  <td className="px-6 py-4">56</td>
                  <td className="px-6 py-4">56</td>
                  <td className="px-6 py-4">56</td>

                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Male
                  </th>
                  <td className="px-6 py-4">87</td>
                  <td className="px-6 py-4">56</td>
                  <td className="px-6 py-4">56</td>
                  <td className="px-6 py-4">56</td>

                  <td className="px-6 py-4"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-row justify-evenly px-2 py-2 ">
            <div className="mr-6 flex-grow-0 my-2">
              <Button color="green" className="bg-green-900">
                BookingNew
              </Button>
            </div>
            <div className="mr-8 flex-shrink my-2 ">
              <Button color="green" className="bg-green-900">
                Modify Booking
              </Button>
            </div>
            <div className="mr-6 flex-grow my-2 ">
              <Button color="green" className="bg-green-900">
                cancel Booking
              </Button>
            </div>
            <div className="my-2">
              <Button color="green" className="bg-green-900">
                clear
              </Button>
            </div>
          </div>
          <div className="flex flex-nowrap px-2   ">
            <div className="flex   mb-5  ">
              <label
                for="name"
                className="inline-block w-20 mr-4 text-right 
font-thin text-black"
              >
                OTBookingDate
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                class="bg-white border-black border w-86 mr-20 mx-6   h-7   "
              />
            </div>
            <div className="flex mb-5  ">
              <label
                for="name"
                className="inline-block w-20 mr-4 text-right 
font-thin text-black"
              >
                ScheduledOn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                class="bg-white border-black border w-86 mr-20 mx-6   h-7   "
              />
            </div>
          </div>
          <div className="flex flex-nowrap px-2  ">
            <div className="flex   mb-5">
              <label
                for="name"
                className="inline-block w-20 mr-4 text-right 
font-thin text-black"
              >
                BloodGroup
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                class="bg-white border-black border w-24 mr-20 mx-6   h-7   "
              />
            </div>

            <div className="flex mb-5">
              <label
                for="name"
                className="inline-block w-20 mr-4 text-right 
font-thin text-black"
              >
                ScheduledOn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                class="bg-white border-black border w-20 mr-20 mx-6   h-7   "
              />
            </div>

            <div className="flex mb-5">
              <label
                for="name"
                className="inline-block w-20 mr-2 text-right 
font-thin text-black"
              >
                RateCard
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                class="bg-white border-black border w-20 mr-10   h-7   "
              />
            </div>
          </div>
          <div class="grid grid-rows grid-flow-col gap-4 px-2 ">
            <div class="row-span-3 ...">
              <p>Diagnosis</p>
            </div>
            <div class="col-span-2 ...">
              <textarea
                name=""
                id=""
                cols="65"
                rows="5"
                className="border-black border mx-10"
              ></textarea>
            </div>
          </div>

          <div className=" ">
            <label
              for="name"
              className="inline-block w-20 mr-4 text-right 
font-thin text-black"
            >
              OTBookingDate
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder=""
              class="bg-white border-black border w-96 mr-20 mx-6 h-7"
            />
          </div>
          <div className="py-2 px-2">
            <textarea
              name=""
              id=""
              cols="78"
              rows="6"
              className="px-1 border border-black"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otbookingipd;
