import { Input } from 'antd'
import React from 'react'

const ChipsInput = () => {
    const [inputValue, setInputValue] = React.useState('');
  return (
    <div className='flex flex-col items-center justify-center'>
        <Input onChange={()=>setInputValue()} type='text' size='large' placeholder='Type a chip and press tag' allowClear />
    </div>
  )
}

export default ChipsInput
