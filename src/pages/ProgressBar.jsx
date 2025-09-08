import React from 'react'

const ProgressBar = () => {
  return (
    <div>
      <div>
        <div className='w-96 h-6 bg-gray-200 rounded-full m-2'>
          <div className='h-6 bg-blue-500 rounded-full' style={{width: '50%'}}></div>
        </div>
      </div>
      <div className='flex gap-2 m-2'>        
      <button className='bg-gray-200 rounded-sm p-1 border cursor-pointer'>-10%</button>
      <button className='bg-gray-200 rounded-sm p-1 border cursor-pointer'>+10%</button>
      </div>
    </div>
  )
}

export default ProgressBar
