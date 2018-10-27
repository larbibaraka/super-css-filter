import React from 'react'

function SelectItem({modes, onChange, currentValue, name}) {
 
  return (
    <div className="select">
        <select onChange={onChange} value={currentValue} name={name}>
        {modes.map((item)=>
          <option key={item.id} >{item.mode}</option>
        )}      
        </select>
    </div>
  )
}

export default SelectItem;
