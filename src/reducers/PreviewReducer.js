import 
{
  CHANGE_SRC_OF_IMAGE,
  SHOW_CSS
}
from '../constants/types';
import atx from '../images/atx.jpg';

const initialState = {
  src : atx,
  showCss : true
}

export default (state = initialState , action = {}) => {
  switch (action.type) {
    case CHANGE_SRC_OF_IMAGE:
      state = {...state, src: action.payload};
      return state;
    case SHOW_CSS :
      state = {...state, showCss : action.payload};
      return state;
    default:
      return state;
  }
}
