import React from 'react'
import { Button } from "@material-tailwind/react";
const BedMapping = () => {
  return (
    <div className='h-screen'> 
    <div className='col-start-1 col-end-7 pt-4 bg-green-900 font-bold text-end text-3xl pr-14 py-4 underline'>
 Bed Mapping
     </div>
     <div className='flex justify-between'>
     <div className='flex justify-start flex-row '>
     <p className='mx-6 my-2'> Select Ward</p>
     <input type="text"  className='h-7 mx-2 my-2   border border-gray-300 bg-blue-gray-200'/>
     <Button className="h-7 my-2 flex items-center gap-3 mx-2 bg-blue-gray-200 font-thin text-black">
     Show    
    </Button>
  </div>
  <div className='flex justify-end flex-row mx-2 my-2  '>
  <Button className='bg-blue-gray-300 mx-2 h-7 flex items-center font-semibold text-black'>PM Jay</Button>
  <Button className='bg-blue-gray-300 mx-2 h-7 flex items-center font-semibold text-black' >Critical</Button>
  <Button className='bg-blue-gray-300 mx-2 h-7 flex items-center font-semibold text-black'>Semi Crictical</Button>
  <Button className='bg-blue-gray-300 mx-2 h-7 flex items-center font-semibold text-black'>VIP</Button>
  <Button className='bg-blue-gray-300 mx-2 h-7 flex items-center font-semibold text-black'>General </Button>
  <Button className='bg-blue-gray-300 mx-2 h-7 flex items-center font-semibold text-black'>Corporate</Button>


  </div>
  </div>
     <div className='grid grid-cols-12 border border-black w-90 h-5/6 mx-4 my-2 '>
     </div>
    </div>
  )
}

export default BedMapping