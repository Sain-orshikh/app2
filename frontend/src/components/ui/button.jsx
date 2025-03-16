import React from 'react'

const Button = ({text}) => {
  return (
    <div className='py-2 px-4 rounded-xl bg-gray hover:bg-gray-200'>
        {text}
    </div>
  )
}

export default Button