import React from 'react'
import { Button } from "@material-tailwind/react"; 
const TodaysAdmission = () => {
  return (
    <div>
    <div className='col-start-1 col-end-7 pt-4 bg-green-900 font-bold text-end text-3xl pr-14 py-4 underline'>
   TODAYS ADMISSOINS
    </div>
    <div className='grid grid-cols-12'>
    <div className="flex w-max gap-2 px-8 py-2">
      <Button variant="filled" className='bg-blue-gray-200 h-8'></Button>
      <Button variant="filled" className='bg-blue-gray-200 font-thin text-black h-8 text-center'>Days Ago</Button>
     <p className='px-8 py-2 '> Range </p>
     <Button variant="filled" className='bg-blue-gray-200 font-thin text-black h-8 text-center'>31/03/2023</Button>
     <Button variant="filled" className='bg-blue-gray-200 font-thin text-black h-8 text-justify'>31/03/2023</Button>
     <p className='py-3 px-2'> ...</p>
    </div>
  </div>
  <div className='border border-black  h-96  w-90 mx-2 mb-6'>
  <p className='px-2 font-bold text-black'>Admissions</p>
  <textarea name="" id="" cols="192" rows="14" className='mx-1 my-2   border border-black'></textarea>
  </div>
  <div className='border border-black  h-96  w-90 mx-2 mb-6'>
  <p className='px-2 font-bold text-black'>Discharge</p>
  <textarea name="" id="" cols="192" rows="14" className='mx-2 my-2  border border-black'></textarea>
  </div>
  
 

<div id="main" class="flex flex-row-reverse justify-evenly pb-2"> 
<div className="  w-10  flex">
<p className='px-16'>TotalAdmissions</p>
<input type="text" className='h-7 border border-black bg-blue-gray-200'/>
</div> 
<div className="  w-10 flex ">
<p className='px-16'>TOtalDischarges</p>
<input type="text" className='border-black bg-blue-gray-200 border'/>
</div> 

</div> 
  </div>
   
  )
}

export default TodaysAdmission  