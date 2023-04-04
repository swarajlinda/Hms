import React from "react";
import { Button, Select, Option, Card } from "@material-tailwind/react";
const Otsummary = () => {
  return (
    <div>
      <div className="col-start-1 col-end-7 pt-4 bg-green-900 font-bold text-end text-3xl pr-14 py-4 underline">
        OTBOOKING (OPD)
      </div>

      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <Card className="px-2 py-2">
            <div className="flex justify-around px-2 py-2  bg-gray-100">
              <div className="py-3">
                <button className="bg-blue-gray-100 border-black rounded border h-8 w-24">
                  ShowCurrent{" "}
                </button>
              </div>

              <div className="ml-2 mx-2 my-2 justify-between ">
                <Select label="Date From">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
              <p className="px-2 py-2  font-extrabold justify-between">To</p>
              <div className="ml-5 mx-2 my-2 justify-between   ">
                <Select label="Date to">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
              <div className=" py-4">
                <button className="w-24 h-8 bg-blue-gray-100 border-black rounded  border ">
                  Show{" "}
                </button>
              </div>
            </div>
          </Card>

          <div className="flex flex-row  px-8 py-2   ">
            <div className=" basis-1/4">
              <label className="px-2">Reg No.</label>
              <input
                type="text"
                className="bg-white border border-black w-20"
              />
            </div>
            <div className=" basis-1/4 ">
              <label className="px-2">MrNo.</label>
              <input
                type="text"
                name=""
                id=""
                className="bg-white border border-black w-20 "
              />
            </div>
            <div className="basis-1/4">
              <input
                type="text"
                name=""
                id=""
                className="bg-white border border-black w-full"
              />
            </div>
          </div>

          <Card className="px-2">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
                <div className="px-2 "></div>
              </div>
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      patientName
                    </th>
                    <th scope="col" className="px-6 py-3">
                      DOB
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Sex
                    </th>
                    <th scope="col" className="px-6 py-3">
                      RegistrationNo.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      MrNo.
                    </th>
                    <th scope="col" className="px-6 py-3">
                      ConsulatantName
                    </th>
                    <th scope="col" className="px-6 py-3">
                      WardName
                    </th>
                    <th scope="col" className="px-6 py-3">
                      BedName
                    </th>
                    <th scope="col" className="px-6 py-3">
                      OTDate
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Remarks
                    </th>
                    <th scope="col" className="px-6 py-3">
                      PatientDescription
                    </th>
                    <th scope="col" className="px-6 py-3">
                      SpecimenToLab
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </Card>
          <Card className="px-2 py-2 bg-gray-100 ">
            <div className="px-6">
              RegNo.
              <input
                type="text"
                className="bg-white border border-black px-8 w-full   "
              />
            </div>
            <div className="flex flex-row px-5 ">
              <div className="basis-1/4">
                <p className="mx-2">Sex</p>
                <input
                  type="text"
                  className="bg-white  border border-black w-1/2"
                />
              </div>
              <div className="basis-1/4 ">
                <p className="">DOB</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-white  border border-black w-1/2 "
                />
              </div>
              <div className=" basis-1/2">
                <p className="">Consultant</p>
                <input
                  type="text"
                  name=""
                  id=""
                  className="bg-white  border border-black w-full"
                />
              </div>
            </div>
          </Card>
          <Card className="px-2 py-2 ">
            <div className="flex flex-row px-6 py-4">
              <div className="basis-1/2">
                <label className="px-2">OTStartTime</label>
                <input
                  type="time"
                  className="bg-white  border border-black w-1/2"
                />
              </div>
              <div className="basis-1/2">
                <label className="py-2">Specimen to Lab</label>
                <input
                  type="text"
                  className="bg-white  border border-black w-full"
                />
              </div>
            </div>
            <div className="px-4 basis-1/4">
              <label>Operative Notes</label>
              <input
                type="text"
                className="bg-white  border border-black w-full h-10"
              />
            </div>
          </Card>
          <Card className="px-2 py-2">
            <div class="grid grid-rows-2 grid-flow-col gap-4">
              <div class="row-span-3 ...">
                <p className="px-2 py-3 justify-between">Summary</p>
              </div>

              <div class="row-span-2 col-span-2 ...">
                <textarea
                  name=""
                  id=""
                  cols="100"
                  rows="14"
                  className="bg-white border-black border  mx-2 my-2"
                ></textarea>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-5">
          <div className="px-2 py-2  ">
            <textarea
              name=""
              id=""
              cols="78"
              rows="36"
              className="bg-white border-black border "
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otsummary;
