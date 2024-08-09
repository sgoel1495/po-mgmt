import React from 'react';
import {Provider} from "react-redux";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import Screens from "./Screens";
import {ApolloClient, InMemoryCache, ApolloProvider, createHttpLink} from '@apollo/client';
import {graphUrl} from "config/urls";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: graphUrl,
});

const authLink = setContext((_, { headers }) => {
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


const client = new ApolloClient({
    link: authLink.concat(httpLink),
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
    }
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
