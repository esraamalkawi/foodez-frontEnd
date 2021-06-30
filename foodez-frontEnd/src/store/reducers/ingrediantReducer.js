import * as actionTypes from "../actions/types";

const initialState = {
  ingrediants: [],
};
const ingrediantReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_INGREDIANT:
      return {
        ...state,
        ingrediants: [...state.ingrediants, action.payload],
      };

    case actionTypes.FETCH_INGREDIANT:
      return {
        ...state,
        ingrediants: action.payload,
      };
    default:
      return state;
  }
};
export default ingrediantReducer;
