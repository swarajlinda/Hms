import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Checkbox,
} from "@material-tailwind/react";

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
          <input type="text" className="bg-white border-b mx-2 border-black" />
        </div>
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4 ">
          MRNo.
          <input
            type="text"
            name=""
            id=""
            className="bg-white border-b border-black mx-2"
          />
        </div>
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4  w-72 px-34"></div>
        <div className="flex-initial p-4 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4  w-72 px-34"></div>
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-6">
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
              </tbody>
            </table>
          </div>
          <Card
            className="my-2 bg-blue-gray-200 
           border border-black rounded-none mx-2 "
          >
            <div className="flex mx-2  my-2  ">
              <p className=" underline text-black font-semibold ">patient </p>
              <input
                type="text"
                className="border border-black w-11/12 mx-4 mr-2 bg-blue-gray-200"
              />
            </div>

            <div className="flex mx-2">
              <p className="mx-6 text-black ">Sex</p>
              <p className="mx-2 text-black ">Age</p>
              <p className="mx-6 text-black ">Wt.</p>
              <p className="mx-16 text-black ">Dwt.(kg)</p>
              <p className="mx-16 text-black ">Consult</p>
            </div>
            <div className="flex my-2">
              <input
                type="text"
                className="border border-black w-16 mx-2  bg-blue-gray-200"
              />
              <input
                type="text"
                className="border border-black w-16 mx-2  bg-blue-gray-200"
              />
              <input
                type="text"
                className="border border-black w-16 mx-2  bg-blue-gray-200"
              />
              <input
                type="text"
                className="border border-black w-16 mx-2 bg-blue-gray-200"
              />
              <input
                type="text"
                className="border border-black w-2/3 mx-2 bg-blue-gray-200"
              />
            </div>
          </Card>
          <Card className="rounded-none bg-blue-gray-200 border  border-black mx-2 ">
            <div className="mx-2 flex ">
              <p className="  text-black my-2 "> Discharge Summary Prep Time</p>
              <input
                type="number"
                className=" mx-8 w-2/3 my-2 border border-black bg-blue-gray-200"
              />
            </div>
            <div className="flex   ">
              <p className=" text-black mx-4 ">Sr. Consult</p>
              <p className=" text-black mx-16 ">Jr. Consult</p>
              <p className=" text-black mx-16 ">Registrar</p>
            </div>
            <div className="mx-2  ">
              <input
                type="text"
                className="border border-black w-1/6  bg-blue-gray-200 "
              />
              <input
                type="text"
                className="border border-black w-1/6 mx-2   bg-blue-gray-200 "
              />
              <input
                type="text"
                className="border border-black mx-2 w-3/5 bg-blue-gray-200 "
              />
            </div>
            <div className="mx-2">
              <p className=" text-black ">Prepared By </p>
              <div className="flex ">
                <input
                  type="text"
                  className="border border-black my-2 w-3/4   bg-blue-gray-200"
                />
                <p className="my-2 mx-2 text-black ">Is death Summary </p>
                <Checkbox defaultChecked />
              </div>
            </div>
          </Card>
          <Card className="border border-black rounded-none mx-2 my-2 bg-blue-gray-200">
            <div className="flex">
              <p className="mx-2 text-black ">ReviewOn</p>
              <p className="mx-6 text-black "> select Template</p>
            </div>
            <div className="my-2 ">
              <input
                type="text"
                className="bg-blue-gray-200 border border-black mx-2 w-1/12 "
              />
              <input
                type="text"
                className="bg-blue-gray-200 border border-black mx-6 w-10/12 "
              />
            </div>
            <div className="flex">
              <Checkbox defaultChecked />
              <p className="text-black my-2">Line fields</p>
              <input
                type="text"
                className="border border-black bg-blue-gray-200 h-7 my-2 mx-2 w-10/12 "
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="mx-2  mb-2 border border-black bg-blue-gray-200"
            ></textarea>
          </Card>
        </div>

        <div className="col-span-6  border w-full ">
          <Card className="mx-2 my-2  border border-black ">
            <div className=" bg-orange-200  p-5 mx-15 py-2 border">
              <p className="float-left font-bold underline">
                Advice on Discharge
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
          </Card>
          <br />
          <Card className="mx-2 border border-black ">
            <div className="bg-orange-200 p-5 mx-15 py-2 border">
              <p className="float-left font-bold underline">
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

              <div className="my-1">
                <textarea
                  className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                  rows="5"
                  name="textData"
                ></textarea>
              </div>
            </div>
          </Card>
          <br />
          <Card className="mx-2  border border-black ">
            <div className="bg-orange-200 0 p-5 mx-15 py-2 border">
              <p className="float-left font-bold underline">
                Signature of Medical Officer
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
          </Card>
        </div>
      </div>
      {/* / End Table Part */}
      {/*Form Part */}

      {/* End form  Part */}
    </div>
  );
};

export default Dischargesummary;
