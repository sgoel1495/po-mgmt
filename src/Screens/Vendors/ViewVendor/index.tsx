import React from 'react';
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {Card, Descriptions, Tabs} from "antd";
import AddOpening from "./Opening/AddOpening";
import ViewOpening from "./Opening/ViewOpening";
import {GET_VIEW_VENDOR} from "@common/gql/vendor";
import Documents from "@common/Documents";


const Index = () => {
    const params = useParams()
    const {loading, error, data, refetch} = useQuery(GET_VIEW_VENDOR, {
        variables: {id: params.id},
    });
    // @ts-ignore
    const items = React.useMemo(() => {
        if (data?.vendor) {
            return {
                main: [
                    {
                        key: 'vendorId',
                        label: 'Vendor Id',
                        children: data.vendor['vendorId']
                    },
                    {
                        key: 'name',
                        label: 'Name',
                        children: data.vendor['name']
                    },
                    {
                        key: 'company',
                        label: 'Client',
                        children: data.vendor['client']['companyName']
                    },
                    {
                        key: 'einNumber',
                        label:
                            'EIN Number',
                        children: data.vendor['einNumber']
                    },
                    {
                        key: 'paymentTerms',
                        label: 'Payment Terms',
                        children: data.vendor['paymentTerms'] + " Days"
                    },
                    {
                        key: 'address',
                        label: 'Address',
                        children: <>
                            {data.vendor['addressLine1']}
                            ,
                            {data.vendor['addressLine2']}
                            ,
                            {data.vendor['addressLine3']}
                        </>
                    }
                ],
                signingAuth: [
                    {
                        key: 'authSignName',
                        label: 'Name',
                        children: data.vendor['authSignName']
                    },
                    {
                        key: 'authSignEmail',
                        label: 'Email',
                        children: data.vendor['authSignEmail']
                    },
                    {
                        key: 'authSignDesig',
                        label: 'Designation',
                        children: data.vendor['authSignDesig']
                    }
                ],
                bank: [
                    {
                        key: 'name',
                        label: 'Bank Name',
                        children: data.vendor['bank']['bankName']
                    },
                    {
                        key: 'accountName',
                        label: 'Account Name',
                        children: data.vendor['bank']['accountName']
                    },
                    {
                        key: 'accountNumber',
                        label: 'Account Number',
                        children: data.vendor['bank']['accountNumber']
                    },
                    {
                        key: 'routingNumber',
                        label: 'Routing Number',
                        children: data.vendor['bank']['routingNumber']
                    },
                    {
                        key: 'address',
                        label: 'Address',
                        children: <>
                            {data.vendor['bank']['addressLine1']}
                            ,
                            {data.vendor['bank']['addressLine2']}
                            ,
                            {data.vendor['bank']['addressLine3']}
                        </>
                    }
                ]
            }
        } else {
            return {}
        }
    }, [data?.vendor])
    // @ts-ignore
    return (
        <>
            <Descriptions title="Staffing Company Info" items={items.main} layout={'vertical'} column={5} bordered/>
            <div className={'my-4 flex justify-between gap-5'}>
                <Card title="Signing Authority" className={'flex-[2]'}>
                    <Descriptions items={items.signingAuth} layout={'vertical'} column={2}/>
                </Card>
                <Card title="Bank" className={'flex-[3]'}>
                    <Descriptions items={items.bank} layout={'vertical'} column={3}/>
                </Card>
            </div>
            <Documents ownerId={params.id ? params.id : ""}/>
            <Card
                className={"my-5"}
                title={'openings'}
                extra={<AddOpening vendorId={params.id} refetch={refetch}/>}
            >
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={'left'}
                    style={{height: 400}}
                    items={data?.vendor.openings?.map((item: any) => {
                        return {
                            label: item.name,
                            key: item.id,
                            children: <ViewOpening
                                refetch={refetch}
                                opening={item}
                                clientId={data.vendor.client.id}
                                vendorId={params.id ? params.id : ''}
                            />,
                        };
                    })}
                />
            </Card>

        </>
    );
};

export default Index;