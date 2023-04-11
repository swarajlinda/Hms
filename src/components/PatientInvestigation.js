import React from "react";
import { Button } from "@material-tailwind/react";
const PatientInvestigation = () => {
  return (
    <div>
      <div className="col-start-1 col-end-7 pt-6 bg-green-900 font-bold text-end text-3xl pr-14 py-4 ">
        PATIENT INVESTIGATIONS
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <p className="my-2 mx-2 font-bold text-gray-800 underline">
            Current patients{" "}
          </p>
          <div>
            <input type="text" className="mx-2 border border-black w-2/3" />
            <input type="text" className="mx-2 border border-black " />
          </div>
          <div className="flex">
            <p className="font-bold text-gray-800 underline  mx-2 my-2 ">
              Reg No.
            </p>
            <input type="text" className="border-b border-black h-7 my-2" />
            <p className="my-2 mx-2 text-gray-800 underline  font-bold">Name</p>
            <input
              type="text"
              className="border-b border-black h-7 my-2 w-1/2 mx-2"
            />
          </div>
          <div
            className="border border-black
          mx-2 "
          >
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800"></div>
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
                  <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                  <tr className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
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
                </tbody>
              </table>
            </div>
          </div>
          <div className="mx-2 my-2">
            <textarea
              name=""
              id=""
              cols="80"
              rows="15  "
              className="border border-black "
            ></textarea>
          </div>
        </div>
        <div className="col-span-7">
          <div className="mx-4 my-2">
            <p className=" font-bold underline text-gray-800">Total pages</p>
            <div className="my-2 flex ">
              <Button className="bg-blue-gray-200 h-7 mr-2 flex items-center">
                Page 1
              </Button>
              <Button className="bg-blue-gray-200 h-7 mr-2 flex items-center">
                Page 2
              </Button>
              <Button className="bg-blue-gray-200 h-7 mr-2 flex items-center">
                Page 3
              </Button>
              <Button className="bg-blue-gray-200 h-7 mr-2 flex items-center">
                Page 4
              </Button>
              <Button className="bg-blue-gray-200 h-7 mr-2 flex items-center">
                Page 5
              </Button>
              <Button className="bg-blue-gray-200 h-7 mr-2 flex items-center">
                Page 6
              </Button>
              <Button className="bg-blue-gray-200 h-7 mr-2 flex items-center">
                Page 7
              </Button>
              <Button className="bg-blue-gray-200 h-7 mr-2 flex items-center">
                Page 8
              </Button>
            </div>
            <div>
              <textarea
                value=""
                name=""
                id=""
                cols="110"
                rows="32"
                className="border border-black "
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInvestigation;
