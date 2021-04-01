export const formState = {
  Q1: '',
};

export const formReducer = (state = formState, { type, payload }) => {
  switch (type) {
    case 'FORM.SET_DATA':
      return { ...state, ...payload.formData };

    default:
      return state;
  }
};
