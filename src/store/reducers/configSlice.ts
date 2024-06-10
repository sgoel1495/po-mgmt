import {createSlice} from "@reduxjs/toolkit";
import {Config} from "../initialState";


const configSlice = createSlice({
    name: "config",
    initialState: Config,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        }
    }
});

export const {
    setTheme,
} = configSlice.actions;
export default configSlice.reducer;
