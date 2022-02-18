import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({userReducer, globalReducer})

export default reducer
