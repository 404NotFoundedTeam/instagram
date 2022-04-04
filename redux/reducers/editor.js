import { SET_EDITOR_STATE } from "../types";

const initialState = {
  editorState: {
    example: "example",
  },
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EDITOR_STATE:
      return { ...state, editorState: action.editorState };
    default:
      return state;
  }
};

export default editorReducer;
