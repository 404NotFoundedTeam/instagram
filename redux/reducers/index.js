import { combineReducers } from "redux";
import editorReducer from "./editor";
import usersReducer from "./users";

const rootReducer = combineReducers({
  editor: editorReducer,
  users: usersReducer,
});

export default rootReducer;
