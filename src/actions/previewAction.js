import 
{
  CHANGE_SRC_OF_IMAGE,
  SHOW_CSS
}
from '../constants/types';

export function uploadNewImage (value){
  return ({
    type : CHANGE_SRC_OF_IMAGE,
    payload : value
  })
}

export function showCssBlock (value){
  return ({
    type : SHOW_CSS,
    payload : value
  })
}


