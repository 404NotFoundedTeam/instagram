import { dispatch } from "../store";

export const setMode = (mode) => {
  dispatch({ type: "SET_MODE", payload: mode });
};
