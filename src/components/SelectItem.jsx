import React from 'react'

function SelectItem({modes}) {
 
  return (
    <div className="select">
        <select>
        {modes.map((item)=>
          <option key={item.id}>{item.mode}</option>
        )}      
        </select>
    </div>
  )
}

export default SelectItem;
