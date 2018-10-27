import React from 'react'

function SelectItem({modes, onChange, currentValue, name}) {
 
  return (
    <div className="select">
        <select onChange={onChange}  name={name}>
        {modes.map((item)=>
          <option key={item.id} value={item.mode}>{item.mode}</option>
        )}      
        </select>
    </div>
  )
}

export default SelectItem;
