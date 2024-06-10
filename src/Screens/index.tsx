import React from 'react';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./Dashboard";
import {connect} from "react-redux";
import {stateType} from "store/initialState";
import Login from "./Login";


const Index = (props: { token: any }) => {
    const router = createBrowserRouter(props.token ?
        [
            {
                path: "/",
                element: <Dashboard/>,
            },
        ]
        :
        [
            {
                path: "/",
                element: <Login/>,
            },
        ]
    );
    return (
        <RouterProvider router={router}/>
    );
};

const mapStateToProps = (state: stateType) => {
    return {
        token: state.user.tokens,
    }
}

export default connect(mapStateToProps)(Index);