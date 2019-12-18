import { ADD_PRODUCT, SUCCESS } from '../constants/actionTypes';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case `${ADD_PRODUCT}_${SUCCESS}`:
      return [...state, payload];

    default:
      return state;
  }
};
