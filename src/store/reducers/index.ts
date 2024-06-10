import {combineReducers} from "redux";
import configSlice from "./configSlice";
import userSlice from "./userSlice";


const rootReducer = combineReducers({
    config: configSlice,
    user: userSlice
});
export default rootReducer;
