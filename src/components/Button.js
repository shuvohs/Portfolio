import React from 'react'

const Button = (props) => {
    
  return (
    <div>
      <button className='bg-black text-white m-6 p-2 rounded-md'>Click here</button>
      
      <p>{props.name}</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Button
