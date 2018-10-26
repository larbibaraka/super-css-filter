import {
  CHANGE_BLUR_FILTER ,  CHANGE_HUE_ROTATE_FILTER ,
  CHANGE_INVERT_FILTER,  CHANGE_GRAY_SCALE_FILTER,
  CHANGE_SEPIA_FILTER,  CHANGE_SATURATION_FILTER,
  CHANGE_BRIGHTNESS_FILTER,  CHANGE_CONTRAST_FILTER,
  CHANGE_TYPE_CHOSEN_FILTER,  CHANGE_CLEAR_ALL_FILTER
} 
from '../constants/types';


export function change_blur_filter(value){
  return ({
    type : CHANGE_BLUR_FILTER,
    payload : value 
  })
}

export function change_hue_rotate_filter(value){
  return ({
    type : CHANGE_HUE_ROTATE_FILTER,
    payload : value 
  })
}

export function change_invert_filter(value){
  return ({
    type : CHANGE_INVERT_FILTER,
    payload : value 
  })
}
export function change_gray_scale_filter(value){
  return ({
    type : CHANGE_GRAY_SCALE_FILTER,
    payload : value 
  })
}
export function change_sepia_filter(value){
  return ({
    type : CHANGE_SEPIA_FILTER,
    payload : value 
  })
}
export function change_satuation_filter(value){
  return ({
    type : CHANGE_SATURATION_FILTER,
    payload : value 
  })
}
export function change_brightness_filter(value){
  return ({
    type : CHANGE_BRIGHTNESS_FILTER,
    payload : value 
  })
}
export function change_contrast_filter(value){
  return ({
    type : CHANGE_CONTRAST_FILTER,
    payload : value 
  })
}

export function change_type_chosen_filter(value){
  return ({
    type : CHANGE_TYPE_CHOSEN_FILTER,
    payload : value 
  })
}
export function clear_all(){
  return ({
    type : CHANGE_CLEAR_ALL_FILTER,
    })
}
 