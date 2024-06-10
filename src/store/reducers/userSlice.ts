import {createSlice} from "@reduxjs/toolkit";
import {userState} from "../initialState";

const userSlice = createSlice({
    name: "user",
    initialState: userState,
    reducers: {
        firstLogin: (state, action) => {
            state.tokens = action.payload.tokens;
            state.user = action.payload.user;
        },
        login: (state, action) => {
            if (state.tokens !== null) {
                state.tokens = action.payload;
            }
        },
        logout: (state) => {
            state.tokens = undefined;
            state.user = userState.user;
        },
        setUserData: (state, action) => {
            state.user = action.payload;
        },
        setDisplayName: (state, action) => {
            state.displayName = action.payload;
        }
    }

});

export const {firstLogin, setDisplayName, login, logout, setUserData} = userSlice.actions;
export default userSlice.reducer;
