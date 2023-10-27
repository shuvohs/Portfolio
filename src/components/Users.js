import React from 'react'

const User = {
    name: 'Heady Lammer',
    imgurl : '/' ,
    imageSize: 90 ,
    
}

const Users = () => {
  return (
    <div>
      <h1>{User.name}</h1>
      <img src={User.imgurl} alt='' className={User.imageSize}/>
    </div>
  )
}

export default Users