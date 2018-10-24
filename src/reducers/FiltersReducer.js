import {
          CHANGE_BLUR_FILTER ,
          CHANGE_HUE_ROTATE_FILTER ,
          CHANGE_INVERT_FILTER,
          CHANGE_GRAY_SCALE_FILTER,
          CHANGE_SEPIA_FILTER,
          CHANGE_SATURATION_FILTER,
          CHANGE_BRIGHTNESS_FILTER,
          CHANGE_CONTRAST_FILTER,
          CHANGE_NONE_FILTER,
          CHANGE_SOLID_BACKGROUND_FILTER,
          CHANGE_LINEAR_GRADIENT_FILTER,
          CHANGE_RADIAL_GRADIENT_FILTER,
          CHANGE_TYPE_CHOSEN_FILTER
        } 
from '../constants/types';

const initialState  = {
  blur : 0,
  hueRotate : 0,
  invert : 0,
  grayScale : 0,
  sepia : 0,
  saturation : 0,
  brightness : 0 ,
  contrast : 0,
  none : true,
  solidBackground : false,
  linearGradient  : false,
  radialGradient  : false,
  typeChosen : 'none'
}

export default function(state = initialState , action = {}){
  switch (action.type) {
     case CHANGE_BLUR_FILTER:
      state = {...state, blur : action.payload}
      return state;
   
     case CHANGE_HUE_ROTATE_FILTER:
      state = {...state, hueRotate : action.payload}
      return state;
     
     case CHANGE_INVERT_FILTER:
      state = {...state, invert : action.payload}
      return state;

     case CHANGE_GRAY_SCALE_FILTER:
      state = {...state, grayScale : action.payload}
      return state;
     
     case CHANGE_SEPIA_FILTER:
      state = {...state, sepia : action.payload}
      return state;
       
     case CHANGE_SATURATION_FILTER:
      state = {...state, saturation : action.payload}
      return state;
        
     case CHANGE_BRIGHTNESS_FILTER:
      state = {...state, brightness : action.payload}
      return state;
         
     case CHANGE_CONTRAST_FILTER:
      state = {...state, contrast : action.payload}
      return state;
    
     case CHANGE_NONE_FILTER:
      state = {...state, none : action.payload}
      return state;
     
     case CHANGE_SOLID_BACKGROUND_FILTER:
      state = {...state, solidBackground : action.payload}
      return state;
            
     case CHANGE_LINEAR_GRADIENT_FILTER:
      state = {...state, linearGradient : action.payload}
      return state;
             
     case CHANGE_RADIAL_GRADIENT_FILTER:
      state = {...state, radialGradient : action.payload}
      return state;
              
     case CHANGE_TYPE_CHOSEN_FILTER:
      state = {...state, typeChosen : action.payload}
      return state;
               
    default:
      return state;
  }
}