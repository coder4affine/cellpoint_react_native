const initialState = {
  loading: false,
  data: [],
  error: false,
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case 'LOAD_USERS_REQUEST':
      return {...state, loading: true};

    case 'LOAD_USERS_SUCCESS':
      return {...state, loading: false, data: payload};

    case 'LOAD_USERS_FAIL':
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};
