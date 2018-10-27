import {
  CHANGE_BLUR_FILTER,
  CHANGE_HUE_ROTATE_FILTER,
  CHANGE_INVERT_FILTER,
  CHANGE_GRAY_SCALE_FILTER,
  CHANGE_SEPIA_FILTER,
  CHANGE_SATURATION_FILTER,
  CHANGE_BRIGHTNESS_FILTER,
  CHANGE_CONTRAST_FILTER,
  CHANGE_CLEAR_ALL_FILTER,
  CHANGE_TYPE_CHOSEN_FILTER,
  CHANGE_BACKGROUND1_COLOR,
  CHANGE_BACKGROUND2_COLOR,
  CHANGE_INCREMENT1_COLOR,
  CHANGE_INCREMENT2_COLOR,
  CHANGE_MIX_BLEND_MODE,
  CHANGE_GRADIENT_DIRECTION,
  CHANGE_GRADIENT_POSITION,
  CHANGE_GRADIENT_SIZE,
  CHANGE_OPACITY_VALUE
} from '../constants/types'

const initialState = {
  blur: 0,
  hueRotate: 0,
  invert: 0,
  grayScale: 0,
  sepia: 0,
  saturation: 100,
  brightness: 100,
  contrast: 100,
  typeChosen: 'none',
  backgroundColor1: '#00d1b2',
  backgroundColor2: '#c4c4c4',
  opacity: 0.5,
  IncrementColor1: 10,
  IncrementColor2: 100,
  mode: 'Normal',
  gradientdirection: 'To Bottom',
  gradientPosition: 'center center',
  gradientSize: 'closest-corner',
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_BLUR_FILTER:
      state = {...state, blur: action.payload};
      return state;

    case CHANGE_HUE_ROTATE_FILTER:
      state = {...state, hueRotate: action.payload};
      return state;

    case CHANGE_INVERT_FILTER:
      state = {...state, invert: action.payload};
      return state;

    case CHANGE_GRAY_SCALE_FILTER:
      state = {...state, grayScale: action.payload};
      return state;

    case CHANGE_SEPIA_FILTER:
      state = {...state, sepia: action.payload};
      return state;

    case CHANGE_SATURATION_FILTER:
      state = {...state, saturation: action.payload};
      return state;

    case CHANGE_BRIGHTNESS_FILTER:
      state = {...state, brightness: action.payload};
      return state;

    case CHANGE_CONTRAST_FILTER:
      state = {...state, contrast: action.payload};
      return state;

    case CHANGE_TYPE_CHOSEN_FILTER:
      state = {...state, typeChosen: action.payload};
      return state;

    case CHANGE_CLEAR_ALL_FILTER:
      state = initialState
      return state;

    case CHANGE_BACKGROUND1_COLOR:
      state = {...state, backgroundColor1: action.payload};
      return state;

    
      case CHANGE_BACKGROUND2_COLOR:
      state = {...state, backgroundColor2: action.payload};
      return state;  

    case CHANGE_INCREMENT1_COLOR:
      state = {...state, IncrementColor1: action.payload};
      return state;
      
    case CHANGE_INCREMENT2_COLOR:
      state = {...state, IncrementColor2: action.payload};
      return state;

    case CHANGE_MIX_BLEND_MODE:
      state = {...state, mode: action.payload};
      return state;

    case CHANGE_GRADIENT_DIRECTION:
      state = {...state, gradientdirection: action.payload};
      return state;

    case CHANGE_GRADIENT_POSITION:
      state = {...state, gradientPosition: action.payload};
      return state;

    case CHANGE_GRADIENT_SIZE:
      state = {...state, gradientSize: action.payload};
      return state;

    case CHANGE_OPACITY_VALUE :
      //let opacity = action.payload /100;
      state = {...state , opacity : action.payload  };
      return state;

    default:
      return state;
  }
}
