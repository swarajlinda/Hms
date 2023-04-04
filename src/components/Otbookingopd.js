import React from "react";
import { Card } from "@material-tailwind/react";
const Otbookingopd = () => {
  return (
    <div>
      <div className="col-start-1 col-end-7 pt-4 bg-green-900 font-bold text-end text-3xl pr-14 py-4 ">
        OTBOOKING (OPD)
      </div>
      <div className="grid grid-cols-12 sm">
        <div className="col-span-8">
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
              <p className="font-thin text-black">EMR</p>
              <input type="text" className="bg-white border-black border" />
            </div>
          </div>
          <Card className=" py-2">
            <div className="px-4">
              <textarea
                name=""
                id=""
                cols="128"
                rows="10"
                className="bg-white border-black border"
              ></textarea>
            </div>
          </Card>
          <div className="py-2 px-2">
            <p className="font-bold text-gray-600">Current Bookings</p>

            <div class="relative overflow-x-auto py-2  ">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 outline-1">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Registration No.
                    </th>
                    <th scope="col" class="px-6 py-3">
                      registration Date
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Patient Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      DOB
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Age
                    </th>
                    <th scope="col" class="px-6 py-3">
                      MrNo.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>

                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                  <tr class="bg-white dark:bg-gray-800">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    ></th>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                    <td class="px-6 py-4"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="py-2 px-2">
            <Card
              color="transparent"
              shadow={true}
              className="my-2  bg-blue-gray-100 py-4"
            >
              <div className="ml-8 py-2 ">
                <label
                  for="name"
                  className="mr-16 text-right 
                                 font-bold text-black"
                >
                  BookOTOn
                </label>
                <input
                  type="date"
                  id="name"
                  name="name"
                  placeholder=""
                  className="flex-1 bg-white border-b  border-gray-400 focus:border-green-400 
                                                                         text-gray-600 placeholder-gray-400
                                                                                   outline-none"
                />
              </div>
              <div className="py-2  ml-8 ">
                <label
                  for="name"
                  className="   mr-16 text-right 
 font-bold text-black "
                >
                  Procedure
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 
                                                                       text-gray-600 placeholder-gray-400
                                                                                 outline-none"
                />
              </div>
              <div className="py-2  ml-8 ">
                <label
                  for="name"
                  className="   mr-16 text-right 
font-bold text-black"
                >
                  pat.Surgery
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 
                                                                     text-gray-600 placeholder-gray-400
                                                                               outline-none"
                />
              </div>
              <div className="py-2  ml-6">
                <label
                  for="name"
                  className="   mr-16 text-right 
font-bold text-black "
                >
                  Anaesthesist
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 
                                                                   text-gray-600 placeholder-gray-400
                                                                             outline-none"
                />
              </div>
              <div className="py-2  ml-8">
                <p className="font-thin text-black">ProvisionalDiagnosis</p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 
                                                                 text-gray-600 placeholder-gray-400
                                                                           outline-none"
                />
              </div>
            </Card>
          </div>
          <div className="py-2 px-2 ">
            <Card>
              <textarea
                name=""
                id=""
                cols="70"
                rows="20"
                className="bg-white border-black border"
              ></textarea>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otbookingopd;
