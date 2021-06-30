import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fetchIngrediants } from "./actions/ingrediantActions";
import { fetchCategories } from "./actions/categoriesActions";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchIngrediants());
store.dispatch(fetchCategories());

export default store;
