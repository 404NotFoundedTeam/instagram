const initialState = {
  editorState: {
    example: "example",
  },
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default editorReducer;
