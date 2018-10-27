import React from 'react'

function RangeItem({name, value, max,min,onChange,label,unit,step}) {
 
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
          step={step}
          defaultValue={value}
        />
        
        <output>{(name === 'opacity')?(value*100) : value}{unit}</output>
  </div>
  )
}

export default RangeItem;
