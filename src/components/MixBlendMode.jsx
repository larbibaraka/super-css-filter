import React from 'react'

function MixBlendMode() {
  const modes = [
    {id: 1 , mode :'Overlay'},
    {id: 2 , mode :'Normal'},
    {id: 3 , mode :'Multiply'},
    {id: 4 , mode :'Screen'},
    {id: 5 , mode :'Darken'},
    {id: 6 , mode :'Lighten'},
    {id: 7 , mode :'Color-dodge'},
    {id: 8 , mode :'Color-burn'},
    {id: 9 , mode :'Hard-light'},
    {id: 10 , mode :'Soft-light'},
    {id: 11 , mode :'Difference'},
    {id: 12 , mode :'Exclusion'},
    {id: 13 , mode :'Hue'},
    {id: 14 , mode :'Saturation'},
    {id: 15 , mode :'Color'},
    {id: 16 , mode :'Luminosity'},
    {id: 17 , mode :'Initial'},
    {id: 18 , mode :'Inherit'},
    {id: 19 , mode :'Unset'}
  ]
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

export default MixBlendMode
