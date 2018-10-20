import React from 'react'
import SolidBackground from './SolidBackground';
import LinearGradient from './LinearGradient';
import RadialGradient from './RadialGradient';

function PanelOption({type}) {
  switch (type) {
    case 'none':
    return true;
    case 'solidBackground' :
    return(<SolidBackground/>) 
    case 'linearGradient' :
    return(<LinearGradient/>) 
    case 'radialGradient' :
    return(<RadialGradient/>) 
    default:
    return true;   
  }
}

export default PanelOption
