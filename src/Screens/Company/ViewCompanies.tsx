import React from 'react';
import {Card, Descriptions, Drawer} from "antd";
import {gql, useMutation, useQuery} from "@apollo/client";
import {useLocation, useParams, useRoutes} from "react-router-dom";

const GET_COMPANY = gql`
    query QueryCompanyById($id: ObjectID) {
        company(id: $id) {
            companyName
            endClient
            logo
            signingAuthName
            signingAuthEmail
            signingAuthDesignation
            addressLine1
            addressLine2
            addressLine3
        }
    }
`

const ViewCompanies = () => {
    const params = useParams()
    const {loading, error, data} = useQuery(GET_COMPANY, {
        variables: {id: params.id},
    });


    const items = React.useMemo(() => {
        if (data?.company) {
            return {
                main: [
                    {
                        key: 'companyName',
                        label: 'Company Name',
                        children: data.company['companyName']
                    },
                    {
                        key: 'endClient',
                        label: 'End Client',
                        children: data.company['endClient']
                    },
                    {
                        key: 'logo',
                        label: 'Logo',
                        children: data.company['logo']
                    }
                ],
                address: [
                    {
                        key: 'addressLine1',
                        label: 'Address Line 1',
                        children: data.company['addressLine1']
                    },
                    {
                        key: 'addressLine2',
                        label: 'Address Line 2',
                        children: data.company['addressLine2']
                    },
                    {
                        key: 'addressLine3',
                        label: 'Address Line 3',
                        children: data.company['addressLine3']
                    }
                ],
                signAuth: [
                    {
                        key: 'signingAuthName',
                        label: 'Signing Auth Name',
                        children: data.company['signingAuthName']
                    },
                    {
                        key: 'signingAuthEmail',
                        label: 'Signing Auth Email',
                        children: data.company['signingAuthEmail']
                    },
                    {
                        key: 'signingAuthDesignation',
                        label: 'Signing Auth Designation',
                        children: data.company['signingAuthDesignation']
                    }
                ]
            }
        } else {
            return {}
        }
    }, [data?.company])


    return (
        <>
            <Descriptions title="Company Info" items={items.main} layout={'vertical'} bordered/>
            <div className={'my-4 flex justify-between gap-5'}>
                <Card title="Address">
                    <Descriptions items={items.address} layout={'vertical'}/>
                </Card>
                <Card title="Signing Authority">
                    <Descriptions items={items.signAuth} layout={'vertical'}/>
                </Card>
            </div>
        </>
    );
};

export default ViewCompanies;