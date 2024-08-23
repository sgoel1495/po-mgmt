import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useMutation} from "@apollo/client";
import {CREATE_DOCUMENT} from "@common/gql/document";
import {DocumentInput} from "../../gql/graphql";
import DocumentForm from "@common/Forms/DocumentForm";

const CreateDocument = (props: { ownerId: string, refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addDocument, {loading, error}] = useMutation(CREATE_DOCUMENT);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: DocumentInput) => {
        addDocument({
            variables: {
                data: {...data, file: data.file && data.file[0] ? data.file[0].originFileObj : undefined},
                ownerId: props.ownerId
            }
        }).then((resp) => {
            if (resp.data.addDocument) {
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
                title="New Document"
                onClose={onClose}
                open={open}
                size={'large'}
            >
                <DocumentForm loading={loading} onSubmit={onSubmit} formRef={formRef}/>
            </Drawer>
        </>
    );
};

export default CreateDocument;