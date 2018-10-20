import React from 'react'

function SelectItem({modes, onChange}) {
 
  return (
    <div className="select">
        <select onChange={onChange}>
        {modes.map((item)=>
          <option key={item.id} value={item.name} >{item.mode}</option>
        )}      
        </select>
    </div>
  )
}

export default SelectItem;
