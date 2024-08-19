import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useMutation} from "@apollo/client";
import {ClientInput} from "../../gql/graphql";
import ClientForm from "@common/Forms/ClientForm";
import {CREATE_CLIENT} from "@common/gql/client";

const CreateClient = (props: { refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addCompany, {loading, error}] = useMutation(CREATE_CLIENT);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: ClientInput) => {
        addCompany({
            variables: {
                data: data
            }
        }).then((resp) => {
            if (resp.data.addClient) {
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
    }, [error])

    return (
        <>
            {contextHolder}
            <Button type="primary" onClick={showDrawer}>
                Create
            </Button>
            <Drawer
                title="New Client"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <ClientForm loading={loading} onSubmit={onSubmit} formRef={formRef}/>
            </Drawer>
        </>
    );
};

export default CreateClient;