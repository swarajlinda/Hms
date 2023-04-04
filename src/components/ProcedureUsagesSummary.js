import React from 'react'
import { Button } from "@material-tailwind/react";

const ProcedureUsagesSummary = () => {
  return (
    <div className='h-screen  '>
    <div className='col-start-1 col-end-7 pt-4 bg-green-900 font-bold text-end text-3xl pr-14 py-4 underline'>
    procedure\UsageSummary
     </div>
    <div className='border w-90 h-5/6 mx-2 m-2 my-8 p-2 border-black'>
   <div className='flex'>
   <p className=' mx-2  '>Select Procedure </p>
   <input type="text" className='border border-black bg-blue-gray-100 h-7 w-2/4' />
<p className='mx-4  '>Date</p>
<input type="text" className='border border-black bg-blue-gray-100 h-7' />
<Button className="h-7 flex items-center gap-3 mx-2 bg-blue-gray-200 font-thin text-black">
 Show  patients 
</Button>
   </div>
   <div className='grid grid-cols-12'>
   <div className='col-span-4 border border-black px-2 mb-16 my-2'>
   <div className='flex'>
  <p className=' my-2  mx-4'> SearchByPatientName </p>
  <input type="text" className='h-7 my-2 mx-10 border border-black w-3/4' />
  </div>
   <div className='flex '>
  <p className='  mx-4 font-thin text-black '> SearchByPatientName </p>
  <input type="text" className='h-7  mx-10 border border-black w-3/4 ' />
</div>
   <textarea name="" id="" cols="59" rows="32" className='mx-2 py-2 my-2  border border-black'></textarea>
   </div>
   <div className='col-span-8 border border-black mx-2 my-2 mb-16'>
   <div className='flex justify-end flex-row'>
  <p className='font-thin text-black my-2 mx-2'>Range</p>
 <input type="text" className='my-2 mr-2 border border-black' />
 <input type="text" className='my-2  border border-black' />
 <Button className="h-7 flex items-center gap-3 mx-2 my-2 bg-blue-gray-200 font-thin text-black">
 Analyze
 </Button>
   </div>
   <textarea name="" id="" cols="124" rows="36" className='mx-2    border border-black'></textarea>
  
   </div>
   </div>
    </div>
    </div>
  )
}

export default ProcedureUsagesSummary