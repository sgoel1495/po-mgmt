import React from 'react';
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import Screens from "./Screens";
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import {graphUrl} from "@config/urls";
import {setContext} from "@apollo/client/link/context";
import {onError} from "@apollo/client/link/error";
import {logout} from "@store/reducers/userSlice";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token = store.getState().user.tokens?.accessToken;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const errorLink = onError(({networkError}: any) => {
    if (networkError)
        if (networkError.statusCode === 401) {
            store.dispatch(logout())
        }
});

const uploadlink = createUploadLink({
    uri: graphUrl,
    headers: {
        "Apollo-Require-Preflight": "true",
    },
})

const client = new ApolloClient({
    link: authLink.concat(errorLink).concat(uploadlink),
    cache: new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
        },
        query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
        },
        mutate: {
            errorPolicy: 'all',
        }
    },

});

function App() {
    return (
        <ApolloProvider client={client}>
            <Provider store={store}>
                <PersistGate persistor={persistor} loading={<></>}>
                    <Screens/>
                </PersistGate>
            </Provider>
        </ApolloProvider>
    );
}

export default App;
