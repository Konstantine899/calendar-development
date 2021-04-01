import { combineReducers } from 'redux';
import { formReducer } from './form/form.reducer.js';

export const rootReducer = combineReducers({
  formData: formReducer,
});
