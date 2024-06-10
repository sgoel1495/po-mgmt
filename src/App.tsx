import React from 'react';
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import Screens from "./Screens";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<></>}>
                <Screens/>
            </PersistGate>
        </Provider>
    );
}

export default App;
