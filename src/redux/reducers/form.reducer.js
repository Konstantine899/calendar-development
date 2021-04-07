import { formState } from '../store/form.state.js';
import { FORM_SET_DATA } from '../types.js';

export const formReducer = (state = formState, { type, payload }) => {
  switch (type) {
    case FORM_SET_DATA:
      return { ...state, ...payload.formData };

    default:
      return state;
  }
};
