import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useLazyQuery, useMutation} from "@apollo/client";
import {ClientInput} from "../../gql/graphql";
import {EditOutlined} from "@ant-design/icons";
import ClientForm from "@common/Forms/ClientForm";
import {GET_CLIENT, UPDATE_CLIENT} from "@common/gql/client";

const EditClient = (props: { refetch: any, clientId: string }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [updateClient, {loading, error}] = useMutation(UPDATE_CLIENT);
    const [getClient, {data}] = useLazyQuery(GET_CLIENT)
    const showDrawer = () => {
        setOpen(true);
        getClient({
            variables: {
                id: props.clientId
            }
        })
    };

    React.useEffect(() => {
        if (data?.client)
            formRef.current?.setFieldsValue(data.client);
    }, [data])

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: ClientInput) => {
        updateClient({
            variables: {
                data: data,
                id: props.clientId
            }
        }).then((resp) => {
            if (resp.data.updateClient) {
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

    const reset = () => {
        formRef.current?.setFieldsValue(data.client);
    }

    return (
        <>
            {contextHolder}
            <Button type="link" onClick={showDrawer}>
                <EditOutlined/>
            </Button>
            <Drawer
                title="Edit Client"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <ClientForm loading={loading} formRef={formRef} onSubmit={onSubmit} reset={reset}/>
            </Drawer>
        </>
    );
};

export default EditClient;