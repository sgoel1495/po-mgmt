import React from 'react';
import {Button, Drawer, notification} from "antd";
import {EditOutlined} from "@ant-design/icons";
import ClientForm from "@common/Forms/ClientForm";
import {useMutation} from "@apollo/client";
import {mediaUrl} from "@config/urls";
import {DocumentInput} from "../../gql/graphql";
import {UPDATE_DOCUMENT} from "@common/gql/document";
import DocumentForm from "@common/Forms/DocumentForm";

const EditDocument = (props: { data: any, refetch: any }) => {

    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [updateClient, {loading, error}] = useMutation(UPDATE_DOCUMENT);
    const showDrawer = () => {
        setOpen(true);
    };
    React.useEffect(() => {
        if (props.data && open) {
            formRef.current?.setFieldsValue({
                name: props.data.name,
                description: props.data.description,
                file: [{
                    uid: '1',
                    name: props.data.link,
                    status: 'done',
                    url: mediaUrl + "/" + props.data.link,
                }]
            });
        }
    }, [props.data,open])

    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: DocumentInput) => {
        updateClient({
            variables: {
                data: {...data, file: data.file && data.file[0] ? data.file[0].originFileObj : undefined},
                id: props.data.id
            }
        }).then((resp) => {
            if (resp.data.updateDocument) {
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
        formRef.current?.setFieldsValue({
            name: props.data.name,
            description: props.data.description,
            file: [{
                uid: '1',
                name: props.data.link,
                status: 'done',
                url: mediaUrl + "/" + props.data.link,
            }]
        });
    }
    return (
        <>
            {contextHolder}
            <Button type="link" onClick={showDrawer}>
                <EditOutlined/>
            </Button>
            <Drawer
                title="Edit Document"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <DocumentForm loading={loading} formRef={formRef} onSubmit={onSubmit} reset={reset}/>
            </Drawer>
        </>
    );
};

export default EditDocument;