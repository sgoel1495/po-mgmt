import React from 'react';
import {Card, DatePicker, Descriptions, Select, Tabs} from "antd";
import dayjs from "dayjs";
import TimeEntry from "./TimeEntry";
import FormActions from "./FormActions";
import {TimeSheet, TimeSheetStatus} from "../../gql/graphql";
import _ from "lodash";
import PdfActions from "./PdfActions";

type timeEntryState = {
    [x: string]: {
        ot?: number;
        st?: number;
    }
}

const WeekSelector = (props: {
    selectedDate: dayjs.Dayjs,
    timesheet: TimeSheet,
    candidate: string,
    refetch: any,
    rate: any
}) => {
    const [status, setStatus] = React.useState<string | null>(null);
    const [submissionDate, setSubmissionDate] = React.useState<dayjs.Dayjs | null>(null);
    const [approvalDate, setApprovalDate] = React.useState<dayjs.Dayjs | null>(null);
    const [currentTab, setCurrentTab] = React.useState(props.selectedDate.set('date', 1).format());
    const [timeEntry, setTimeEntry] = React.useState<timeEntryState>({})
    const items = React.useMemo(() => {
        setCurrentTab(props.selectedDate.set("date", 1).format());
        let i = 1, temp = [];
        let startDate = props.selectedDate.set('date', 1);
        while (true) {
            const endDate = startDate.endOf('week').month() !== props.selectedDate.month() ? props.selectedDate.endOf('month') : startDate.endOf('week')
            temp.push(
                {
                    key: startDate.format(),
                    label: <div>
                        <div className={'font-semibold'}>
                            Week {i}
                        </div>
                        <div>
                            {startDate.format('DD')} - {endDate.format('DD')} {endDate.format('MMM')}
                        </div>
                    </div>,
                    children: <TimeEntry startDate={startDate} endDate={endDate} timeEntry={timeEntry}
                                         setTimeEntry={setTimeEntry}/>
                }
            )
            i++;
            startDate = endDate.add(1, 'day')
            if (startDate.month() !== props.selectedDate.month())
                break
        }
        return temp
    }, [props.selectedDate, timeEntry])

    const origTimeSheet = React.useMemo(() => {
        const temp: any = {}
        props.timesheet?.timeSheet?.map((item) => {
            temp[item.date] = {
                ot: item.OTHours,
                st: item.standardHours
            }
        })
        setTimeEntry(temp)
        return temp
    }, [props.timesheet])

    React.useEffect(() => {
        setApprovalDate(props.timesheet?.approvalDate ? dayjs(props.timesheet.approvalDate) : null)
        setSubmissionDate(props.timesheet?.submissionDate ? dayjs(props.timesheet.submissionDate) : null)
        setStatus(props.timesheet?.status ? props.timesheet?.status : null)
    }, [props.timesheet])

    const reset = () => {
        setTimeEntry(origTimeSheet)
        setApprovalDate(props.timesheet?.approvalDate ? dayjs(props.timesheet.approvalDate) : null)
        setSubmissionDate(props.timesheet?.submissionDate ? dayjs(props.timesheet.submissionDate) : null)
        setStatus(props.timesheet?.status ? props.timesheet?.status : null)
    }
    const sthours = Object.keys(timeEntry).reduce((acc, curr) => {
        let temp = acc
        if (timeEntry[curr]?.st) {
            // @ts-ignore
            temp += timeEntry[curr].st
        }
        return temp
    }, 0)
    const otHours = Object.keys(timeEntry).reduce((acc, curr) => {
        let temp = acc
        if (timeEntry[curr]?.ot) {
            // @ts-ignore
            temp += timeEntry[curr].ot
        }
        return temp
    }, 0)

    const data = {
        hours: [
            {
                key: 'total',
                label: 'Total',
                children: Object.keys(timeEntry).reduce((acc, curr) => {
                    let temp = acc
                    if (timeEntry[curr]?.st) {
                        // @ts-ignore
                        temp += timeEntry[curr].st
                    }
                    if (timeEntry[curr]?.ot) {
                        // @ts-ignore
                        temp += timeEntry[curr].ot
                    }
                    return temp
                }, 0) + ' Hrs'
            },
            {
                key: 'st',
                label: 'Standard Hours',
                children: sthours + ' Hrs'
            },
            {
                key: 'ot',
                label: 'OverTime Hours',
                children: otHours + ' Hrs'
            },
            {
                key: 'stRate',
                label: 'Standard Rate',
                children: `$${props.rate.rate}/Hr`
            },
            {
                key: 'otRate',
                label: 'OverTime Rate',
                children: `$${props.rate.otRate}/Hr`
            },
            {
                key: 'payout',
                label: 'Total Payout',
                children: `$${(props.rate.otRate*otHours) + (props.rate.rate*sthours)}`
            },
            {
                key: 'submissionDate',
                label: 'Submission Date',
                children: <DatePicker value={submissionDate} onChange={setSubmissionDate}/>,
            },
            {
                key: 'approvalDate',
                label: 'Approval Date',
                children: <DatePicker value={approvalDate} onChange={setApprovalDate}/>,
            },
            {
                key: 'status',
                label: 'Timesheet Status',
                children: <Select
                    placeholder={'timesheet status'}
                    onChange={setStatus}
                    value={status}
                    options={[
                        {value: TimeSheetStatus.Approved, label: 'Approved'},
                        {value: TimeSheetStatus.Submitted, label: 'Submitted'},
                    ]}
                />,
            }
        ]
    }
    const dataChanged = React.useMemo(() => {
        let flag = !_.isEqual(origTimeSheet, timeEntry) || status !== props.timesheet?.status
        if (submissionDate !== props.timesheet?.submissionDate) {
            flag = flag || submissionDate?.format('YYYY-MM-DD') !== props.timesheet?.submissionDate
        }
        if (approvalDate !== props.timesheet?.approvalDate) {
            flag = flag || approvalDate?.format('YYYY-MM-DD') !== props.timesheet?.approvalDate
        }
        return flag
    }, [origTimeSheet, timeEntry, submissionDate, approvalDate, props.timesheet?.submissionDate, props.timesheet?.approvalDate, status, props.timesheet?.status])

    return (<Card className={'mt-5'}>
            <Descriptions
                items={data.hours}
                className={'mt-5 mb-5'}
                column={5}
                bordered
            />
            <Tabs
                tabPosition={'top'}
                type={'card'}
                items={items}
                tabBarExtraContent={dataChanged ?
                    <FormActions
                        timeSheetId={props.timesheet?.id?.toString()}
                        reset={reset}
                        timeEntry={timeEntry}
                        month={dayjs(currentTab).month()}
                        candidate={props.candidate}
                        refetch={props.refetch}
                        approvalDate={approvalDate}
                        submissionDate={submissionDate}
                        status={status}
                    /> :
                    <PdfActions/>
                }
            />
        </Card>
    );
};

export default WeekSelector;