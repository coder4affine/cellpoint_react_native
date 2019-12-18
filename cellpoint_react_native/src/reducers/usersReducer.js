import { LOAD_USERS, REGISTER_USER, SUCCESS } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${LOAD_USERS}_${SUCCESS}`:
      return payload;

    case `${REGISTER_USER}_${SUCCESS}`:
      return [...state, payload];

    default:
      return state;
  }
};
