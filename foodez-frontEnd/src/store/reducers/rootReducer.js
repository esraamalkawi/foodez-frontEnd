import { combineReducers } from "redux";
import ingrediantReducer from "./ingrediantReducer";

import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  ingrediants: ingrediantReducer,
  categories: categoryReducer,
});
export default rootReducer;
