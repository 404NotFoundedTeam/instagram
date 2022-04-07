const initialState = {
  mode: "light",
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_MODE":
      return { ...state, mode: action.payload };
    default:
      return state;
  }
};

export default mainReducer;
