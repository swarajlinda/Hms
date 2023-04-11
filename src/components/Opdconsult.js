import React from "react";
import {
  Button,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Select,
  Option,
} from "@material-tailwind/react";

const data = [
  {
    label: "Calculation",
    value: "html",
  },
  {
    label: "Summary",
    value: "react",
    desc: ``,
  },
  {
    label: "prevRecords",
    value: "vue",
    desc: ``,
  },
];

const Opdconsult = () => {
  return (
    <div>
      <div className="col-start-1 col-end-7 pt-4 bg-green-900   font-bold text-end text-3xl pr-14 py-4 underline">
        OPD CONSULTAIONS
      </div>
      <div className="grid grid-cols-12 bg-blue-gray-200">
        <div className="col-span-6">
          <p className=" mx-4 font-semibold text-black over underline ">
            Select Consultant
          </p>
          <div className="flex flex-row  ">
            <input type="number" className=" mx-3 border border-black " />
            <input type="text" className="w-1/2 border border-black" />
            <div className="flex justify-end ">
              <Button className="bg-blue-gray-500 h-7  mx-16 flex items-center">
                Sync
              </Button>
            </div>
          </div>
          <div className="flex px-2">
            <p className=" mx-2 font-semibold underline ">Patient Name</p>
            <p className="mx-10 font-semibold underline">EMR NO.</p>
            <p className=" font-semibold underline ">Mobile No.</p>
          </div>
          <div className="flex">
            <input type="text" className="border border-black w-32 mx-4 " />
            <input type="text" className="border border-black w-24 mx-2 " />
            <input type="text" className="border border-black w-24 mx-2 " />
          </div>
          <div className="mx-4 my-2 ">
            <textarea
              name=""
              id=""
              cols="90"
              rows="31"
              className="border border-black bg-blue-gray-200"
            ></textarea>
          </div>
        </div>

        <div className="col-span-6 row-span-2">
          <div className="w-1/2 my-4  ">
            <Tabs value="html">
              <TabsHeader>
                {data.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    {label}
                  </Tab>
                ))}
              </TabsHeader>
              <TabsBody>
                {data.map(({ value, desc }) => (
                  <TabPanel key={value} value={value}>
                    {desc}
                  </TabPanel>
                ))}
              </TabsBody>
            </Tabs>
          </div>
          <div className="flex flex-row ">
            <p className="my-2 font-bold text-black underline ">Prescription</p>
            <div className="mx-2 w-1/3">
              <Select label="Select Version" className="bg-white">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
            </div>
            <div>
              <Button className="bg-blue-gray-400 hover:bg-gray-400 text-black ">
                Print
              </Button>
              <Button className="bg-blue-gray-400 mx-8 text-black hover:bg-gray-400  ">
                Preview
              </Button>
              <Button className="bg-blue-gray-400 mx-8 text-black hover:bg-gray-400 ">
                Save Prescription
              </Button>
            </div>
          </div>

          <div class="">
            <div className="mr-4">
              <div className="flex my-8 mx-14">
                <p className="mx-14 font-bold text-black">R Eye</p>
                <p className="mx-6 font-bold text-black   ">L Eye</p>
              </div>
              ss
              <div className="flex">
                <p className="text-blue-gray-900 font-semibold">External eye</p>
                <input
                  type="text"
                  className="border border-black w-16 mx-4  "
                />

                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex my-2  ">
                <p className="text-blue-gray-900 font-semibold">External eye</p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">External eye</p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">External eye</p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">External eye</p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
                <p className="font-bold underline">R Eye</p>
                <div className="flex justify-items-center mx-5">
                  <input type="text" className="border border-black w-16 " />

                  <div className="flex justify-items-center mx-5">
                    <input type="text" className="border border-black w-16 " />

                    <div className="flex justify-items-center mx-5">
                      <input
                        type="text"
                        className="border border-black w-16 "
                      />
                      <div className="flex justify-items-center mx-5">
                        <input
                          type="text"
                          className="border border-black w-16 "
                        />
                        <div className="flex justify-items-center mx-5">
                          <input
                            type="text"
                            className="border border-black w-16 "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">External eye</p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
                <p className="font-bold underline">L Eye</p>
                <div className="flex justify-items-center mx-5">
                  <input type="text" className="border border-black w-16 " />
                  <div className="flex justify-items-center mx-5">
                    <input type="text" className="border border-black w-16 " />
                    <div className="flex justify-items-center mx-5">
                      <input
                        type="text"
                        className="border border-black w-16 "
                      />
                      <div className="flex justify-items-center mx-5">
                        <input
                          type="text"
                          className="border border-black w-16 "
                        />
                        <div className="flex justify-items-center mx-5">
                          <input
                            type="text"
                            className="border border-black w-16 "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">External eye</p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">External eye</p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">
                  External eye{" "}
                </p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex">
                <p className="text-blue-gray-900 font-semibold">
                  External eye{" "}
                </p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">
                  External eye{" "}
                </p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex my-2 ">
                <p className="text-blue-gray-900 font-semibold">
                  External eye{" "}
                </p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
              <div className="flex">
                <p className="text-blue-gray-900 font-semibold">
                  External eye{" "}
                </p>
                <input type="text" className="border border-black w-16 mx-4 " />
                <input
                  type="text"
                  className="border border-black w-16 mx-10 "
                />
              </div>
            </div>
          </div>
          <div className="flex py-4 space-x-2">
            <div className="bg-orange-200 p-5 mx-15 py-5 border basis-1/2 h-1/2   border-black">
              <p className="float-left font-bold">Complaints</p>
              <input type="text" className="px--2 mx-2" />
              <div className="flex float-right space-x-5 mb-3 mx-4">
                <button className="border shadow-md rounded px-3 py-1 h-7 bg-white">
                  Save
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

            <div className="bg-orange-200 p-5 mx-15 py-5 border basis-1/2 h-1/2 border-black">
              <p className="float-left font-bold">Examination</p>
              <input type="text" className="px--2 mx-2" />
              <div className="flex float-right space-x-5 mb-3 mx-2">
                <button className="border shadow-md rounded px-3 py-1 bg-white h-7">
                  Save
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
          <div className="flex flex-row py-4 space-x-2">
            <div className="bg-orange-200 p-5 mx-15 py-5 border basis-1/2 h-1/2   border-black">
              <p className="float-left font-bold">Complaints</p>
              <input type="text" className="px--2 mx-2" />
              <div className="flex float-right space-x-5 mb-3 mx-4">
                <button className="border shadow-md rounded px-3 py-1 h-7 bg-white">
                  Save
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

            <div className="bg-orange-200 p-5 mx-15 py-5 border basis-1/2 h-1/2 border-black">
              <p className="float-left font-bold">Examination</p>
              <input type="text" className="px--2 mx-2" />
              <div className="flex float-right space-x-5 mb-3 mx-2">
                <button className="border shadow-md rounded px-3 py-1 bg-white h-7">
                  Save
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
      </div>
    </div>
  );
};

export default Opdconsult;
