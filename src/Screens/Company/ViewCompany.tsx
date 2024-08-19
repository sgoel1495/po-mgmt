import React from 'react';
import {Card, Descriptions, List} from "antd";
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {GET_COMPANY} from "@common/gql/company";
import {GET_COMPANY_JOINING} from "@common/gql/joining";

const ViewCompany = () => {
    const params = useParams()
    const {data} = useQuery(GET_COMPANY, {
        variables: {id: params.id},
    });
    const {data: companyJoiningData} = useQuery(GET_COMPANY_JOINING, {
        variables: {companyId: params.id},
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
                        key: 'ownerName',
                        label: 'Owner Name',
                        children: data.company['ownerName']
                    },
                    {
                        key: 'address',
                        label: 'Address',
                        children: <>
                            {data.company['addressLine1']}
                            <br/>
                            {data.company['addressLine2']}
                            <br/>
                            {data.company['addressLine3']}
                        </>
                    }
                ],
                bank: [
                    {
                        key: 'name',
                        label: 'Bank Name',
                        children: data.company['bank']['bankName']
                    },
                    {
                        key: 'accountName',
                        label: 'Account Name',
                        children: data.company['bank']['accountName']
                    },
                    {
                        key: 'accountNumber',
                        label: 'Account Number',
                        children: data.company['bank']['accountNumber']
                    },
                    {
                        key: 'routingNumber',
                        label: 'Routing Number',
                        children: data.company['bank']['routingNumber']
                    },
                    {
                        key: 'address',
                        label: 'Address',
                        children: <>
                            {data.company['bank']['addressLine1']}
                            <br/>
                            {data.company['bank']['addressLine2']}
                            <br/>
                            {data.company['bank']['addressLine3']}
                        </>
                    }
                ]
            }
        } else {
            return {}
        }
    }, [data?.company])

    const companyJoining = React.useMemo(() => {
        if (companyJoiningData?.joiningByBank) {
            return companyJoiningData?.joiningByBank.map((item: any, index: string) => {
                return {
                    key: index.toString(),
                    candidate: item.candidate.name,
                    vendor: item.vendor.name,
                }
            })
        } else {
            return []
        }
    }, [companyJoiningData?.joiningByBank])

    return (
        <>
            <Descriptions title="Company Info" items={items.main} layout={'vertical'} bordered/>
            <div className={'flex my-5 gap-5'}>
                <Card title="Bank" className={'flex-1'}>
                    <Descriptions items={items.bank} layout={'vertical'}/>
                </Card>
                <Card title="Usage" className={'flex-1'}>
                    <List dataSource={companyJoining}
                          className={'h-52 overflow-auto'}
                          renderItem={(item: any) => {
                              return <List.Item key={item.key} className={'!p-2'}>
                                  <div className={'flex gap-10'}>
                                      <div>
                                          <span className={'font-semibold'}>Vendor: </span>
                                          <span>{item.vendor}</span>
                                      </div>
                                      <div>
                                          <span className={'font-semibold'}>Candidate: </span>
                                          <span>{item.candidate}</span>
                                      </div>
                                  </div>
                              </List.Item>
                          }}
                    />
                </Card>
            </div>
        </>
    );
};

export default ViewCompany;