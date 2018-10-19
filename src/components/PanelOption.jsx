import React from 'react'
import SolidBackground from './SolidBackground';
function PanelOption({type}) {
  switch (type) {
    case 'none':
    return true;
    case 'solidBackground' :
    return(<SolidBackground/>) 
    case 'linearGradient' :
    return(<SolidBackground/>) 
    case 'radialGradient' :
    return(<SolidBackground/>) 
    default:
    return true;   
  }
}

export default PanelOption
