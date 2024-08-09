import React from 'react';
import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import Dashboard from "./Dashboard";
import {connect} from "react-redux";
import {stateType} from "store/initialState";
import Login from "./Login";
import Header from "./Header";
import Vendors from "./Vendors";
import Company from "./Company";
import Candidates from "./Candidates";
import ViewCompanies from "./Company/ViewCompanies";
import ViewVendor from "./Vendors/ViewVendor";
import ViewCandidate from './Candidates/ViewCandidate';
import Timesheet from "./Timesheet";
import Users from "./Users";


const Index = (props: { token: any, role: string }) => {
    const items = [
        {
            key: 'dashboard',
            label: `Dashboard`,
            path: '/',
            element: <Dashboard/>,
        },
        {
            key: 'vendors',
            label: `Vendors`,
            path: '/vendors',
            element: <Vendors/>,
        },
        {
            key: 'company',
            label: `Company`,
            path: '/company',
            element: <Company/>,
        },
        {
            key: 'candidates',
            label: `Candidates`,
            path: '/candidates',
            element: <Candidates/>,
        }
    ];

    const navigationItems = [
        {
            path: 'company/:id',
            element: <ViewCompanies/>,
        },
        {
            path: 'vendors/:id',
            element: <ViewVendor/>,
        },
        {
            path: 'candidates/:id',
            element: <ViewCandidate/>,
        },
        {
            path: 'candidates/:id/timesheet',
            element: <Timesheet/>,
        }
    ]
    if (props.role === 'Admin')
        items.push({
            key: 'users',
            label: `Users`,
            path: '/users',
            element: <Users/>,
        })

    const router = createBrowserRouter(props.token ? [
                {
                    path: '',
                    element: <Header items={items}/>,
                    children: [
                        ...items.map((item) => ({
                            path: item.path,
                            element: item.element,
                        })),
                        ...navigationItems,
                        {
                            path:'*',
                            element: <Navigate to="/" replace/>,
                        }
                    ]
                }
            ]
            :
            [
                {
                    path: "/",
                    element: <Login/>,
                }, {
                    path:'*',
                    element: <Navigate to="/" replace/>,
                }
            ]
    );

    return (
        <RouterProvider
            router={router}
        />
    );
};

const mapStateToProps = (state: stateType) => {
    return {
        token: state.user.tokens,
        role: state.user.role,
    }
}

export default connect(mapStateToProps)(Index);