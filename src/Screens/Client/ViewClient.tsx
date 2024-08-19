import React from 'react';
import {Card, Descriptions} from "antd";
import {useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import {GET_CLIENT} from "@common/gql/client";

const ViewClient = () => {
    const params = useParams()
    const {loading, error, data} = useQuery(GET_CLIENT, {
        variables: {id: params.id},
    });

    const items = React.useMemo(() => {
        if (data?.client) {
            return {
                main: [
                    {
                        key: 'companyName',
                        label: 'Client Name',
                        children: data.client['companyName']
                    },
                    {
                        key: 'logo',
                        label: 'Logo',
                        children: data.client['logo']
                    }
                ],
                address: [
                    {
                        key: 'addressLine1',
                        label: 'Address Line 1',
                        children: data.client['addressLine1']
                    },
                    {
                        key: 'addressLine2',
                        label: 'Address Line 2',
                        children: data.client['addressLine2']
                    },
                    {
                        key: 'addressLine3',
                        label: 'Address Line 3',
                        children: data.client['addressLine3']
                    }
                ],
                signAuth: [
                    {
                        key: 'signingAuthName',
                        label: 'Signing Auth Name',
                        children: data.client['signingAuthName']
                    },
                    {
                        key: 'signingAuthEmail',
                        label: 'Signing Auth Email',
                        children: data.client['signingAuthEmail']
                    },
                    {
                        key: 'signingAuthDesignation',
                        label: 'Signing Auth Designation',
                        children: data.client['signingAuthDesignation']
                    }
                ]
            }
        } else {
            return {}
        }
    }, [data?.client])


    return (
        <>
            <Descriptions title="Client Info" items={items.main} layout={'vertical'} bordered/>
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

export default ViewClient;