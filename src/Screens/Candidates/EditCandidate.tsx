import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useLazyQuery, useMutation} from "@apollo/client";
import {CandidateInput} from "../../gql/graphql";
import {EditOutlined} from "@ant-design/icons";
import CandidateForm from "@common/Forms/CandidateForm";
import {EDIT_CANDIDATE, GET_CANDIDATE} from "@common/gql/candidate";


const EditCandidate = (props: { refetch: any, candidateId: string }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [updateCandidate, {loading, error}] = useMutation(EDIT_CANDIDATE);
    const [getCandidate, {data}] = useLazyQuery(GET_CANDIDATE);

    React.useEffect(() => {
        if (data?.candidate) {
            formRef.current?.setFieldsValue({
                ...data.candidate
            })
        }
    }, [data])

    const onClose = () => {
        setOpen(false);
    };
    const showDrawer = () => {
        getCandidate({
            variables: {
                id: props.candidateId
            }
        })
        setOpen(true);
    };
    const onSubmit = (data: CandidateInput) => {
        updateCandidate({
            variables: {
                data: data,
                id: props.candidateId
            }
        }).then((resp) => {
            if (resp.data.updateCandidate) {
                setOpen(false)
                formRef.current?.resetFields();
                props.refetch();
            }
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
    return <>
        {contextHolder}
        <Button type="link" onClick={showDrawer}>
            <EditOutlined/>
        </Button>
        <Drawer
            title="Edit Candidate"
            onClose={onClose}
            open={open}
            size={'large'}
        >
            <CandidateForm formRef={formRef} loading={loading} onSubmit={onSubmit}/>
        </Drawer>
    </>
};

export default EditCandidate;