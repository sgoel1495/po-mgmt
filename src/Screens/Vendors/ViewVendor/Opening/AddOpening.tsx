import React from 'react';
import {Button, Drawer, notification} from "antd";
import {useMutation} from "@apollo/client";
import {OpeningInput} from "../../../../gql/graphql";
import OpeningForm from "@common/Forms/OpeningForm";
import {ADD_OPENING} from "@common/gql/opening";

const AddOpening = (props: { vendorId?: string, refetch: any }) => {
    const [api, contextHolder] = notification.useNotification();
    const [open, setOpen] = React.useState(false);
    const formRef = React.useRef<any>(null);
    const [addOpening, {loading, error}] = useMutation(ADD_OPENING);
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

    const onSubmit = (data: OpeningInput) => {
        addOpening({
            variables: {
                data: data,
                vendorId: props.vendorId
            }
        }).then((resp) => {
            if(resp.data.addOpening) {
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
                Add Opening
            </Button>
            <Drawer
                title="New Opening"
                onClose={onClose}
                open={open}
            >
                <OpeningForm formRef={formRef} loading={loading} onSubmit={onSubmit}/>
            </Drawer>
        </>
    );
};

export default AddOpening;