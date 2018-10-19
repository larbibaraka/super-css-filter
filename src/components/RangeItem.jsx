import React from 'react'

function RangeItem({name, value, max,min,onChange,label,unit}) {
 
  return (
    <div className="div-wrapper">
        <label className="label">{label} :</label>
        <input 
          className="slider has-output is-fullwidth"  
          type="range"
          onInput={onChange}
          name ={name}
          min = {min}
          max ={max}
          defaultValue={value}
        />
        <output>{value}{unit}</output>
  </div>
  )
}

export default RangeItem;
