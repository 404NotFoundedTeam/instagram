// example of action creator
export const setEditorState = (editorState) => {
  return {
    type: "SET_EDITOR_STATE",
    editorState,
  };
};
