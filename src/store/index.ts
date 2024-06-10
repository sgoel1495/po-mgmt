import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import {configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {PreloadedState} from "./initialState";
import rootReducer from "./reducers";


const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["config", "user"]
};

const createStore = (preloadedState: any) => {
    const mainReducer = (state: any, action: any) => {
        if (action.type === "RESET_APP") {
            return preloadedState;
        }
        return rootReducer(state, action);
    };
    const persistedReducer = persistReducer(persistConfig, mainReducer);
    return configureStore({
        reducer: persistedReducer,
        preloadedState: preloadedState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }),
    });
};

export const store = createStore(PreloadedState);

export const persistor = persistStore(store);
