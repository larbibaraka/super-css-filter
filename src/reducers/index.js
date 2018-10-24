import { combineReducers } from 'redux';
import  FilterReducer from './FiltersReducer';
import  PreviewReducer from './PreviewReducer';
export default combineReducers({
  Filter : FilterReducer,
  PreviewReducer: PreviewReducer
});


 