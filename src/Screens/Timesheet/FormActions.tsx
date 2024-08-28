import React from 'react';
import {Button, notification} from "antd";
import {gql, useMutation} from "@apollo/client";
import {TimeSheetInput, TimeSheetStatus} from "../../gql/graphql";
import dayjs from "dayjs";
import {useParams} from "react-router-dom";

type timeEntryState = {
    [x: string]: {
        ot?: number;
        st?: number;
    }
}

const UPDATE_TIMESHEET = gql`
    mutation UpdateTimeSheet($data: TimeSheetInput) {
        updateTimeSheet(data: $data)
    }
`

const FormActions = (props: {
    reset: () => null | void,
    timeEntry: timeEntryState,
    month: string,
    timeSheetId?: string,
    refetch: any,
    submissionDate: dayjs.Dayjs | null,
    approvalDate: dayjs.Dayjs | null,
    status: string | null | undefined
}) => {
    const params = useParams()
    const [api, contextHolder] = notification.useNotification();
    const [updateTimesheet, {loading, error}] = useMutation(UPDATE_TIMESHEET);
    const onSave = () => {
        const data: TimeSheetInput = {
            id: props.timeSheetId,
            joining: params.joiningId,
            month: props.month,
            timeSheet: Object.keys(props.timeEntry).map((item) => {
                return {
                    date: item,
                    standardHours: props.timeEntry[item].st,
                    OTHours: props.timeEntry[item].ot
                }
            }),
            approvalDate: props.approvalDate?.format('YYYY-MM-DD'),
            submissionDate: props.submissionDate?.format('YYYY-MM-DD')
        }
        if (props.status)
            data['status'] = props.status as TimeSheetStatus
        updateTimesheet({
            variables: {
                data: data
            }
        }).then(() => {
            props.refetch()
        }).catch(() => {
        })
    }

    React.useEffect(() => {
        if (error) {
            if (error.graphQLErrors.length) {
                api.error({
                    message: 'Server Error',
                    description: error.graphQLErrors[0].message
                })
            } else if (error.clientErrors.length) {
                api.error({
                    message: 'Client Error',
                    description: error.clientErrors[0].message
                })
            }
        }
    }, [api, error])

    return (
        <div className={'flex gap-5'}>
            {contextHolder}
            <Button type={'primary'} onClick={onSave} loading={loading}>Save</Button>
            <Button onClick={props.reset} disabled={loading}>Reset</Button>
        </div>
    );
};

export default FormActions;