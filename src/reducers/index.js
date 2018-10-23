import { combineReducers } from 'redux';
import  FilterReducer from './FiltersReducer';
import  PreviewReducer from './PreviewReducer';
export default combineReducers({
  FilterReducer : FilterReducer,
  PreviewReducer: PreviewReducer
});