import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card, Descriptions} from "antd";
import dayjs from "dayjs";

const GET_CANDIDATE = gql`
    query QueryCandidateById($id: ObjectID) {
        candidate(id: $id) {
            name
            personalEmail
            addressLine1
            addressLine2
            addressLine3
            contact
            officialEmail
            manager
            empId
            joiningDate
            actualStartDate
            vendorRate{
                rate
                otRate
            }
            candidateRate{
                rate
                otRate
            }
            paymentTerms
            companyName
            vendorSpoc{
                name
                email
                phone
            }
            vendorAcctSpoc{
                name
                email
                phone
            }
            bank{
                accountNumber
                accountName
                routingNumber
                bankName
            }
            company {
                id
                companyName
            }
            vendor {
                id
                name
            }
            projectName
            projectLocation
            timesheetApprover{
                name
                email
            }
        }
    }
`

const ViewCandidate = () => {
    const params = useParams()
    const navigate = useNavigate();
    const {loading, error, data} = useQuery(GET_CANDIDATE, {
        variables: {id: params.id},
    });

    const items = React.useMemo(() => {
        if (data?.candidate)
            return {
                personal: [
                    {
                        key: 'name',
                        label: 'Name',
                        children: data.candidate['name']
                    },

                    {
                        key: 'personalEmail',
                        label: 'Personal Email',
                        children: data.candidate['personalEmail']
                    },
                    {
                        key: 'contact',
                        label: 'Phone Number',
                        children: data.candidate['contact']
                    },
                    {
                        key: 'address',
                        label: 'Address',
                        children: <>
                            {data.candidate['addressLine1']},&nbsp;
                            {data.candidate['addressLine2']},&nbsp;
                            {data.candidate['addressLine3']}
                        </>
                    },

                ],
                workInfo: [
                    {
                        key: 'companyName',
                        label: 'Company Name',
                        children: data.candidate['company']['companyName']
                    },
                    {
                        key: 'projectName',
                        label: 'Project Name',
                        children: data.candidate.projectName
                    },
                    {
                        key: 'projectLocation',
                        label: 'Project Location',
                        children: data.candidate.projectLocation
                    },
                    {
                        key: 'empId',
                        label: 'Emp Id',
                        children: data.candidate['empId']
                    },
                    {
                        key: 'officialEmail',
                        label: 'Official Email',
                        children: data.candidate['officialEmail']
                    },
                    {
                        key: 'manager',
                        label: 'Manager',
                        children: data.candidate['manager']
                    },
                    {
                        key: 'joiningDate',
                        label: 'Joining Date',
                        children: data.candidate['joiningDate']
                    },
                    {
                        key: 'actualStartDate',
                        label: 'Actual Start Date',
                        children: data.candidate['actualStartDate']
                    }
                ],
                vendorRate: [
                    {
                        key: 'vendorName',
                        label: 'Vendor Name',
                        children: data.candidate.vendor['name']
                    },
                    {
                        key: 'vendorRate.rate',
                        label: 'Rate',
                        children: data.candidate.vendorRate['rate'] + "$ / Hr"
                    },
                    {
                        key: 'vendorRate.otRate',
                        label: 'OT Rate',
                        children: data.candidate.vendorRate['otRate'] + "$ / Hr"
                    }
                ],
                candidateRate: [
                    {
                        key: 'candidateRate.rate',
                        label: 'Rate',
                        children: data.candidate.candidateRate['rate'] + "$ / Hr"
                    },
                    {
                        key: 'candidateRate.otRate',
                        label: 'OT Rate',
                        children: data.candidate.candidateRate['otRate'] + "$ / Hr"
                    },
                    {
                        key: 'timesheetApproverName',
                        label: 'Timesheet Approver Name',
                        children: data.candidate.timesheetApprover?.name
                    },
                    {
                        key: 'timesheetApproverEmail',
                        label: 'Timesheet Approver Email',
                        children: data.candidate.timesheetApprover?.email
                    }
                ],
                bank: [
                    {
                        key: 'companyName',
                        label: 'Company Name',
                        children: data.candidate.companyName
                    },
                    {
                        key: 'bankName',
                        label: 'Bank Name',
                        children: data.candidate.bank.bankName
                    },
                    {
                        key: 'accountName',
                        label: 'Account Name',
                        children: data.candidate.bank.accountName
                    },
                    {
                        key: 'accountNumber',
                        label: 'Account Number',
                        children: data.candidate.bank.accountNumber
                    },
                    {
                        key: 'routingNumber',
                        label: 'Routing Number',
                        children: data.candidate.bank.routingNumber
                    }
                ]
            }
        else
            return {}
    }, [data?.candidate])
    if(loading)
        return <></>
    return (
        <div>
            <div className={'flex justify-between items-center'}>
                <span className={'text-2xl font-semibold'}>Candidate Info</span>
                {
                    dayjs(data.candidate.actualStartDate).isBefore(dayjs()) &&
                    <Button type={'primary'} onClick={() => navigate('timesheet')}>TimeSheets</Button>
                }
            </div>
            <div className={'flex gap-5 my-5'}>
                <Card title="Personal Info" type={'inner'}>
                    <Descriptions items={items.personal} layout={'vertical'}/>
                </Card>
                <Card title="Work Info" type={'inner'}>
                    <Descriptions items={items.workInfo} layout={'vertical'}/>
                </Card>
            </div>
            <Card title="Payment Info" type={'inner'} extra={<div>
                <span className={'font-light text-zinc-600'}>Payment Terms: </span>
                <span>{data?.candidate.paymentTerms} Days</span>
            </div>}>
                <div className={'flex gap-5'}>
                    <Card title="Vendor Rate" className={'flex-[6]'} type={'inner'}>
                        <Descriptions column={2} items={items.vendorRate} layout={'vertical'}/>
                    </Card>
                    <Card title="Candidate Rate" className={'flex-[8]'} type={'inner'}>
                        <Descriptions column={2} items={items.candidateRate} layout={'vertical'}/>
                    </Card>
                    <Card title="Bank" className={'flex-[10]'} type={'inner'}>
                        <Descriptions items={items.bank} layout={'vertical'}/>
                    </Card>
                </div>
            </Card>
        </div>
    );
};

export default ViewCandidate;