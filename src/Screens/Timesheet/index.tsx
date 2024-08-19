import React from 'react';
import {gql, useQuery} from "@apollo/client";
import {useParams} from "react-router-dom";
import MonthSelector from "./MonthSelector";
import WeekSelector from "./WeekSelector";
import dayjs from "dayjs";
import {Descriptions} from "antd";

const GET_CANDIDATE = gql`
    query QueryBasicCandidateById($id: ObjectID) {
        candidate(id: $id) {
            name
#            empId
#            actualStartDate
#            client {
#                id
#                companyName
#            }
#            vendor {
#                id
#                name
#            },
#            projectName
#            projectLocation
#            timesheetApprover {
#                name
#                email
#            }
#            candidateRate {
#                otRate
#                rate
#            }
        }
    }
`

const GET_TIMESHEET = gql`
    query QueryTimeSheet($month: Int, $candidate: ID) {
        getTimeSheet(month: $month, candidate: $candidate) {
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

    const {loading, error, data} = useQuery(GET_CANDIDATE, {
        variables: {id: params.id},
    });
    const {data: timesheet, refetch} = useQuery(GET_TIMESHEET, {
        variables: {month: selected.month(), candidate: params.id},
    });

    if (loading)
        return <></>

    const items = {
        data: [


            {
                key: 'empID',
                label: 'Emp ID',
                children: data.candidate['empId'],
            },
            {
                key: 'name',
                label: 'Name',
                children: data.candidate['name'],
            },
            {
                key: 'actualStartDate',
                label: 'Start Date',
                children: data.candidate['actualStartDate'],
            },
            {
                key: 'vendor',
                label: 'Vendor',
                children: data.candidate['vendor']['name'],
            },
            {
                key: 'companyName',
                label: 'Client',
                children: data.candidate['client']['companyName'],
            },
            {
                key: 'projectName',
                label: 'Project Name',
                children: data.candidate['projectName'],
            },
            {
                key: 'projectLocation',
                label: 'Project Location',
                children: data.candidate['projectLocation'],
            },
            {
                key: 'timesheetApproverName',
                label: 'Approver Name',
                children: data.candidate['timesheetApprover']?.name,
            },
            {
                key: 'timesheetApproverEmail',
                label: 'Approver Email',
                children: data.candidate['timesheetApprover']?.email,
            },
        ],

    }

    return (
        <div>
            <div className={'mb-4'}>
                <Descriptions items={items.data} bordered column={4} title={'Candidate Info'}/>
            </div>
            <MonthSelector startDate={data.candidate.actualStartDate} setSelected={setSelected} selected={selected}
                           timesheet={timesheet?.getTimeSheet?.timeSheet}/>
            <WeekSelector selectedDate={selected} timesheet={timesheet?.getTimeSheet}
                          candidate={params.id ? params.id : ''} refetch={refetch} rate={data.candidate.candidateRate}/>
        </div>
    );
};

export default Index;