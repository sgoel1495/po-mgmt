import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useLazyQuery, useMutation} from "@apollo/client";
import {JoiningUpdateInput} from "../../../../gql/graphql";
import JoiningForm from "@common/Forms/JoiningForm";
import {GET_JOINING, UPDATE_JOINING} from "@common/gql/joining";
import {EditOutlined} from "@ant-design/icons";
import dayjs from "dayjs";


const EditJoining = (props: { joiningId: string, refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [updateJoining, {loading, error}] = useMutation(UPDATE_JOINING);
    const [getJoining, {data}] = useLazyQuery(GET_JOINING);

    const showDrawer = () => {
        getJoining({
            variables: {
                id: props.joiningId,
            }
        })
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    React.useEffect(() => {
        if (data?.joining) {
            formRef.current?.setFieldsValue({
                ...data.joining,
                candidate: data.joining.candidate.id,
                company: data.joining.company.id,
                joiningDate: dayjs(data.joining.joiningDate),
                actualStartDate: dayjs(data.joining.actualStartDate),
            })
        }
    }, [data])

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

    const onSubmit = (data: JoiningUpdateInput) => {
        updateJoining({
            variables: {
                data: {
                    ...data,
                    actualStartDate: data.actualStartDate.format('YYYY-MM-DD'),
                    joiningDate: data.joiningDate.format('YYYY-MM-DD')
                },
                joiningId: props.joiningId,
            }
        }).then((resp) => {
            if (resp.data.updateJoining) {
                setOpen(false)
                formRef.current?.resetFields();
                props.refetch();
            }
        }).catch(() => {
        })
    }

    return (
        <>
            {contextHolder}
            <Button type="link" onClick={showDrawer}>
                <EditOutlined/>
            </Button>
            <Drawer
                title="Edit Joining"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <JoiningForm formRef={formRef} loading={loading} onSubmit={onSubmit} defaultValue={data?.joining}/>
            </Drawer>
        </>
    );
};

export default EditJoining;