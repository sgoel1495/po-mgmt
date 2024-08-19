import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useMutation} from "@apollo/client";
import {CandidateInput} from "../../gql/graphql";
import CandidateForm from "@common/Forms/CandidateForm";
import {CREATE_CANDIDATE} from "@common/gql/candidate";

const CreateCandidate = (props: { refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addCandidate, {loading, error}] = useMutation(CREATE_CANDIDATE);
    const onClose = () => {
        setOpen(false);
    };
    const showDrawer = () => {
        setOpen(true);
    };
    const onSubmit = (data: CandidateInput) => {
        addCandidate({
            variables: {
                data: data
            }
        }).then((resp) => {
            if(resp.data.addCandidate) {
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
        <Button type="primary" onClick={showDrawer}>
            Create
        </Button>
        <Drawer
            title="New Candidate"
            onClose={onClose}
            open={open}
            size={'large'}
        >
            <CandidateForm formRef={formRef} loading={loading} onSubmit={onSubmit}/>
        </Drawer>
    </>
};

export default CreateCandidate;