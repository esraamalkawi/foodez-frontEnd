import * as actionTypes from "../actions/types";

const initialState = {
  categories: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    case actionTypes.CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.payload],
      };
    default:
      return state;
  }
};
export default categoryReducer;
