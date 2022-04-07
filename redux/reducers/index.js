import { combineReducers } from "redux";
import editorReducer from "./editor";
import exploreReducer from "./explore";
import mainReducer from "./main";
import usersReducer from "./users";

const rootReducer = combineReducers({
  editor: editorReducer,
  users: usersReducer,
  explore: exploreReducer,
  main: mainReducer,
});

export default rootReducer;
