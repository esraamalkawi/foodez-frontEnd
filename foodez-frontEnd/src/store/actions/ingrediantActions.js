import axios from "axios";
import * as actionTypes from "./types";

export const createIngrediant = (newIngrediant, categoryId) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngrediant) formData.append(key, newIngrediant[key]);
      const res = await axios.post(
        `http://localhost:8000/categories/${categoryId}/ingrediants`,
        formData
      );
      dispatch({
        type: actionTypes.CREATE_INGREDIANT,
        payload: { newIngrediant: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchIngrediants = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://localhost:8000/ingrediants");
      dispatch({
        type: actionTypes.FETCH_INGREDIANT,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
