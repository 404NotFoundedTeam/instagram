import { combineReducers } from "redux";
import editorReducer from "./editor";
import exploreReducer from "./explore";
import usersReducer from "./users";

const rootReducer = combineReducers({
  editor: editorReducer,
  users: usersReducer,
  explore: exploreReducer,
});

export default rootReducer;
