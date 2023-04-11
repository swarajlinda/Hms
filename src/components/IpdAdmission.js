import React from "react";
import {
  Checkbox,
  Button,
  Card,
  Select,
  Option,
} from "@material-tailwind/react";
const IpdAdmission = () => {
  return (
    <div>
      <div className="col-start-1 col-end-7 pt-6 bg-green-900 font-bold text-end text-3xl pr-14 py-4 underline">
        IPD ADMISSION
      </div>
      <div className="flex flex-row mx-4 my-2 underline bg-gray-100 w-full">
        <Checkbox color="blue" defaultChecked className=" " />
        <div className="flex justify-start my-3 bg-gray-100">
          <p className="font-extrabold text-gray-600 my-2">Existing </p>
          <Button
            size="sm"
            className="mx-2 h-7 bg-blue-gray-300 text-black font-thin"
          >
            Get..[f2]
          </Button>
        </div>
        <div className="mx-1 my-3 bg-gray-100">
          <p className="font-bold text-black my-2"> EMR NO.</p>
        </div>
        <div className="flex-initial p-2 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4 ">
          <input type="text" className="bg-white border-b border-black" />
        </div>
        <div className="my-3 flex flex-row">
          <p className="font-extrabold text-gray-600 my-2"> Valid</p>
          <Checkbox color="blue" defaultChecked />
        </div>
        <div className="  p-2 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-4 font-bold text-black">
          Registration No.
          <input type="text" className="bg-white border-b border-black mx-2 " />
        </div>
        <div className="flex-initial p-2 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700   font-bold text-black">
          Regdate.
          <input type="text" className="bg-white border-b border-black mx-2 " />
          <Checkbox color="blue" defaultChecked className="" />
        </div>
      </div>
      <div className="flex flex-row justify-start mx-3 ">
        <div className="flex-initial p-2 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700   font-bold text-black">
          Last Seen EMR
          <input type="text" className="bg-white border-b border-black mx-2 " />
        </div>
        <div className="flex-initial p-2 border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700   font-bold text-black">
          Last Reg.No
          <input type="text" className="bg-white border-b border-black mx-2 " />
        </div>
      </div>

      <div className="border border-gray-500 w-9/12 px-4 mx-2 py-2 my-4">
        <Card className="w-full px-4 py-2 justify-between ">
          <div className="flex mx-2">
            <p className="font-thin text-black">Patients Name : </p>
            <input type="text" className="border-b border-black w-4/12 mx-2" />
            <p className="mx-4 font-thin text-black">Address :</p>
            <input type="text" className="border-b border-black w-4/12 mx-14" />
          </div>

          <div className="flex mx-2 my-4  ">
            <p className="font-thin text-black">Fathers Name :</p>
            <input type="text" className="border-b border-black w-4/12 mx-2" />
            <p className=""></p>
            <input type="text" className="border-b border-black w-5/12 mx-14" />
          </div>

          <div className="flex mx-2 ">
            <p className="font-thin text-black"> Attendant : </p>
            <input type="text" className="border-b border-black   mx-2" />
            <p className="mx-2 font-thin text-black">Relation :</p>
            <div className="w-60 mx-6 h-7">
              <Select label="Select Relation" className="h-7">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <input
              type="text"
              className="border-b border-black w-4/12 mx-12 "
            />
          </div>

          <div className="flex mx-2 my-2 ">
            <p className="font-thin text-black">Mobile No. :</p>
            <input type="text" className="border-b border-black  mx-2 h-7" />
            <p className="font-thin text-black">Sex :</p>
            <div className="h-7 mx-16 w-60">
              <Select label="Select Sex" className="h-7">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <p className="my-2 font-thin text-black">State :</p>
            <div className="mx-2 w-60">
              <Select label="Select State" className="h-7  ">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
              </Select>
            </div>
            <p className="my-2 mx-4 font-thin text-black"> Pin :</p>
            <input
              type="text"
              className="border-b border-black  h-7 w-16 mx-4 "
            />
          </div>

          <div className="flex mx-2  ">
            <p className="h-7 font-thin text-black">DOB : </p>
            <input
              type="text"
              className="border-b border-black w-11 mx-4 h-5 flex items-center "
            />
            <p className=""> </p>
            <div className="w-30 h-7 mx-2 ">
              <Select label="" className="h-7">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
              </Select>
            </div>
            <div>
              <input
                type="text"
                placeholder="_/_/__"
                className="border-b border-black w-16 mx-4 "
              />
            </div>
            <div>
              <input type="text" className="border-b border-black" />
            </div>
            <div className="flex mx-2">
              <p className="font-thin text-black">City</p>
              <input type="text" className="mx-2 border-b border-black" />
              <input
                type="text"
                className="  border-b border-black w-12 mx-6"
              />
            </div>
          </div>
        </Card>

        <Card className="w-full px-2 py-2 my-2">
          <div className="flex mx-2">
            <p className="font-thin text-black">Department : </p>
            <div className="mx-2 ">
              <Select label=" " className="h-7">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
              </Select>
            </div>
            <div className="flex justify-end">
              <p className="font-thin text-black">Attd. Mobile :</p>
              <input
                type="text"
                className="border-b border-black w-5/12 mx-2  h-7"
              />
            </div>
            <div className="flex">
              <p className="font-thin text-black">Provisional Diagnosis:</p>
              <input
                type="text"
                className="h-7 mx-2   border border-black w-96"
              />
            </div>
          </div>
          <div className="flex mx-2   ">
            <p className="font-thin text-black">Referred By :</p>
            <input type="text" className="border-b border-black h-7  mx-2" />
            <p className="font-thin text-black">Ref.Code </p>
            <div className="mx-2 ">
              <Select label="Ref. Code  " className="h-7">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
              </Select>
            </div>
            <textarea
              name=""
              id=""
              cols="59"
              rows=""
              className="border border-black mx-2  "
            ></textarea>
          </div>
          <div className="flex mx-2 my-2  ">
            <p className="font-thin text-black">Consultant1 :</p>
            <input type="text" className="border-b border-black   mx-2" />
            <p className="font-thin text-black">conslt2</p>
            <input type="text" className="border-b border-black mx-10" />
            <p className="font-thin text-black">Critically</p>
            <input type="text" className="border-b border-black mx-8  " />
            <p className="font-thin text-black mx-1">Wt.</p>
            <input type="text" className="border border-black w-24 mx-16" />
          </div>
          <div className="w-30 h-7 mx-2 ">
            <Select label="" className="h-7">
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
            </Select>
          </div>
          <div className="flex mx-2 my-2 ">
            <p className="font-thin text-black">Corporate :</p>
            <div className="mx-2 h-7 w-6/12">
              <Select label="Select corporate" className="h-7">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <p className="mx-7 text-black font-thin ">OPDRegNo. :</p>
            <input type="number" className="border  border-black   mx-14" />
          </div>
          <div className="flex  my-2 ">
            <div className="flex">
              <p className="font-thin text-black mx-2 ">Inclusuion Date:</p>
              <input type="date" className="border border-black h-7" />
            </div>
            <div className="flex">
              <p className="font-thin text-black mx-2 ">Service No.</p>
              <input type="text" className="border-b border-black h-7" />
            </div>
            <div className="flex">
              <p className="font-thin text-black mt-2 mx-2 ">SelectWard </p>
              <div className="mx-2 h-7 w-6/12">
                <Select label="Select corporate" className="   h-7">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
              <div className="flex my-2 mx-2 ">
                <p className="font-thin text-black ">Registrationfee </p>
                <input
                  type="text"
                  className="border-b border-black w-4/12 mx-5"
                />
              </div>
            </div>
          </div>
          <div className="flex mx-2 ">
            <p className="font-bold text-black mt-2 ">Rate Catrd : </p>
            <input type="text" className="border border-black mx-2 h-7 " />
            <p className="text-thin text-black mt-2 ">Cashless </p>
            <Checkbox color="blue" defaultChecked />
            <p className="font-thin text-black mt-2 mx-8 ">Admission Bed </p>
            <div className="w-30 h-7 ">
              <Select label="Admission Bed " className="h-7 ">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
              </Select>
            </div>
            <p className="text-black font-thin mt-2 mx-2  ">Mrd Charge </p>
            <input
              type="text"
              className="h-7 border-b border-black w-2/12 mx-16"
            />
          </div>
        </Card>
      </div>
      <div className="w-9/12 border border-black mx-2">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            </tbody>
          </table>
        </div>
      </div>
      <div className="px-2 ">
        <p className="mx-2 "></p>
      </div>
    </div>
  );
};

export default IpdAdmission;
