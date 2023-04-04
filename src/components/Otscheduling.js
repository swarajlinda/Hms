import React from "react";
import {
  Select,
  Option,
  Button,
  Card,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";


const data = [
  {
    
    label: "Procedures",
    value: "html",
    desc: `It really matters and then like it really doesn't matter.
    What matters is the people who are sparked by it. And the people 
    who are like offended by it, it doesn't matter.`,
  },
  {
    label: "Assitants",
    value: "react",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
  {
    label: "Consumables",
    value: "vue",
    desc: `We're not always in the position that we want to be at.
    We're constantly growing. We're constantly making mistakes. We're
    constantly trying to express ourselves and actualize our dreams.`,
  },
  {
    label: "Implants",
    value: "angular",
    desc: `Because it's about motivating the doers. Because I'm here
    to follow my dreams and inspire other people to follow their dreams, too.`,
  },
];
const Otscheduling = () => {
  return (
    <div>
      <div className="col-start-1 col-end-7 pt-4 bg-green-900 font-bold text-end text-3xl pr-14 py-4 underline">
        OT SCHEDULING
      </div>
      
      <div className="grid grid-cols-12 sm">
        <div className="col-span-6 ">
          <div className="flex">
            <div className="flex-initial p-4   border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-2 ">
              <p className="font-bold text-gray-600">Patient Name</p>
              <input type="text" className="bg-white border-b border-black  " />
            </div>

            <div className="flex-initial p-4   border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-2 ">
              <p className="font-bold text-gray-600">Booking Date</p>
              <input type="date" className="bg-white border-b border-black" />
            </div>

            <div className="flex-initial  border-2 border-gray-200 bg-gray-100 border-dashed rounded-lg dark:border-gray-700 py-2 ">
              <p className="font-bold text-gray-600">Day of Booking</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Monday"
                className="bg-white border-b border-black"
              />
            </div>
            <div className="py-4 px-2 ">
              <Button color="gray">Show</Button>
            </div>
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-1/2 text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Scheduled
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Closed
                  </th>
                  <th scope="col" className="px-6 py-3">
                    cancelled
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Booking Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    patient Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Attendent
                  </th>
                  <th scope="col" className="px-6 py-3">
                    RegistrationNo
                  </th>
                  <th scope="col" className="px-6 py-3">
                    DOB
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sex
                  </th>
                  <th scope="col" className="px-6 py-3">
                    MRNo.
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Consultant Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Anesteshia Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ward Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bed Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Remarks
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Prosthecticdescriptions
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
          <div>
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
        </div>
        <div className="col-span-6">
          <Card color="transparent" shadow={true} className="px-2 py-4 bg-blue-gray-100 ">
            <p className="w-full  mx-4  font-extralight underline ">
              OT Details
            </p>
            <div className="px-2 py-2  ">
              <form className="flex flex-wrap">
                <div className="flex items-center mb-5  ">
                  <label
                    for="name"
                    className="inline-block w-20 mr-4 text-right 
font-thin text-black"
                  >
                    PatientName
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    class="bg-blue-gray-50 border-black border-b-2  bort w-96 mr-20 flex-1 py-2 h-7 p-2   
       text-gray-600 placeholder-gray-400
       outline-none"
                  />
                </div>

                <div class="flex items-center mb-5">
                  <label
                    for="twitter"
                    className="inline-block w-10  mr-14 text-right
                            font-thin text-black"
                  >
                    BookingDate
                  </label>
                  <input
                    type="text"
                    id="twitter"
                    name="twitter"
                    placeholder=""
                    className=" bg-blue-gray-50 h-7 flex-1 border-black py-2 mr-2 border-b-2 
              text-gray-600
              placeholder-gray-400 outline-none"
                  />
                </div>

                <div className="flex flex-grow">
                  <div className="flex items-center mb-5">
                    <label
                      for="name"
                      className="inline-block w-10 mr-16 text-right 
font-thin text-black"
                    >
                      GurdianName
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder=""
                      className="bg-blue-gray-50 h-7 flex-1 py-2 border-b-2 border-black    
       text-gray-600 placeholder-gray-400
       outline-none"
                    />
                  </div>

                  <div class="flex items-center mb-5">
                    <label
                      for="twitter"
                      className="inline-block w-20  text-right
                            font-thin text-black"
                    >
                      Reg No.
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      placeholder=""
                      className="bg-blue-gray-50 border-black flex-1 h-7 py-2 border-b-2 
              text-gray-600
              placeholder-gray-400 outline-none"
                    />
                  </div>

                  <div className="flex items-center mb-5">
                    <label
                      for="twitter"
                      class=" px-2 inline-block w-10 mr-6  text-right
                           font-thin text-black"
                    >
                      Mobile
                    </label>
                    <input
                      type="text"
                      id="twitter"
                      name="twitter"
                      placeholder=""
                      class="focus:border-green-400 h-7 bg-blue-gray-50 flex-1 py-2 border-b-2 border-black 
              text-gray-600
              placeholder-gray-400 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Card>
         
          <Card color="transparent" shadow={true} className="px-2 py-2 bg-blue-gray-100 ">
            <p className="w-full  mx-2  font-extralight underline ">
              Fee/Charges
            </p>
            <div className="mx-2 flex flex-wrap">
              <div className="flex items-center mb-5 ">
                <label
                  for="name"
                  className="inline-block w-20 mr-4 text-right 
 font-thin text-black"
                >
                  BookingNo.
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  className="w-96 mr-20 h-7 flex-1 py-2 border  border-gray-400 focus:border-green-400 
        text-gray-600 placeholder-gray-400
        outline-none"
                />
              </div>
              <div className="flex items-center mb-5">
                <label
                  for="twitter"
                  className="inline-block w-20 mr-16 text-right
                            font-thin text-black"
                >
                  ScheduledOn
                </label>
                <input
                  type="date"
                  id="twitter"
                  name="twitter"
                  placeholder=""
                  className="flex-1 py-2 px-4 h-7  border-b-2 border-gray-400  
              text-gray-600
              placeholder-gray-400 outline-none"
                />
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center mb-5 mx-2">
                <label
                  for="twitter"
                  className="inline-block w-20 mr-10 text-right
                            font-thin  text-black"
                >
                  Anesthesiologist
                </label>
                <input
                  type="text"
                  className="bg-white  border-black w-96 focus:border-green-400 "
                />
              </div>
              <div className="flex items-center  mb-5 mx-2">
                <label
                  for="twitter"
                  className="inline-block w-25 mr-10 text-right
                           font-thin text-black"
                >
                  AnesthesiaType
                </label>
                <Select size="lg" label="Select Version" className="bg-white h-8 text-center">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
            </div>

            <div className="flex flex-grow">
              <div className="flex items-center mb-5">
                <div className="flex w-72">
                  <label
                    for="name"
                    className="px-2 inline-block w-20 mr-2 text-right 
font-thin text-black"
                  >
                    RoomNo.
                  </label>
                  <Select size="md" label="Room No." className="bg-white h-8">
                    <Option>Material Tailwind HTML</Option>
                    <Option>Material Tailwind React</Option>
                    <Option>Material Tailwind Vue</Option>
                    <Option>Material Tailwind Angular</Option>
                    <Option>Material Tailwind Svelte</Option>
                  </Select>
                </div>
              </div>

              <div class="flex items-center mb-5 px-2">
                <label
                  for="twitter"
                  className="inline-block w-20 mr-8 text-right
                            font-thin text-black"
                >
                  SurgeryType
                </label>
                <Select size="lg" label="Surgery Type" className="bg-white h-8">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>

              <div className="flex items-center mb-5">
                <label
                  for="twitter"
                  class="inline-block w-5 mr-12 text-right
                            font-thin text-black"
                >
                  CrNo.
                </label>
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder=""
                  class="flex-1 py-2 h-7 border-b-2 border-gray-400  
              text-gray-600
              placeholder-gray-400 outline-none "
                />
              </div>
            </div>
            <div className="flex flex-grow ">
              <p className="px-2 py-2 font-thin text-black">Blood Group</p>
              <div className="flex items-center mb-5 ">
                <Select size="lg" label="Blood Group" className="bg-white h-8" >
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
              <div className=" px-2 flex items-center mb-5">
                <label
                  for="twitter"
                  class="inline-block w-5 mr-14 text-right
                                 font-thin text-black"
                >
                  B.weight
                </label>
                <input
                  type="text"
                  id="twitter"
                  name="twitter"
                  placeholder=""
                  class="flex-1 py-2 border-b-2 h-7 w-10 border-gray-400  
                    text-gray-600
                    placeholder-gray-400 outline-none"
                />
              </div>
            </div>

            <div className="flex">
              <label
                for="name"
                className=" px-2 inline-block w-20 mr-16 text-right 
        font-thin text-black"
              >
                ExtraRequirement
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                className=" px-2    flex-1 py-2 border-b-2 h-7 border-gray-400 focus:border-green-400 
       text-gray-600 placeholder-gray-400
       outline-none"
              />
            </div>

            <div className="flex">
              <div className="flex-initial  py-4 mr-12">
                <label className="font-thin  text-black px-2 py-2 ">
                  Blood Requirment{" "}
                </label>
                <input type="checkbox" name="" id="" />
              </div>
              <div className="flex-initial px-2 py-4">
                <label className="font-thin text-black px-2 py-2 ">
                  Confirm to Schedule{" "}
                </label>
                <input type="checkbox" name="" id="" />
              </div>
            </div>
            <div className="flex flex-grow ">
              <p className="px-2 py-2 font-thin text-black">Rate Card</p>
              <div className="flex items-center mb-5 ">
                <Select size="lg" label="Rate Card" className="bg-white h-8">
                  <Option>Material Tailwind HTML</Option>
                  <Option>Material Tailwind React</Option>
                  <Option>Material Tailwind Vue</Option>
                  <Option>Material Tailwind Angular</Option>
                  <Option>Material Tailwind Svelte</Option>
                </Select>
              </div>
              <div className=" px-2 flex items-center h-7 mb-4 text-center">
                <Button size="md" className="bg-blue-gray-500 h-8 text-center">
                  apply
                </Button>
              </div>
            </div>

            <div className="flex">
              <label
                for="name"
                className=" px-2 inline-block w-19 mr-16 text-right 
      font-thin text-black"
              >
                prosthesticsDescription
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder=""
                className=" mr-18 mb-4 px-2 flex-1 h-7 py-2 border-b-2 border-gray-400 focus:border-green-400 
     text-gray-600 placeholder-gray-400
     outline-none"
              />
            </div>
          </Card>
         
            <div class="grid grid-rows-3 grid-flow-col gap-4">
              <div class="row-span-3 px-2 py-4  ">
                <div className=" bg-blue-gray-100  p-5 mx-15 py-5 px-5 border">
                  <p className="float-left font-bold">Opreative Disagnosis </p>
                  <div className="my-3">
                    <textarea
                      className="w-full px-3 py-1 rounded outline-blue-200 border border-gray-200"
                      rows="12"
                      name="textData"
                    ></textarea>
                  </div>
                </div>
              </div>
              <Card color="transparent" shadow={true} className="my-2  bg-blue-gray-100 py-4">
              <div className="row-span-2">
                <div className="ml-8 py-2 ">
                  <label
                    for="name"
                    className="mr-10 text-right 
                 font-bold text-gray-600"
                  >
                    TotalsurgeonFee
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1 bg-white border-b w-11 mx-8 border-gray-400 focus:border-green-400 
                                                                                       text-gray-600 placeholder-gray-400
                                                                                                 outline-none"
                  />
                </div>
                <div className="py-2  ml-8 ">
                  <label
                    for="name"
                    className="   mr-16 text-right 
               font-bold text-gray-600"
                  >
                    SurgeonDesc
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 w-11 mx-8
                                                                                     text-gray-600 placeholder-gray-400
                                                                                               outline-none"
                  />
                </div>
                <div className="py-2  ml-8 ">
                  <label
                    for="name"
                    className="   mr-10 text-right 
             font-bold text-gray-600"
                  >
                    AssitantDoct.Fee
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1  border-b-2 border-gray-400 focus:border-green-400  w-11 mx-8
                                                                                   text-gray-600 placeholder-gray-400
                                                                                             outline-none"
                  />
                </div>
                <div className="py-2  ml-8">
                  <label
                    for="name"
                    className="   mr-14 text-right 
           font-bold text-gray-600"
                  >
                    Consumabales
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1  border-b-2 border-gray-400 focus:border-green-400  w-11 mx-8
                                                                                 text-gray-600 placeholder-gray-400
                                                                                           outline-none"
                  />
                </div>
                <div className="py-2  ml-8">
                  <label
                    for="name"
                    className="   mr-16 text-right 
         font-bold text-gray-600"
                  >
                    ImplantCost
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 w-11 mx-12
                                                                               text-gray-600 placeholder-gray-400
                                                                                         outline-none"
                  />
                </div>
                <div className="py-2  ml-8">
                  <label
                    for="name"
                    className="   mr-16 text-right 
       font-bold text-gray-600"
                  >
                    Other Fee name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 w-11 mx-6
                                                                             text-gray-600 placeholder-gray-400
                                                                                       outline-none"
                  />
                </div>
                <div className="py-2  ml-8">
                  <label
                    for="name"
                    className="   mr-16 text-right 
     font-bold text-gray-600"
                  >
                    AnotherFee
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 w-11 mx-12
                                                                           text-gray-600 placeholder-gray-400
                                                                                     outline-none"
                  />
                </div>
                <div className="py-2  ml-8">
                  <label
                    for="name"
                    className="   mr-16 text-right 
   font-bold text-gray-600"
                  >
                    AnesthesiaFee
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 w-11 mx-8
                                                                         text-gray-600 placeholder-gray-400
                                                                                   outline-none"
                  />
                </div>
                <div className="py-2  ml-8">
                  <label
                    for="name"
                    className="   mr-16 text-right 
 font-bold text-gray-600"
                  >
                    OTcharge
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1  border-b-2 border-gray-400 focus:border-green-400 w-11 mx-12
                                                                       text-gray-600 placeholder-gray-400
                                                                                 outline-none"
                  />
                </div>
                <div className="py-2  ml-8">
                  <label
                    for="name"
                    className="   mr-16 text-right 
font-bold text-gray-600"
                  >
                    TotalFee :
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=""
                    className=" flex-1 mt border-b-2 border-gray-400 focus:border-green-400 w-11 mx-
                                                                     text-gray-600 placeholder-gray-400
                                                                               outline-none"
                  />
                </div>
              </div>
              </Card>
            </div>
        
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Otscheduling;
