import React from 'react'
import { Button } from "@material-tailwind/react";
const PatUnderCare = () => {
  return (
    <div className=''>
    <div className="col-start-1 col-end-7 pt-4 bg-green-900 font-bold text-end text-3xl pr-14 py-4 underline">
   Patients Under Care 
  </div>

  <div className='grid grid-cols-12 h-screen'>
  
  <div className='col-span-4 '>
<div className='flex justify-center flex-row'>
<p className='font-thin text-black my-2'>Filter Condition</p>
</div>
<div className='flex'>
<p className='mx-2 '>
Consultant 
</p>
<input type="text"  className='border border-black w-4/5 mx-2 '/>
</div>
<div className='flex my-2 '>
<p className='mx-2 '>
WardName
</p>
<input type="text"  className='border border-black w-4/5 mx-2 '/>
</div>

<p className='mx-2 '>
patient Name 
</p>
<div className='flex'>
<input type="text"  className='border border-black w-4/5  mx-4'/>
<Button className='bg-blue-gray-200 h-7 mr-2 flex items-center'>Show</Button>
</div>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg h-2/3 mx-2 my-2 border border-black">
<div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
<div className="px-2 ">
</div>
 </div>
<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
    <tr>
 
      <th scope="col" className="px-6 py-3">
       Days 
      </th>
      <th scope="col" className="px-6 py-3">
       Ward Name
      </th>
      <th scope="col" className="px-6 py-3">
       Bed Name
      </th>
      <th scope="col" className="px-6 py-3">
        patient Name
      </th>
      <th scope="col" className="px-6 py-3">
        patient Name 
      </th>
      <th scope="col" className="px-6 py-3">
       
      </th>
      <th scope="col" className="px-6 py-3">
      
      </th>
      <th scope="col" className="px-6 py-3">
      
      </th>
      <th scope="col" className="px-6 py-3">
        
      </th>
      <th scope="col" className="px-6 py-3">
        
      </th>
  
    </tr>

  </thead>
  <tbody>
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td className="w-4 p-4">
       
      </td>
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
      <td className="w-4 p-4">
    
      </td>
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
      <td className="w-4 p-4">

      </td>
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
      <td className="w-4 p-4">
     
      </td>
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
      <td className="w-4 p-4">
     
      </td>
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
 
<div className='col-span-3 border border-black w-11/12 h-5/6 mx-2 my-4 '>
<div className='flex'>

</div>
</div>
<div className='col-span-5 border border-black w-11/12 h-5/6 mx-2 my-4 ml-8 '>

</div>
</div>
    </div>
  )
}

export default PatUnderCare