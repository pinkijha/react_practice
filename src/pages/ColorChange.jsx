import React, { useState } from 'react'

const ColorChange = () => {
    const [color, setcolor ] = useState('red');
     
    const handleColorChanged =() => {
        setcolor(color === 'red' ? 'blue' : 'red');
        console.log(`Color changed to: ${color}`);
    }

  return (
    <div>
        <div className="w-32 h-32" style={{ backgroundColor: color }}></div>
        <p className="mt-2">Current Color: {color}</p>
      <button onClick={handleColorChanged} className='bg-black text-white p-2 rounded-2xl'>Change</button>
    </div>
  )
}

export default ColorChange
