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
  CHANGE_BACKGROUND_COLOR,
  CHANGE_INCREMENT_COLOR,
  CHANGE_MIX_BLEND_MODE,
  CHANGE_GRADIENT_DIRECTION,
  CHANGE_GRADIENT_POSITION,
  CHANGE_GRADIENT_SIZE,
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
  opacity: 100,
  IncrementColor1: 0,
  IncrementColor2: 0,
  mode: 'Normal',
  gradientdirection: 'tobottom',
  gradientPosition: 'centercenter',
  gradientSize: 'closestCorner',
}

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case CHANGE_BLUR_FILTER:
      state = {...state, blur: action.payload}
      return state

    case CHANGE_HUE_ROTATE_FILTER:
      state = {...state, hueRotate: action.payload}
      return state

    case CHANGE_INVERT_FILTER:
      state = {...state, invert: action.payload}
      return state

    case CHANGE_GRAY_SCALE_FILTER:
      state = {...state, grayScale: action.payload}
      return state

    case CHANGE_SEPIA_FILTER:
      state = {...state, sepia: action.payload}
      return state

    case CHANGE_SATURATION_FILTER:
      state = {...state, saturation: action.payload}
      return state

    case CHANGE_BRIGHTNESS_FILTER:
      state = {...state, brightness: action.payload}
      return state

    case CHANGE_CONTRAST_FILTER:
      state = {...state, contrast: action.payload}
      return state

    case CHANGE_TYPE_CHOSEN_FILTER:
      state = {...state, typeChosen: action.payload}
      return state

    case CHANGE_CLEAR_ALL_FILTER:
      state = initialState
      return state

    case CHANGE_BACKGROUND_COLOR:
      state = {...state, backgroundColor1: action.payload}
      return state

    case CHANGE_INCREMENT_COLOR:
      state = {...state, IncrementColor1: action.payload}
      return state

    case CHANGE_MIX_BLEND_MODE:
      state = {...state, mode: action.payload}
      return state

    case CHANGE_GRADIENT_DIRECTION:
      state = {...state, gradientdirection: action.payload}
      return state

    case CHANGE_GRADIENT_POSITION:
      state = {...state, gradientPosition: action.payload}
      return state

    case CHANGE_GRADIENT_SIZE:
      state = {...state, gradientSize: action.payload}
      return state

    default:
      return state
  }
}
