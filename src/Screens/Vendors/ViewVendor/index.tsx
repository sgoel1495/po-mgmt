import React from 'react';
import {useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import {Card, Descriptions, Tabs} from "antd";
import {DescriptionsItemType} from "antd/es/descriptions";
import AddOpening from "./AddOpening";
import ViewOpening from "./ViewOpening";

const GET_VENDOR = gql`
    query QueryVendorById($id: ObjectID) {
        vendor(id: $id) {
            name
            vendorId
            addressLine1
            addressLine2
            addressLine3
            einNumber
            authSignName
            authSignEmail
            authSignDesig
            paymentTerms
            bank{
                bankName
                accountName
                accountNumber
            }
            company {
                id
                companyName
            }
            openings {
                id
                name
                suggestedRate {
                    otRate
                    rate
                }
                candidates {
                    id
                    name
                    joiningDate
                    paymentTerms
                    actualStartDate
                    contact
                    manager
                }
            }
        }
    }
`

const Index = () => {
    const params = useParams()
    const {loading, error, data, refetch} = useQuery(GET_VENDOR, {
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
                        label: 'Company',
                        children: data.vendor['company']['companyName']
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
                    }
                ],
                address: [
                    {
                        key: 'addressLine1',
                        label: 'Address Line 1',
                        children: data.vendor['addressLine1']
                    },
                    {
                        key: 'addressLine2',
                        label: 'Address Line 2',
                        children: data.vendor['addressLine2']
                    },
                    {
                        key: 'addressLine3',
                        label: 'Address Line 3',
                        children: data.vendor['addressLine3']
                    }
                ],
                bank: [
                    {
                        key: 'name',
                        label: 'Bank Name',
                        children: data.vendor['bankName']
                    },
                    {
                        key: 'accountName',
                        label: 'Account Name',
                        children: data.vendor['accountName']
                    },
                    {
                        key: 'accountNumber',
                        label: 'Account Number',
                        children: data.vendor['accountNumber']
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
            <Descriptions title="Vendor Info" items={items.main} layout={'vertical'} column={5} bordered/>
            <div className={'my-4 flex justify-between gap-5'}>
                <Card title="Address">
                    <Descriptions items={items.address} layout={'vertical'} column={2}/>
                </Card>
                <Card title="Signing Authority">
                    <Descriptions items={items.address} layout={'vertical'} column={2}/>
                </Card>
                <Card title="Bank">
                    <Descriptions items={items.address} layout={'vertical'} column={2}/>
                </Card>
            </div>
            <Card
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
                                companyId={data.vendor.company.id}
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