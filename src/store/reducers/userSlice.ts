import {createSlice} from "@reduxjs/toolkit";
import {userState} from "../initialState";

const userSlice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        firstLogin: (state, action) => {
            state.tokens = action.payload.tokens;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.tokens = undefined;
            state.role = '';
        },
    }

});

export const {firstLogin, logout} = userSlice.actions;
export default userSlice.reducer;
