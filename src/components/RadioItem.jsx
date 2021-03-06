import React from 'react'

function RadioItem({name, value,onChange,label}) {
 
  return (
    <div className="field">
                <input 
                    type="radio" 
                    name={name}
                    value={value}
                    onChange={onChange}
                  />
           <label>{label}</label>
   </div>
  )
}

export default RadioItem;
