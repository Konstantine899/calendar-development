import { FORM_SET_DATA } from '../types.js';

export const setFormDataAction = (formData) => ({
  payload: { formData },
  type: FORM_SET_DATA,
});
