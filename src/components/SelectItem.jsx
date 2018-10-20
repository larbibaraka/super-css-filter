import React from 'react'

function SelectItem({modes, onChange, currentValue}) {
 
  return (
    <div className="select">
        <select onChange={onChange} value="Normal">
        {modes.map((item)=>
          <option key={item.id} value={item.name}  >{item.mode}</option>
        )}      
        </select>
    </div>
  )
}

export default SelectItem;
