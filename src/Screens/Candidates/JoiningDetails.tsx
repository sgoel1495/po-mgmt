import React from 'react';
import {Card, Descriptions} from "antd";
import Documents from "@common/Documents";

const JoiningDetails = (props: { joining: any, opening:any }) => {

    const items = {
        workInfo: [
            {
                key: 'companyName',
                label: 'Client Name',
                children: props.joining['client']['companyName']
            },
            {
                key: 'endClient',
                label: 'End Client',
                children: props.opening.endClient
            },
            {
                key: 'location',
                label: 'Project Location',
                children: props.opening.location
            },
            {
                key: 'designation',
                label: 'Designation',
                children: props.opening.name
            },
            {
                key: 'empId',
                label: 'Emp Id',
                children: props.joining['empId']
            },
            {
                key: 'officialEmail',
                label: 'Official Email',
                children: props.joining['officialEmail']
            },
            {
                key: 'manager',
                label: 'Manager',
                children: props.joining['timesheetApprover']['name']
            },
            {
                key: 'joiningDate',
                label: 'Joining Date',
                children: props.joining['joiningDate']
            },
            {
                key: 'actualStartDate',
                label: 'Actual Start Date',
                children: props.joining['actualStartDate']
            },
            {
                key: 'companyName',
                label: 'Company Name',
                children: props.joining.company.companyName
            }
        ],
        vendorRate: [
            {
                key: 'vendorName',
                label: 'Vendor Name',
                children: props.joining.vendor['name']
            },
            {
                key: 'vendorRate.rate',
                label: 'Rate',
                children: props.joining.vendorRate['rate'] + "$ / Hr"
            },
            {
                key: 'vendorRate.otRate',
                label: 'OT Rate',
                children: props.joining.vendorRate['otRate'] + "$ / Hr"
            }
        ],
        candidateRate: [
            {
                key: 'candidateRate.rate',
                label: 'Rate',
                children: props.joining.candidateRate['rate'] + "$ / Hr"
            },
            {
                key: 'candidateRate.otRate',
                label: 'OT Rate',
                children: props.joining.candidateRate['otRate'] + "$ / Hr"
            },
            {
                key: 'timesheetApproverName',
                label: 'Timesheet Approver Name',
                children: props.joining.timesheetApprover?.name
            },
            {
                key: 'timesheetApproverEmail',
                label: 'Timesheet Approver Email',
                children: props.joining.timesheetApprover?.email
            }
        ],
        vendorSpoc :[
            {
                key: 'name',
                label: 'Name',
                children: props.joining.vendorSpoc['name']
            },
            {
                key: 'email',
                label: 'Email',
                children: props.joining.vendorSpoc['email']
            },
            {
                key: 'phone',
                label: 'Phone',
                children: props.joining.vendorSpoc['phone']
            }
        ],
        vendorAcctSpoc :[
            {
                key: 'name',
                label: 'Name',
                children: props.joining.vendorAcctSpoc['name']
            },
            {
                key: 'email',
                label: 'Email',
                children: props.joining.vendorAcctSpoc['email']
            },
            {
                key: 'phone',
                label: 'Phone',
                children: props.joining.vendorAcctSpoc['phone']
            }
        ]
    }

    return (
        <div>
            <Descriptions items={items.workInfo} layout={'vertical'} column={5} bordered/>
            <div className={'flex gap-5 my-5'}>
                <Card type={'inner'} title={'Vendor Rate'}>
                    <Descriptions items={items.vendorRate} layout={'vertical'} column={3}/>
                </Card>
                <Card type={'inner'} title={'Candidate Rate'}>
                    <Descriptions items={items.candidateRate} layout={'vertical'} column={3}/>
                </Card>
            </div>
            <div className={'flex gap-5'}>
                <Card type={'inner'} title={'Vendor Spoc'}>
                    <Descriptions items={items.vendorSpoc} layout={'vertical'} column={3}/>
                </Card>
                <Card type={'inner'} title={'Vendor Account Spoc'}>
                    <Descriptions items={items.vendorAcctSpoc} layout={'vertical'} column={3}/>
                </Card>
            </div>
            <Documents ownerId={props.joining.id ? props.joining.id : ""}/>
        </div>
    );
};

export default JoiningDetails;