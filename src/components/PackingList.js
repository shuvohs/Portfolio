import React from 'react'


const Item = ({isPacked, name}) => {
    let itemcontent = name;
    if (isPacked) {
      itemcontent = name + "✔" 
  }
  
  return (
    <li>
        {itemcontent}
    </li>
  )
}

const PackingList = () => {
    
  return (
    <div>
      <h1>Sally Rides Packing LIst</h1>
      <ul>
        <Item isPacked={true} name= "Space suit" />
        <Item isPacked={true} name= "helmet with golden leaf " />
        <Item isPacked={false} name= "Photo of tam" />
      </ul>
    </div>
  )
}

export default PackingList