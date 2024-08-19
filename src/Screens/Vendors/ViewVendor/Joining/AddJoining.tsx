import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useMutation} from "@apollo/client";
import {JoiningInput} from "../../../../gql/graphql";
import JoiningForm from "@common/Forms/JoiningForm";
import {ADD_JOINING} from "@common/gql/joining";


const AddJoining = (props: { clientId: string, vendorId: string, openingId: string, refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addJoining, {loading, error}] = useMutation(ADD_JOINING);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

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

    const onSubmit = (data: JoiningInput) => {
        addJoining({
            variables: {
                data: {
                    ...data,
                    client: props.clientId,
                    vendor: props.vendorId,
                    actualStartDate: data.actualStartDate.format('YYYY-MM-DD'),
                    joiningDate: data.joiningDate.format('YYYY-MM-DD')
                },
                openingId: props.openingId
            }
        }).then((resp) => {
            if (resp.data.addJoining) {
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
            <Button type="primary" onClick={showDrawer}>
                Add Joining
            </Button>
            <Drawer
                title="New Joining"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <JoiningForm formRef={formRef} loading={loading} onSubmit={onSubmit}/>
            </Drawer>
        </>
    );
};

export default AddJoining;