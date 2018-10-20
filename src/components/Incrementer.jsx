import React from 'react'

function incrementer({name, value , min, max, onChange}) {
  return (
            <input
             type="number"
             min={min}
             max={max}
             defaultValue={value}
             name={name}
             onChange = {onChange}
           />
  )
}

export default incrementer
