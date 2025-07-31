import { Input } from 'antd'
import React from 'react'

const ChipsInput = () => {
    const [inputValue, setInputValue] = React.useState('');
    const [chips, setChips] = React.useState([]); 

    const handleInputChange = (e) =>{
    setInputValue(e.target.value)
}

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      const trimmed = inputValue.trim();
      if (trimmed !== "") {
        setChips((prev) => [...prev, trimmed]);
        setInputValue(""); // Clear the input
      }
    }
  };

  const handleDelet = (index) => {
    setChips((prev) => prev.filter((_, i) => i !== index));   
  }


  return (
    <div className='flex flex-col items-center justify-center'>
        <Input value={inputValue} onChange={handleInputChange} onKeyDown={handleKeyPress} type='text' size='large' placeholder='Type a chip and press tag' allowClear />
        <div className='flex flex-wrap max-w-40 mt-4'>
            {chips.map((chip, index) => ( 
               <p key={index} className='my-5 mx-2 border border-blue-900 p-2 rounded-lg'>{chip}
                <span className='text-red-700 cursor-pointer' onClick={() => handleDelet(index)}>X</span></p>

            ))}
            </div>
    </div>
  )
}

export default ChipsInput
