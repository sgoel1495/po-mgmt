import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import MonthSelector from "./MonthSelector";
import WeekSelector from "./WeekSelector";
import dayjs from "dayjs";
import {Descriptions} from "antd";
import {GET_CANDIDATE_JOINING} from "@common/gql/joining";

const GET_TIMESHEET = gql`
    query QueryTimeSheet($month: String, $joining: ID) {
        getTimeSheet(month: $month, joining: $joining) {
            id
            timeSheet {
                date
                standardHours
                OTHours
            }
            submissionDate
            approvalDate
            status
        }
    }
`


const Index = () => {
    const params = useParams()
    const [selected, setSelected] = React.useState<dayjs.Dayjs>(dayjs())

    const {loading, error, data} = useQuery(GET_CANDIDATE_JOINING, {
        variables: {candidateId: params.id},
    });
    const {data: timesheet, refetch} = useQuery(GET_TIMESHEET, {
        variables: {month: selected.set("date", 1).format("YYYY-MM-DD"), joining: params.joiningId},
    });

    if (loading)
        return <></>

    const joining = data.joiningByCandidate?.joinings.find((item: any) => item.joining.id === params.joiningId);

    const items = {
        data: [


            {
                key: 'empID',
                label: 'Emp ID',
                children: joining.joining['empId'],
            },
            {
                key: 'name',
                label: 'Name',
                children: data.joiningByCandidate.candidate['name'],
            },
            {
                key: 'paymentTerms',
                label: 'Payment Terms',
                children: joining.joining['paymentTerms']+ " Days",
            },
            {
                key: 'company',
                label: 'Company',
                children: joining.joining['company']['companyName'],
            },
            {
                key: 'actualStartDate',
                label: 'Start Date',
                children: joining.joining['actualStartDate'],
            },
            {
                key: 'vendor',
                label: 'Vendor',
                children: joining.joining['vendor']['name'],
            },
            {
                key: 'companyName',
                label: 'Client',
                children: joining.joining['client']['companyName'],
            },
            {
                key: 'projectName',
                label: 'Project Name',
                children: joining.opening['endClient'],
            },
            {
                key: 'projectLocation',
                label: 'Project Location',
                children: joining.opening['location'],
            },
            {
                key: 'timesheetApproverName',
                label: 'Approver Name',
                children: joining.joining['timesheetApprover']?.name,
            },
            {
                key: 'timesheetApproverEmail',
                label: 'Approver Email',
                children: joining.joining['timesheetApprover']?.email,
            },
        ],

    }

    return (
        <div>
            <div className={'mb-4'}>
                <Descriptions items={items.data} bordered column={4} title={'Candidate Info'}/>
            </div>
            <MonthSelector startDate={joining.joining['actualStartDate']} setSelected={setSelected} selected={selected}
                           timesheet={timesheet?.getTimeSheet?.timeSheet}/>
            <WeekSelector selectedDate={selected} timesheet={timesheet?.getTimeSheet} refetch={refetch}
                          rate={joining.joining.candidateRate} invoiceNames={joining.joining.invoices}/>
        </div>
    );
};

export default Index;